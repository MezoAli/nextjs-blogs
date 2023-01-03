import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
const dummydata = {
	title: "getting-statrted-with-nextjs",
	slug: "getting-started-with-nextjs",
	date: "2022-10-23",
	image: "getting-started-with-nextjs.png",
	content: "# test content",
};

const imagePath = `/images/posts/${dummydata.slug}/${dummydata.image}`;

function PostContent() {
	return (
		<article className={classes.content}>
			<PostHeader title={dummydata.title} image={imagePath} />
			<ReactMarkdown>{dummydata.content}</ReactMarkdown>
		</article>
	);
}

export default PostContent;
