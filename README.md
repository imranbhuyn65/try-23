# Our Waltz — lyric player

Vintage-style music player: tomader chobi album art hisebe, gaan play hobe, and lyrics ekta panel-e synchronized hoye highlight hobe (jemon mockup screenshot-a dekhano hoyeche).

## ⚠️ Ekta jinish nijer theke jog korte hobe

Ami copyright-er karone duita jinish include korte parini:

1. **Gaan-er audio file** — "Die With A Smile" ekta commercially released, copyrighted gaan, tai ami eta directly dite pari na. Tomake nijer kena/legally-owned copy ta MP3 hisebe `assets/song.mp3` e rakhte hobe.
2. **Real lyrics** — same reason, ami actual lyrics likhe dite pari na. `lyrics.js` file-e placeholder line gulo ache — segulo replace kore asol lyrics + timestamp bosiye dite hobe. File-er upore comment-a format ta bola ache.

Baki shob (player UI, design, sync-highlight engine, scroll, click-to-seek) already toiri, just ei duita fill up korle full kaj kore jabe.

## File structure

```
your-repo/
├── index.html        ← main page (player + lyrics UI)
├── lyrics.js          ← timed lyric lines (EDIT THIS with real lyrics + timestamps)
└── assets/
    ├── cover.jpg      ← tomader chobi, already added
    └── song.mp3       ← ADD THIS: tomar nijer gaan-er MP3 file
```

Naam gulo exactly eirokom rakhte hobe (`assets/song.mp3`, `assets/cover.jpg`) — na hole player kaj korbe na, karon `index.html` etai reference kore.

## Lyrics timing kivabe korবे

`lyrics.js` open koro. Protyekta line-er jonno ekta second (`time`) ar text lagbe:

```js
{ time: 36, text: "your real lyric line here" }
```

- `time` = koto second-e oi line ta gaan-e shuru hoy.
- Jodi kothao online-e ei gaan-er `.lrc` (synced lyrics) file pao, tar `[mm:ss.xx]` format take second-e convert kore bosao (minute × 60 + second).
- Na hole nijeই gaan play kore, stopwatch-er moto shune shune time note kore likhte paro.

## GitHub-e push kore live link banano

1. GitHub-e ekta notun repository banao (public), e.g. `our-waltz`.
2. Ei 3-ta jinish (`index.html`, `lyrics.js`, `assets/` folder shoho) repo-r root-e push koro:

   ```bash
   git init
   git add .
   git commit -m "add lyric player"
   git branch -M main
   git remote add origin https://github.com/<tomar-username>/our-waltz.git
   git push -u origin main
   ```

3. GitHub repo-r **Settings → Pages** e jao.
4. "Source" e **Deploy from a branch** select koro, branch = `main`, folder = `/ (root)`, tarpor **Save**.
5. Ekটু pore (1–2 minute) upore ekta link dekhabe:

   ```
   https://<tomar-username>.github.io/our-waltz/
   ```

   Etai tomader live link — eta share korte parbe.

## Note

`song.mp3` size jodi boro hoy (>25MB er kache), GitHub-e push korte problem hote pare — shekhetre file compress kore choto bitrate-e (e.g. 128kbps) export kore niyo.
