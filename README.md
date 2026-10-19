# CloudSphere — Cloud & Tech Club Frontend

A responsive, static frontend demo made with HTML, CSS, and vanilla JavaScript. It is intended for learning GitHub and deploying a static site on an Ubuntu EC2 instance using Nginx.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive layout and visual styling
- `script.js` — mobile navigation, event filters, event detail dialogs, and small interactions

## Run locally

Open `index.html` in a browser. For a local server, run `python3 -m http.server 8080` in this directory and visit `http://localhost:8080`.

## Deploy to Ubuntu + Nginx

1. Upload these files to a GitHub repository named `cloudsphere-frontend`.
2. Connect to your Ubuntu EC2 instance.
3. Install Git and Nginx:

   ```bash
   sudo apt update
   sudo apt install -y git nginx
   ```

4. Clone your repository (replace `YOUR_GITHUB_USERNAME`):

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/cloudsphere-frontend.git
   ```

5. Copy the frontend files into Nginx's web root:

   ```bash
   sudo cp -r cloudsphere-frontend/. /var/www/html/
   sudo chown -R www-data:www-data /var/www/html
   sudo systemctl enable --now nginx
   sudo nginx -t
   ```

6. In the EC2 security group's inbound rules, allow HTTP TCP port 80 from the sources required for your demo. For a public demo, this is commonly `0.0.0.0/0`; do not open SSH (port 22) to everyone. Keep SSH limited to your own IP where possible.
7. Open `http://YOUR_EC2_PUBLIC_IPV4` in your browser.

## Update after changing GitHub files

From the project directory on the instance:

```bash
git pull
sudo cp -r . /var/www/html/
```

If you use this update method, run it from the repository directory and ensure no unrelated files are copied into `/var/www/html/`.

## Notes

- This is a frontend-only demo. The events are sample content; the buttons do not submit registrations to a backend.
- Google Fonts are loaded from an external service; a system-font fallback is included.
- Do not commit cloud credentials, passwords, private keys, or `.pem` files to GitHub.
