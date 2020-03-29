export interface CommentsStore {
  comment: MyComment[];
  isLoading: boolean;
  newComment: MyComment;
  test: any;
  //   isValid: boolean;
}
export interface MyComment {
  text: String;
  firstName: String;
  lastName: String;
  owner?: String;
  _id?: String;
}
export interface a {
  id: string;
}
