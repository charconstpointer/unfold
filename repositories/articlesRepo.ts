import { Article } from "../models/article.ts";

let articles = new Array<Article>();
class ArticlesRepo {
  private articles: Array<Article>;
  private counter: number;
  constructor() {
    this.articles = new Array<Article>();
    this.counter = 0;
  }
  saveArticle = (article: Article) => {
    article.setId(this.counter++);
    this.articles.push(article);
  };
  removeArticle = (articleId: number) => {
    const article = this.articles.findIndex((a) => a.getId() == articleId);
    this.articles.splice(article, 1);
  };
  updateArticle = (article: Article) => {
  };
  getArticle = (articleId: number): Article | undefined => {
    return this.articles.find((a) => a.getId() == articleId);
  };
  getArticles = () => {
    return this.articles;
  };
}

const articlesRepo = new ArticlesRepo();
export { articlesRepo };
