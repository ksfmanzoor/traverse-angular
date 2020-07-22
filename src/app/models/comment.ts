export interface Comment {
  id: string;
  body: string;
  user: CommentUser;
  blog_replies: BlogReply[];
}

export interface CommentUser {
  id: string;
  name: string;
  profile_image: null;
}

export interface BlogReply {
  id: string;
  body: string;
  user: CommentUser;
}


