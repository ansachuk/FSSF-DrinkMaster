import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header style={{ marginBottom: 40 }}>
			<p style={{ marginBottom: 40 }}>Header</p>
			<div>
				Тимчасовий дів - створений для переходу між сторінками
				<br />
				<Link to="/">Main</Link>
				<br />
				<Link to="/welcome">welcome</Link>
				<br />
				<Link to="/drinks/1">Category 1</Link>
				<br />
				<Link to="/add">Add</Link>
				<br />
				<Link to="/favorite">Favorite</Link>
				<br />
				<Link to="/recipe/1">Recipe 1</Link>
				<br />
				<Link to="/error">Not found</Link>
			</div>
		</header>
	);
}
