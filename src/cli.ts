#!/usr/bin/env node --experimental-import-meta-resolve
import { Command } from "commander";
import generate from "./generate.js";
import Paths from "./Paths.js";
import path from "path";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", (err) => {
  throw err;
});

const program = new Command();

program.option("--entry <string>");

program.parse();

const options = program.opts();

let entry = options.entry;

const paths = new Paths();

if (entry && !path.isAbsolute(entry)) {
  entry = paths.resolveApp(entry);
}

generate({ entry });
