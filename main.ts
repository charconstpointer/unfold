import { Fastro } from "https://raw.fastro.dev/master/mod.ts";
import { Article } from "./models/article.ts";

const server = new Fastro({ payload: true });
let articles = new Array<Article>();
let counter = 0;

server
  .post("/articles", (ctx) => {
    const { title, desc } = ctx.payload;
    const article = new Article(title, desc, counter);
    counter++;
    articles.push(article);
    ctx.send("", 201);
  })
  .get("/articles", (ctx) => ctx.send(articles))
  .delete("/articles", (ctx) => {
    const id = parseInt(ctx.parameter[1]);
    const article = articles.findIndex((a) => a.getId() == id);
    articles.splice(article, 1);
    ctx.send("", 204);
  });

await server.listen();
