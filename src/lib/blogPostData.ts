interface BlogPostsData {
    title: string,
    description: string,
    img: string,
    date: string,
    pinned?: boolean
}

export const blogPostsData: BlogPostsData[] = [
  {
    title: "Blog Post 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis ante id est finibus pharetra.",
    img: "/4.jpg",
    date: "20.09.2024",
    pinned: true,
  },
  {
    title: "Blog Post 2",
    description:
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    img: "/5.jpg",
    date: "20.09.2024",
  },
  {
    title: "Blog Post 3",
    description:
      "Integer nec neque vel justo fermentum bibendum ac non augue. Ut blandit orci quis nulla scelerisque sollicitudin.",
    img: "/6.jpg",
    date: "20.09.2024",
  },
  {
    title: "Blog Post 4",
    description:
      "Integer nec neque vel justo fermentum bibendum ac non augue. Ut blandit orci quis nulla scelerisque sollicitudin.",
    img: "/2.jpg",
    date: "20.09.2024",
  },
  {
    title: "Blog Post 4",
    description:
      "Integer 🍿🍿 nec neque vel justo fermentum bibendum ac non augue. Ut blandit orci quis nulla scelerisque sollicitudin. nec neque vel justo fermentum bibendum ac non augue. nec neque vel justo fermentum bibendum ac non augue. nec neque vel justo fermentum bibendum ac non augue.",
    img: "/2.jpg",
    date: "20.09.2024",
    pinned: false
  }
];
