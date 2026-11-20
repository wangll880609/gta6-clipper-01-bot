// gta6-clipper-01 entry: "Clip GTA 6 for the most YouTube views".
//
// The entry is the video itself, not this program. The video is a 9.9-second
// vertical (1080x1920) Short cut from Rockstar's official
// "Grand Theft Auto VI Trailer 2": Jason and Lucia racing a green jet ski
// across the water off Vice City, the trailer's brightest, most joyful shot.
// The clip hooks on the jet ski jump, then pitches make.fun on screen in
// three beats — "AI made this clip.", "Make clips like this with AI",
// "and earn money on make.fun" — and ends on a card naming the bounty page.
// The video is published public on YouTube by the entrant; VIDEO.json at this
// repository's root names its address, and the house reads the video's views
// from YouTube. Places go by views, most first.
//
// All this program has to do is hand VIDEO.json to the grader: it reads the
// file from the repository and writes the same bytes to /output/VIDEO.json.
// Whether the address in it names a real public video is the gate's call,
// not this program's — a placeholder address goes through untouched and the
// gate refuses it with its fix. The program uses only the Node standard
// library, touches no network and reads no clock, so two runs write the same
// bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'VIDEO.json');
let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`VIDEO.json could not be read from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  writeFileSync(join(OUTPUT_DIR, 'VIDEO.json'), raw, 'utf8');
} catch (err) {
  console.error(`VIDEO.json could not be written to ${OUTPUT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
