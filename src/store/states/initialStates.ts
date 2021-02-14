import { eContentType } from "../../enums/EContentType";
import IPost from "../../interfaces/IPost";
import { fetchPosts } from "../../services/postService";

export const initialPosts: IPost[] = fetchPosts();

