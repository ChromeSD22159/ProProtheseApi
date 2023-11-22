# Frederik Kohler NuxtJS Frontend 

### Deploymend
- .output
- package.json
- package-lock.json
- .env (or custom environment variables)
--> Run npm install on Plesk

### SSH
--> `cd /var/www/vhosts/frederikkohler.de/httpdocs`

`scp -r /Users/frederikkohler/Desktop/Github/ProProthese/frontend/.output root@frederikkohler.de:/var/www/vhosts/frederikkohler.de/httpdocs`

### Add Custom environment variables
- MAILHOST: `smtp.domain.de`
- MAILPORT: `<465>`
- MAILUSER: `email@domain.de`
- MAILPASS: `password`
- CONTACTMAIL: `email@domain.de`
- NOREPLY: `email@domain.de`
- STRAPI_URL: `domain.de`
- BETTERUPTIMETOKEN: `token`
- BETTERUPTIMEPAGES: `['id', 'id']`
- DEBUG: `true`
-- Restart App

### nginx config
- Navigate to: `cd /etc/nginx`
- Open nginx config file: `vim nginx.conf`

- Insert into `http {..}` after `server_tokens off;`: 

```
server {
    listen 80;
    server_name <domain.de>;  # Replace this with your own domain

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # Enable URI and query string forwarding
        proxy_set_header X-Original-URI $request_uri;
        proxy_set_header X-Original-Host $host;

        # Forwarding the upgrade headers, e.g. for WebSockets
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

- `systemctl restart nginx` OR `service nginx restart`

### New Release:
#### Deploy first to the stage and after a successful test to the live.
1. Upload the new folder `./output/publix` and if needed also `./output/server`
2. Restart App in Plesk