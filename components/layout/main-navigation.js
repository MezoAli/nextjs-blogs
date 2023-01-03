import classes from "./main-navigation.module.css";
import Link from "next/link";
import Logo from "./logo";

function MainNavigation() {
	return (
		<>
			<header className={classes.header}>
				<Link href="/">
					<Logo />
				</Link>
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
			</header>
		</>
	);
}

export default MainNavigation;
