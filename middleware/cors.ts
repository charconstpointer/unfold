import { Context } from "https://raw.fastro.dev/master/mod.ts";

export const cors = async function (ctx: Context, done: Function) {
  ctx.headers.append("Access-Control-Allow-Origin", "*");
  ctx.headers.append(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT",
  );
  ctx.headers.append(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization",
  );
};
