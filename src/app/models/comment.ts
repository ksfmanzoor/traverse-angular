export interface Comment {
  id: string;
  body: string;
  user: CommentUser;
  blog_replies: any[];
}

export interface CommentUser {
  id: string;
  name: string;
  profile_image: null;
}
