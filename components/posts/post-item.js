import classes from "./post-item.module.css";
import Link from "next/link";
import Image from "next/image";
function PostItem(props) {
	const { image, title, date, excerpt, slug } = props.post;

	const readableDate = new Date(date).toLocaleDateString("en-US", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});

	const imagePath = `/images/posts/${slug}/${image}`;
	return (
		<li className={classes.post}>
			<Link href="/">
				<div className={classes.image}>
					<Image
						src={imagePath}
						alt={title}
						width={300}
						height={300}
						layout="responsive"
					/>
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<time>{readableDate}</time>
					<p>{excerpt}</p>
				</div>
			</Link>
		</li>
	);
}

export default PostItem;
