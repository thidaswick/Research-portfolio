import os
import sys
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

class DevelopmentServerHandler(SimpleHTTPRequestHandler):
    """
    Standard static file server for local development preview of HTML, CSS, and JS.
    """
    protocol_version = "HTTP/1.1"

    def end_headers(self):
        # Prevent aggressive local development caching
        self.send_header('Cache-Control', 'no-cache, must-revalidate')
        super().end_headers()

    def copyfile(self, source, outputfile):
        """Silently handle client disconnects (e.g. closing tab mid-stream)."""
        try:
            super().copyfile(source, outputfile)
        except (ConnectionResetError, BrokenPipeError, ConnectionAbortedError):
            pass

def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = ThreadingHTTPServer(('0.0.0.0', port), DevelopmentServerHandler)
    print(f"Serving static site on http://localhost:{port} (PID: {os.getpid()})...")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")

if __name__ == '__main__':
    main()

