"""Serve the portfolio locally with SPA fallbacks for case-study routes."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import sys
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent


class PortfolioHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=ROOT, **kwargs)

    def do_GET(self):
        path = urlsplit(self.path).path.rstrip("/") or "/"
        if path == "/work" or path.startswith("/work/"):
            self.path = "/index.html"
        super().do_GET()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    server = ThreadingHTTPServer(("127.0.0.1", port), PortfolioHandler)
    print(f"Portfolio preview: http://127.0.0.1:{port}/")
    print("SPA routes: /work/tradeflow, /work/ntheemba, /work/ncpc")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping portfolio preview.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
