import { NeoObject } from '../types';
import { NEO_PART_1 } from './neoDataParts/part1';
import { NEO_PART_2 } from './neoDataParts/part2';
import { NEO_PART_3 } from './neoDataParts/part3';
import { NEO_PART_4 } from './neoDataParts/part4';
import { NEO_PART_5 } from './neoDataParts/part5';
import { NEO_PART_6 } from './neoDataParts/part6';
import { NEO_PART_7 } from './neoDataParts/part7';
import { NEO_PART_8 } from './neoDataParts/part8';
import { NEO_PART_9 } from './neoDataParts/part9';
import { NEO_PART_10 } from './neoDataParts/part10';
import { NEO_PART_11 } from './neoDataParts/part11';
import { NEO_PART_12 } from './neoDataParts/part12';
import { NEO_PART_13 } from './neoDataParts/part13';

// Real tracked Near Earth Objects: catalog fetched from NASA's NeoWs browse
// endpoint (names, diameters, velocities, miss distances, hazard flags), with
// Torino scale, Palermo scale, and impact probability joined from NASA JPL's
// Sentry risk table for the objects listed there. Objects not on the Sentry
// table have no identified impact risk (Torino 0, impact probability 0) and a
// null Palermo scale. Regenerate with fetch_neos.cjs at the repo root.
export const NEO_DATABASE: NeoObject[] = [...NEO_PART_1, ...NEO_PART_2, ...NEO_PART_3, ...NEO_PART_4, ...NEO_PART_5, ...NEO_PART_6, ...NEO_PART_7, ...NEO_PART_8, ...NEO_PART_9, ...NEO_PART_10, ...NEO_PART_11, ...NEO_PART_12, ...NEO_PART_13];
