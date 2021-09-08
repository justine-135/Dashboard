const Header = ({ toggle, setToggle, setMode, totalFollow }) => {
	const toggleHandler = (e) => {
		setToggle(!toggle);

		e.target.childNodes[0].classList.toggle("toggle-night");
		e.target.classList.toggle("btn-night");

		if (toggle === false) {
			setMode("dark-theme");
		} else {
			setMode("light-theme");
		}
	};
	return (
		<div className="db-container">
			<div className="header-bg"></div>

			<header className="db-container__heading">
				<h1>Social Media Dashboard</h1>
				<span>Total Followers: {totalFollow}</span>
			</header>
			<div className="db-container__switch">
				<span>Dark mode</span>
				<button className="btn-light" onClick={(e) => toggleHandler(e)}>
					<div className="toggle"></div>
				</button>
			</div>
		</div>
	);
};

export default Header;
