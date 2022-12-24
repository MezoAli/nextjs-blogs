import classes from "./main-navigation.module.css";
import Link from "next/link";
import Logo from "./logo";

function MainNavigation() {
	return (
		<>
			<header>
				<Link href="/">
					<Logo />
				</Link>
			</header>
			<nav>
				<ul>
					<li>
						<Link href="/blogs">Blogs</Link>
					</li>
					<li>
						<Link href="/contact">Contact Me</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default MainNavigation;
