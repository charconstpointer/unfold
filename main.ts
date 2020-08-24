import { Fastro, Context } from "https://raw.fastro.dev/master/mod.ts";
import { Article } from "./models/article.ts";
import { cors } from "./middleware/cors.ts";

const server = new Fastro({ payload: true });
let articles = new Array<Article>();
let counter = 0;

const handleCreateArticle = (ctx: Context) => {
  const { title, desc } = ctx.payload;
  const article = new Article(title, desc, counter);
  counter++;
  articles.push(article);
  ctx.send("", 201);
};

server
  .use(cors)
  .post("/articles", handleCreateArticle)
  .get("/kittens", (ctx) => ctx.send("pet me."))
  .get("/articles", (ctx) => ctx.send(articles))
  .delete("/articles", (ctx) => {
    const id = parseInt(ctx.parameter[1]);
    const article = articles.findIndex((a) => a.getId() == id);
    articles.splice(article, 1);
    ctx.send("", 204);
  });

await server.listen();
