import Server from "lume/core/server.ts";

const server = new Server({
  port: 8000,
  root: `${Deno.cwd()}/_site`,
});

const middleware = basicAuth({
  users: {
    "lume": "iscool",
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
