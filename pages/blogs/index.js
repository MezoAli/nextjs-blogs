import AllPosts from "../../components/posts/all-posts";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

function BlogPage(props) {
	return (
		<>
			<Head>
				<title>Moutaz Next Blog</title>
				<meta
					name="descreption"
					content="i blog about front end web development especially frame works like react js and next js "
				/>
			</Head>
			<AllPosts posts={props.blogs} />;
		</>
	);
}

export function getStaticProps() {
	const blogsDirectory = path.join(process.cwd(), "blogs");
	function getBlogData(fileName) {
		const filePath = path.join(blogsDirectory, fileName);
		const fileData = fs.readFileSync(filePath, "utf-8");
		const { data, content } = matter(fileData);

		const blogSlug = fileName.replace(/\.md$/, "");

		const blogData = {
			slug: blogSlug,
			...data,
			content,
		};

		return blogData;
	}
	const blogsNamesArray = fs.readdirSync(blogsDirectory);

	const allBlogData = blogsNamesArray.map((blog) => {
		return getBlogData(blog);
	});

	return {
		props: {
			blogs: allBlogData,
		},
	};
}

export default BlogPage;
