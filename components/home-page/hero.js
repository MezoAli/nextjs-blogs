import classes from "./hero.module.css";
import Image from "next/image";
import MoutazImage from "../../public/image.jpeg";

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src={MoutazImage} alt="moutaz" width={300} height={300} />
			</div>
			<h1>Hi, Iam Moutaz Ali</h1>
			<p>
				I blog about web development - especially frontend frameworks like React
				or Next js
			</p>
		</section>
	);
}

export default Hero;
