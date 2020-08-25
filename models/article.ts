import { Comment } from "./comment.ts";

export class Article {
  private id: number;
  private title: string;
  private description: string;
  private comments: Array<Comment>;

  constructor(title: string, description: string, id: number) {
    this.id = id;
    this.title = title ?? "";
    this.description = description ?? "";
    this.comments = new Array<Comment>();
  }

  public getId = (): number => this.id;
  public setId = (id: number) => this.id = id;
  public addComment = (comment: Comment) => {
    this.comments.push(comment);
  };
}
