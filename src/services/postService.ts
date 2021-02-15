import { eContentType } from "../enums/EContentType";
import IPost from "../interfaces/IPost";

export const fetchPosts = () => {
  let post: IPost = {
    id: "1",
    content: eContentType.image,
    url:
      "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    description: "gfhkfgh",
    tags:["Müzik","Dans","Futbol","Aşk"],
    user: {
      id: "1",
      name: "huseyin",
      surname: "akcicek",
      email: "hsyn@mail.com",
      avatar: "ghgfhfgh",
      countryISOCode: "tr-TR",
      isEmailVerified: true,
      nickname: "hsyn",
      phone: "+9005353348734",
      coords: {
        latitude: 30,
        accuracy: 10,
        altitude: 10,
        altitudeAccuracy: 10,
        heading: 10,
        longitude: 10,
        speed: 10,
      },
    },
  };
  let post1: IPost = {
    id: "2",
    content: eContentType.image,
    url:
      "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    description: "gfhkfgh",
    tags:["Müzik","Dans","Futbol","Aşk"],
    user: {
      id: "2",
      name: "huseyin",
      surname: "akcicek",
      email: "hsyn@mail.com",
      avatar: "ghgfhfgh",
      countryISOCode: "tr-TR",
      isEmailVerified: true,
      nickname: "hsyn",
      phone: "+9005353348734",
      coords: {
        latitude: 30,
        accuracy: 10,
        altitude: 10,
        altitudeAccuracy: 10,
        heading: 10,
        longitude: 10,
        speed: 10,
      },
    },
  };
  let post2: IPost = {
    id: "3",
    content: eContentType.image,
    url:
      "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    description: "gfhkfgh",
    tags:["Müzik","Dans","Futbol","Aşk"],
    user: {
      id: "3",
      name: "huseyin",
      surname: "akcicek",
      email: "hsyn@mail.com",
      avatar: "ghgfhfgh",
      countryISOCode: "tr-TR",
      isEmailVerified: true,
      nickname: "hsyn",
      phone: "+9005353348734",
      coords: {
        latitude: 30,
        accuracy: 10,
        altitude: 10,
        altitudeAccuracy: 10,
        heading: 10,
        longitude: 10,
        speed: 10,
      },
    },
  };
  let post5: IPost = {
    id: "5",
    content: eContentType.image,
    url:
      "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG",
    description: "gfhkfgh",
    tags:["Müzik","Dans","Futbol","Aşk"],
    user: {
      id: "5",
      name: "huseyin",
      surname: "akcicek",
      email: "hsyn@mail.com",
      avatar: "ghgfhfgh",
      countryISOCode: "tr-TR",
      isEmailVerified: true,
      nickname: "hsyn",
      phone: "+9005353348734",
      coords: {
        latitude: 30,
        accuracy: 10,
        altitude: 10,
        altitudeAccuracy: 10,
        heading: 10,
        longitude: 10,
        speed: 10,
      },
    },
  };
  return [post,post1,post2,post5];
};
