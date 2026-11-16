// ai-excited-01 entry: writes the entry image to the output directory.
// The image lives beside this program as entry.png; the program copies it
// unchanged, so every run writes exactly the same bytes.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, 'entry.png'), join(outputDir, 'entry.png'));
