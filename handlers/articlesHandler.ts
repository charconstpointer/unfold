import { Context } from "https://raw.fastro.dev/master/mod.ts";
import { Article } from "../models/article.ts";
import { articlesRepo } from "../repositories/articlesRepo.ts";
import { Comment } from "../models/comment.ts";

export const handleCreateArticle = (ctx: Context) => {
  const [a, id, c] = ctx.parameter;
  if (ctx.parameter.length === 3 && c === "comments" && id !== undefined) {
    handleCreateComment(ctx, parseInt(id));
    return;
  }
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

const handleCreateComment = (ctx: Context, articleId: number) => {
  const article = articlesRepo.getArticle(articleId);
  if (article === undefined) {
    ctx.send("", 404);
    return;
  }
  const { body, author } = ctx.payload;
  const comment = new Comment(author, body);
  article.addComment(comment);
  ctx.send("", 201);
};
