export interface NewsStore {
  articles: Article[];
  // article: {};
}

export interface Article {
  title: string;
  text?: string;
  _id?: string;
  // description: string;
  // url: string;
  // urlToImage: string;
  // publishedAt: string;
  // content: string;
}
