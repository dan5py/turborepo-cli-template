import { example } from "@/src/commands/example";
import { getPackageJson } from "@/src/utils/get-package";
import { Command } from "commander";

function main() {
  const packageJson = getPackageJson();

  const program = new Command()
    .name("cli")
    .description("A simple CLI template")
    .version(packageJson.version || "0.0.0");

  program.addCommand(example);

  program.parse();
}

main();
