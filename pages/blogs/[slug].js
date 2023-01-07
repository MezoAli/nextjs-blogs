import PostContent from "../../components/posts/posts-detail/post-content";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

function BlogDetailsPage(props) {
	return <PostContent blog={props.blogData} />;
}

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;

	const fileName = `${slug}.md`;
	const filePath = path.join(process.cwd(), "blogs", fileName);
	const fileData = fs.readFileSync(filePath, "utf-8");
	const { data, content } = matter(fileData);
	const blogData = {
		slug,
		...data,
		content,
	};

	return {
		props: {
			blogData,
		},
	};
}

export function getStaticPaths() {
	return {
		paths: [],
		fallback: "blocking",
	};
}

export default BlogDetailsPage;
