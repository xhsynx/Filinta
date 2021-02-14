import { eContentType } from "../enums/EContentType";
import IPost from "../interfaces/IPost";

export const fetchPosts = () => {
  let post: IPost = {
    id: "1",
    content: eContentType.video,
    url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
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
    url: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
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
