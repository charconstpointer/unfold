import { Context } from "https://raw.fastro.dev/master/mod.ts";
import { Article } from "../models/article.ts";
import { articlesRepo } from "../repositories/articlesRepo.ts";

export const handleCreateArticle = (ctx: Context) => {
  const { title, desc } = ctx.payload;
  const article = new Article(title, desc, -1);
  articlesRepo.saveArticle(article);
  ctx.send("", 201);
};

export const handleDeleteArticle = (ctx: Context) => {
  const id = parseInt(ctx.parameter[1]);
  articlesRepo.removeArticle(id);
  ctx.send("", 204);
};

export const handleUpdateArticle = (ctx: Context) => {
};

export const handleGetArticles = (ctx: Context) => {
  const paramCount = ctx.parameter.length;
  if (paramCount > 1) {
    const id = parseInt(ctx.parameter[1]);
    const article = articlesRepo.getArticle(id);
    ctx.send(article, 200);
  }
  const articles = articlesRepo.getArticles();
  ctx.send(articles, 200);
};
