import { rmSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const buildOutputDir = path.resolve(".next");

// Remove stale production output before building so repeated verification runs
// do not trip over leftover export files on Windows.
rmSync(buildOutputDir, {
  force: true,
  maxRetries: 5,
  recursive: true,
  retryDelay: 200,
});

const result = spawnSync(process.execPath, ["./node_modules/next/dist/bin/next", "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "production",
  },
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 1);
