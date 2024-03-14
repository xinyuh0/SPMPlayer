[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

# SPMPlayer

A music player desktop application built with Electron and React, using Spotify Web API.

## About the Project

### Search 🔍

<img src='./screenshots/search.gif'/>

### Bulid with

- [![Electron][Electron-img]][Electron-url]
- [![React][React-img]][React-url]
- [![Query][Query-img]][Query-url]
- [![Spotify][Spotify-img]][Spotify-url]

## Roadmap

- [x] Project initialization
- [x] Authentication for Spotify Web API
- [x] Search page UI and functionality
- [ ] Music playback
- [ ] Detail pages for tracks, artists, albums and playlists
- [ ] Support login via OAuth 2.0

## Project Setup

**Notice**: this repository doesn't contain API key, please prepare your own key at [Spotify Web API](https://developer.spotify.com/documentation/web-api) and copy it into `credentials.json`.

### Install

```bash
$ yarn
```

### Development

```bash
$ yarn dev
```

### Build

```bash
# For windows
$ yarn build:win

# For macOS
$ yarn build:mac

# For Linux
$ yarn build:linux
```

<!-- MARKDOWN LINKS & IMAGES -->

[Electron-img]: https://img.shields.io/badge/Electron-47848F.svg?style=for-the-badge&logo=Electron&logoColor=white
[Electron-url]: https://www.electronjs.org/
[React-img]: https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black
[React-url]: https://react.dev/
[Spotify-img]: https://img.shields.io/badge/Spotify-1DB954.svg?style=for-the-badge&logo=Spotify&logoColor=white
[Spotify-url]: https://developer.spotify.com/documentation/web-api
[Query-img]: https://img.shields.io/badge/React%20Query-FF4154.svg?style=for-the-badge&logo=React-Query&logoColor=white
[Query-url]: https://tanstack.com/query/latest/docs/framework/react/overview
