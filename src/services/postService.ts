import { eContentType } from "../enums/EContentType";
import IPost from "../interfaces/IPost";

export const fetchPosts = () => {
  let post: IPost = {
    id: "1",
    content: eContentType.video,
    url: "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    description: "gfhkfgh",
    user: {
      id: "1",
      name: "huseyin",
      surname: "akcicek",
      email: "hsyn@mail.com",
      avatar: "ghgfhfgh",
    },
    channel: { id: "1", name: "channel1" },
  };
  let post1: IPost = {
    id: "2",
    content: eContentType.video,
    url: "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    description: "gfhkfgh",
    user: {
      id: "1",
      name: "huseyin",
      surname: "akcicek",
      email: "hsyn@mail.com",
      avatar: "fdgdfgfd",
    },
    channel: { id: "1", name: "channel1" },
  };

  return [post, post1];
};
