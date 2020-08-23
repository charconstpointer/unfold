import { Fastro } from "https://raw.fastro.dev/master/mod.ts";
const server = new Fastro();
server.get("/", (ctx) => ctx.send("root"));
await server.listen();
