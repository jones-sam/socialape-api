//this is just a reference file

// Note for the db: KEEP DOCUMENTS SMALL
let db = {
  users: {
    userId: "234iuh23uhoiu32h3",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-05-09T15:57:07.429Z",
    imageUrl: "image/fawefsdefsaf/aesfdsfsa",
    bio: "Hi this is a bio",
    website: "https://user.com",
    location: "London, Uk",
  },
  screams: [
    {
      userHandle: "user",
      body: "this is the scream body",
      createdAt: "2020-05-09T15:57:07.429Z",
      // Since firebase charges per read and write, it is good practice and cheaper to store the tally of likes and comments instead of reading the count everytime,
      // which would be expensive
      likeCount: 5,
      commentCount: 2,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "aw498h3hfasedffw",
      body: "Nice one mate!",
      createdAt: "2020-05-09T15:57:07.429Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "34298ghfeiuhsfd",
      type: "like | comment",
      createdAt: "2020-05-09T15:57:07.429Z",
    },
  ],
}

const userDetails = {
  // Redux data
  credentials: {
    userId: "234iuh23uhoiu32h3",
    email: "user@email.com",
    handle: "user",
    createdAt: "2020-05-09T15:57:07.429Z",
    imageUrl: "image/fawefsdefsaf/aesfdsfsa",
    bio: "Hi this is a bio",
    website: "https://user.com",
    location: "London, Uk",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "aresgfawga3wg2",
    },
    {
      userHandle: "user",
      screamId: "qwfsdagehsgvcfd",
    },
  ],
}
