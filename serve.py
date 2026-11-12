"""Local preview server for Atelier Oral.

Run from the folder containing this file:
    py -3 serve.py
Then open http://127.0.0.1:8000/

Serves the dist/ folder and maps .mjs to text/javascript so the
browser accepts the pdf-lib ES module (Windows registry MIME
mappings often return application/octet-stream for .mjs).
Compatible with Python 3.4+.
"""
import http.server
import os

DIST = os.path.join(os.path.dirname(os.path.abspath(__file__)), "dist")


class Handler(http.server.SimpleHTTPRequestHandler):
    extensions_map = dict(http.server.SimpleHTTPRequestHandler.extensions_map)
    extensions_map.update({
        ".js": "text/javascript",
        ".mjs": "text/javascript",
        ".css": "text/css",
        ".woff": "font/woff",
        ".webp": "image/webp",
        ".svg": "image/svg+xml",
    })

    def translate_path(self, path):
        # Serve files from dist/ regardless of the current directory.
        os.chdir(DIST)
        return http.server.SimpleHTTPRequestHandler.translate_path(self, path)


if __name__ == "__main__":
    httpd = http.server.HTTPServer(("127.0.0.1", 8000), Handler)
    print("Serving dist/ at http://127.0.0.1:8000/ (Ctrl+C to stop)")
    httpd.serve_forever()
