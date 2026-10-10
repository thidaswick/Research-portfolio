import os
import re
import sys
import mimetypes
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

class RobustHTTPRequestHandler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def guess_type(self, path):
        if path.lower().endswith('.pdf'):
            return 'application/pdf'
        return super().guess_type(path)

    def end_headers(self):
        path = self.translate_path(self.path)
        if path.lower().endswith('.pdf'):
            self.send_header('Accept-Ranges', 'bytes')
            self.send_header('Content-Disposition', f'inline; filename="{os.path.basename(path)}"')
            self.send_header('Cache-Control', 'public, max-age=3600')
        else:
            self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

    def do_GET(self):
        path = self.translate_path(self.path)
        range_header = self.headers.get('Range')

        if not range_header or not os.path.isfile(path):
            try:
                return super().do_GET()
            except (ConnectionResetError, BrokenPipeError):
                return

        file_size = os.path.getsize(path)
        match = re.match(r'bytes=(\d*)-(\d*)', range_header.strip())
        if not match:
            try:
                return super().do_GET()
            except (ConnectionResetError, BrokenPipeError):
                return

        start_str, end_str = match.groups()
        if start_str and end_str:
            start = int(start_str)
            end = int(end_str)
        elif start_str:
            start = int(start_str)
            end = file_size - 1
        elif end_str:
            start = max(0, file_size - int(end_str))
            end = file_size - 1
        else:
            try:
                return super().do_GET()
            except (ConnectionResetError, BrokenPipeError):
                return

        if start >= file_size or end >= file_size or start > end:
            self.send_error(416, "Requested Range Not Satisfiable")
            return

        content_length = end - start + 1
        self.send_response(206)
        ctype = self.guess_type(path) or 'application/octet-stream'
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Range', f'bytes {start}-{end}/{file_size}')
        self.send_header('Content-Length', str(content_length))
        self.send_header('Content-Disposition', f'inline; filename="{os.path.basename(path)}"')
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Cache-Control', 'public, max-age=3600')
        self.send_header('Last-Modified', self.date_time_string(os.path.getmtime(path)))
        SimpleHTTPRequestHandler.end_headers(self)

        try:
            with open(path, 'rb') as f:
                f.seek(start)
                remaining = content_length
                chunk_size = 64 * 1024
                while remaining > 0:
                    chunk = f.read(min(chunk_size, remaining))
                    if not chunk:
                        break
                    self.wfile.write(chunk)
                    remaining -= len(chunk)
        except (ConnectionResetError, BrokenPipeError):
            pass

    def copyfile(self, source, outputfile):
        try:
            super().copyfile(source, outputfile)
        except (ConnectionResetError, BrokenPipeError):
            pass

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = ThreadingHTTPServer(('0.0.0.0', port), RobustHTTPRequestHandler)
    print(f"Serving HTTP/1.1 on 0.0.0.0 port {port} with Range support...")
    server.serve_forever()
