import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";

function PostContent({ blog }) {
	const imagePath = `/images/posts/${blog.slug}/${blog.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={blog.title} image={imagePath} />
			<ReactMarkdown>{blog.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
