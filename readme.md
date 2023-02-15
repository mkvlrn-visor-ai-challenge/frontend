# mkvlrn-visor-ai-challenge | frontend

## deploy

App is live in here: <https://mkvlrn-visor-ai-challenge.netlify.app>

## running locally

### requirements

- node 18 (developed with 18.14)
- yarn (developed with 1.22.19)
- the backend application running in dev mode
- port 3000 open and usable

### envs

Copy `.env.example` into a new `.env` file and update `VITE_BACKEND_URL` if needed because of conflicting ports.

### install deps

```bash
yarn install
```

### start dev mode

```bash
yarn dev
```

### in your browser

It should open automatically, but if it doesn't, just reach <http://localhost:3000>.

## what was used

- typescript
- [esm](https://nodejs.org/api/esm.html) (that's why node 18 is required)
- react
- [vite](https://github.com/vitejs/vite) for dev and build
- [mantine](https://github.com/mantinedev/mantine) as UI library
- [recoil](https://github.com/facebookexperimental/Recoil) as state manager

## the code

This is a simple SPA with a single screen - a chat that keeps track of the current conversation with a ChatGPT powered bot. It reaches out to the backend application for the actual resolution of prompts.

Code is organize in a "common sense" manner, and the custom vite configuration is just an easier version of what I'm used to do with webpack. But vite is better.

## the application

The bot should remember the conversation for a while (and if you do not leave/refresh the page), but ChatGPT has a limitation that really isn't that clear in the docs I've found. Regardless, it remembers a lot if you keep engaged!

`chatId` is recreated every time the main app is mounted, so if you refresh, you reset the conversation. This is by design: user persistance and/or some sort of authentication could be done, but time constraints prevented that, and a whole lot more, unfortunately.
