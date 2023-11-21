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


# Frederik Kohler Strapi Backend 

### Deploymend
- config
- database
- public
- src
- types
- .env (or custom environment variables)
- favicon.png
- package.json
- package-lock.json
- server.js
--> Run `$ npm install on Plesk`
--> Run `$ npm run build`


### Add Custom environment variables
- HOST: `0.0.0.0`
- PORT: `1337`
- APP_KEYS: `token`
- API_TOKEN_SALT: `token`
- ADMIN_JWT_SECRET: `token`
- TRANSFER_TOKEN_SALT: `token`
- DATABASE_CLIENT: `mysql`
- DATABASE_HOST: `127.0.0.1`
- DATABASE_PORT: `3306`
- DATABASE_NAME: `name`
- DATABASE_USERNAME: `username`
- DATABASE_PASSWORD: `password`
- DATABASE_SSL: `false`
- JWT_SECRET: `token`
- EMAIL_PROVIDER: `nodemailer`
- EMAIL_SMTP_HOST: `smtp.domain.de`
- EMAIL_SMTP_PORT: `465`
- EMAIL_SMTP_USER: `noprely@domain.de`
- EMAIL_SMTP_PASS: `noReply@Fr3d3rik@Kohler`
- EMAIL_ADDRESS_FROM: `noprely@domain.de`
- EMAIL_ADDRESS_REPLY: `info@domain.de`
- EMAIL_ADDRESS_TO: `info@domain.de`

##New Release:
#### Deploy first to the stage and after a successful test to the live.
1. Upload a new folder or replace it with the new content types `src` `types`
2. when new plugin has been installed `$ npm install` and `$ npm run build`.
2. If needed, run `$ npm install` and `$ npm run build`. Never delete or change the `public` folder!
