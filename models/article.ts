export class Article {
  private id: number;
  private title: string;
  private description: string;

  constructor(title: string, description: string, id: number) {
    this.id = id;
    this.title = title ?? "";
    this.description = description ?? "";
  }

  public getId = (): number => this.id;
}
