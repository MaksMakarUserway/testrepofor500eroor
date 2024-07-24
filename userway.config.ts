import type { Config } from '@userway/cicd-cli' 
    export default { 
      organization: "maksym-makar-31-userway-org-bpboh",
      project: "test-website-5-real-estate-gitlab-testing1",
      reportPaths: ["./uw-a11y-reports"],
      token: process.env.USERWAY_TOKEN,
      server: "https://api.qa.userway.dev"
    } satisfies Config;
    //test