import type { Config } from "@userway/cicd-cli";
export default {
  organization: "maksym-makar-27-userway-org-lsiec",
  project: "test-website-5-real-estate-gitlab",
  reportPaths: ["./uw-a11y-reports"],
  token: process.env.USERWAY_TOKEN,
} satisfies Config;

