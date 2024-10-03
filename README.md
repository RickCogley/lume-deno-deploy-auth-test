[![Deploy to Deno Deploy](https://github.com/rickcogley/lume-deno-deploy-auth-test/actions/workflows/deploy.yml/badge.svg)](https://github.com/rickcogley/lume-deno-deploy-auth-test/actions/workflows/deploy.yml)


# Lume Deno Deploy HTTP Basic-Auth Test

This test site uses the "basicAuth" module from the Lume middleware `basic_auth.ts`. Basic auth isn't super secure, but it's good enough for applications where light security is enough security. 

It's deployed here: https://rickcogley-lume-deno-auth.deno.dev/

It assumes a few things: 

* You're deploying to Deno Deploy, with an entry point of `serve.ts` and using a GitHub action, following the basic documentation for this style of deployment in the Lume docs. 
* The `serve.ts` is referencing the middleware, checking a specific path you want to protect, and is pulling the user's password from an environment var in the connected Deno Deploy project. When you set this in the json object that holds the username:password pairs in `serve.ts`, you'll notice you need to reference the var within backticks. 
* If users access the root `/`, there is no auth prompt, but if they access `/protected/` or `/protected/subfolder/`, directly in say, a "private" browser tab for testing, you'll see the typical HTTP basic_auth browser login prompt.  
* If you use this code as a starting point, you'll need to update the variable or variables in your Deno Deploy project, referencing them as needed, and update the Deno Deploy project name in the GitHub workflow `deploy.yml` file.
