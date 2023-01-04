import fs from "fs";
import path from "path";
import matter from "gray-matter";

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

export function getAllBlogs() {
	const blogsNamesArray = fs.readdirSync(blogsDirectory);

	const allBlogData = blogsNamesArray.map((blog) => {
		return getBlogData(blog);
	});

	return allBlogData;
}

export function getFeaturedBlogs() {
	const allBlogs = getAllBlogs();

	const featuredBlogs = allBlogs.filter((blog) => blog.isFeatured);

	return featuredBlogs;
}
