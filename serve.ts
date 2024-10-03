import Server from "lume/core/server.ts";
import { basicAuth } from "https://deno.land/x/lume@v2.3.2/middlewares/basic_auth.ts";

const myEnvVar = Deno.env.get("USER_1_PASS");
console.log(`The value of USER_1_PASS is: ${myEnvVar}`);

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

const middleware = basicAuth({
  users: {
    "lume": ${myEnvVar},
  },
});

server.use((req, next) => {
  if (isProtected(req)) {
    return middleware(req, next);
  }
  return next(req);
});

function isProtected(req) {
  const url = new URL(req.url);
  return url.pathname.startsWith("/protected/");
}

server.start();

console.log("Listening on http://localhost:8000");
