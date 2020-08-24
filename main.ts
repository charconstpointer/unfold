import { Fastro } from "https://raw.fastro.dev/master/mod.ts";

import {
  handleCreateArticle,
  handleDeleteArticle,
  handleGetArticles,
} from "./handlers/articlesHandler.ts";

const server = new Fastro({ payload: true, cors: true });

server
  .post("/articles", handleCreateArticle)
  .get("/articles", handleGetArticles)
  .delete("/articles", handleDeleteArticle);

await server.listen();
