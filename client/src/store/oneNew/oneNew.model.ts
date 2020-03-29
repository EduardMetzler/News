export interface OneNewsStore {
  //   article: OneArticle[];
  article: OneArticle;
  //   loading: boolean;
}

export interface OneArticle {
  title: string;
  text: string;
  _id?: string;
  // description: string;
  // url: string;
  // urlToImage: string;
  // publishedAt: string;
  // content: string;
}
