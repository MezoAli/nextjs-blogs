import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const dummyData = [
	{
		title: "getting-statrted-with-nextjs",
		slug: "getting-started-with-nextjs",
		excerpt: "getting-statrted-with-nextjs",
		date: "2022-10-23",
		image: "getting-started-with-nextjs.png",
	},
	{
		title: "getting-statrted-with-nextjs2",
		slug: "getting-started-with-nextjs2",
		excerpt: "getting-statrted-with-nextjs",
		date: "2022-10-23",
		image: "getting-started-with-nextjs.png",
	},
	{
		title: "getting-statrted-with-nextjs3",
		slug: "getting-started-with-nextjs3",
		excerpt: "getting-statrted-with-nextjs",
		date: "2022-10-23",
		image: "getting-started-with-nextjs.png",
	},
];

function HomePage() {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={dummyData} />
		</>
	);
}

export default HomePage;
