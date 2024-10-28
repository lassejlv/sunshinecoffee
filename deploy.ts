import { $ } from "bun"
import { name } from "./package.json";
import ora from "ora";
import fs from "fs";


const main = async () => {
  const spinner = ora("Deploying to netlify...").start();

  deleteIfExists()

  await $`bunx netlify-cli build && bunx netlify-cli deploy --prod`.quiet()
    .then(() => {
      spinner.succeed(`Deployed to netlify!\n\nhttps://${name}.netlify.app`);
    })
    .catch((err) => {
      spinner.fail("Failed to deploy to netlify!");
      console.error(err);
    })

  deleteIfExists()
}

main()

async function deleteIfExists() {
  if (fs.existsSync("dist")) {
    await $`rm -rf dist`
  }
}
