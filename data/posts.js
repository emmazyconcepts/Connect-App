import { USERS } from "./users";

export const POSTS = [
  {
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    user: USERS[0].users,
    likes: 1442,
    caption: "i got a car today 🙃",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "paul",
        text: "wowwow ",
      },
      {
        user: "kola jiji",
        text: "This is a very nice ",
      },
      {
        user: "emmanuel",
        text: "hurrrrrrrray",
      },
    ],
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/38.jpg",
    user: USERS[1].users,
    likes: 1002,
    caption: "This is a very nice cat🙃",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "emmanuel",
        text: "This is a very nice cat🙃",
      },
      {
        user: "emmanuel",
        text: "This is a very nice cat🙃",
      },
      {
        user: "emmanuel",
        text: "This is a very nice cat🙃",
      },
    ],
  },
  {
    imageUrl: "https://randomuser.me/api/portraits/men/35.jpg",
    user: USERS[2].users,
    likes: 3542,
    caption: "This is a very nice cat🙃",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "emmanuel",
        text: "This is a very nice cat🙃",
      },
      {
        user: "emmanuel",
        text: "This is a very nice cat🙃",
      },
      {
        user: "emmanuel",
        text: "This is a very nice cat🙃",
      },
    ],
  },
];
