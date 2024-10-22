import BlogPost from "@/components/blogPost/BlogPost";
import { blogPostsData } from "@/lib/blogPostData";
import styles from "@/app/Blog/Blog.module.css";

export default function Blog() {
  const blogPosts = [
    ...blogPostsData.filter((blog) => blog.pinned),
    ...blogPostsData.filter((blog) => !blog.pinned),
  ].map((blog, index) => (
    <BlogPost
      key={index}
      title={blog.title}
      description={blog.description}
      img={blog.img}
      date={blog.date}
      pinned={blog.pinned? true : false }
    />
  ));

  return (
    <div className={styles.blog}>
      {...blogPosts}
    </div>
  );
}