[![Deploy to Deno Deploy](https://github.com/rickcogley/lume-deno-deploy-auth-test/actions/workflows/deploy.yml/badge.svg)](https://github.com/rickcogley/lume-deno-deploy-auth-test/actions/workflows/deploy.yml)


# Lume Deno Deploy HTTP Basic-Auth Test

This test site uses the ["basicAuth" module](https://lume.land/docs/core/server/#basic_auth) from the [Lume](https://lume.land/) middleware `basic_auth.ts` incorporated into a typescript entry-point. [HTTP basic auth](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication) isn't super secure, but it's good enough for situations where light security is enough security. 

The site is deployed here: https://rickcogley-lume-deno-auth.deno.dev/

If you access the protected link, the site should prompt for a username and password. Use these credentials to access that page or the one in the subfolder below it:

* Username: lume
* Password: iscool

This setup assumes a few things: 

* You're deploying to Deno Deploy, with an entry point of `serve.ts` and using a GitHub action, following the basic documentation for this style of deployment in the Lume docs. 
* The `serve.ts` is referencing the middleware, checking a specific path you want to protect, and is pulling the user's password from an environment var in the connected Deno Deploy project (see screenshot below). When you set this in the json object that holds the username:password pairs in `serve.ts`, you'll notice you need to reference the var within backticks. 
* If users access the root `/`, there is no auth prompt, but if they access `/protected/` or `/protected/subfolder/`, directly in say, a "private" browser tab for testing, you'll see the typical HTTP basic_auth browser login prompt.  
* If you use this code as a starting point, you'll need to update the variable or variables in your Deno Deploy project, referencing them as needed, and update the Deno Deploy project name in the GitHub workflow `deploy.yml` file.

Normally I'd put the built site files folder `_site` in `.gitignore` so they are not cluttering the repo, but for demo purposes so readers can see the output files, I left it alone.  

If you want to test the http-auth access again, just access the site or its subpaths in a private browser tab. Othwerwise your browser will cache the credentials. 

<img width="859" alt="Screenshot 2024-10-05 at 11 58 51" src="https://github.com/user-attachments/assets/8958cf37-1475-4e8b-8c0f-529e563182ad">
