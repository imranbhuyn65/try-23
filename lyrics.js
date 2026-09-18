/*
  lyrics.js
  ---------
  This is a PLACEHOLDER lyric sheet, timed in seconds.
  Replace every "text" value below with the real lyrics of
  "Die With A Smile" — copied from a copy of the song/booklet
  you own or a licensed lyrics source — and adjust each "time"
  to match exactly when that line starts in your own audio file.

  Format:
    { time: 12.5, text: "line of lyric" }
    { time: 0,    text: "(Intro)", tag: true }   <- tag: true = shown in italic, e.g. section labels

  How to find timestamps:
  - Play assets/song.mp3 in this page (or any player) and note the
    second each line begins, OR
  - Search for an .lrc (synced lyrics) file for this track online,
    which already lists [mm:ss.xx] timestamps you can convert to seconds
    (seconds = minutes*60 + seconds).

  Keep the lines short (one lyric line per entry) so the highlight
  reads clearly against the album art panel.
*/

window.LYRICS = [
  { time: 0,   text: "(Intro)", tag: true },
  { time: 8,   text: "— replace this line with lyric 1 —" },
  { time: 14,  text: "— replace this line with lyric 2 —" },
  { time: 20,  text: "— replace this line with lyric 3 —" },
  { time: 26,  text: "— replace this line with lyric 4 —" },
  { time: 33,  text: "(Chorus)", tag: true },
  { time: 36,  text: "— replace this line with lyric 5 —" },
  { time: 42,  text: "— replace this line with lyric 6 —" },
  { time: 48,  text: "— replace this line with lyric 7 —" },
  { time: 54,  text: "— replace this line with lyric 8 —" },
  { time: 62,  text: "(Verse 2)", tag: true },
  { time: 65,  text: "— replace this line with lyric 9 —" },
  { time: 71,  text: "— replace this line with lyric 10 —" }
];
