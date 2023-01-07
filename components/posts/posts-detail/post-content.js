import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

function PostContent({ blog }) {
	const imagePath = `/images/posts/${blog.slug}/${blog.image}`;
	const customRenders = {
		img(image) {
			return (
				<Image
					src={`/images/posts/${blog.slug}/${image.properties.src}`}
					alt={image.properties.alt}
					width={600}
					height={300}
				/>
			);
		},
	};
	return (
		<article className={classes.content}>
			<PostHeader title={blog.title} image={imagePath} />
			<ReactMarkdown>{blog.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
