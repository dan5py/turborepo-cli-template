import { resolve } from "node:path";
import fs from "fs-extra";
import { type PackageJson } from "type-fest";

export function getPackageJson(): PackageJson {
  const packageJsonPath = resolve("package.json");
  return fs.readJsonSync(packageJsonPath);
}
