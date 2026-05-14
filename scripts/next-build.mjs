import { spawnSync } from "node:child_process";

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
