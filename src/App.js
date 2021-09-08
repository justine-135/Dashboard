import { useState, useEffect } from "react";
import Header from "./components/Header";
import Follower from "./components/Followers";
import Overview from "./components/Overview";

function App() {
	const [toggle, setToggle] = useState(false);
	const [totalFollow, setTotalFollow] = useState(0);
	const [mode, setMode] = useState("light-theme");
	const [fb, setFb] = useState(1970);
	const [tw, setTw] = useState(1004);
	const [ig, setIg] = useState(11000);
	const [yt, setYt] = useState(8239);

	useEffect(() => {
		let follow = fb + tw + ig + yt;
		let tFollow = follow.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		setTotalFollow(tFollow);
	}, []);

	return (
		<div className={"App " + mode}>
			<Header
				toggle={toggle}
				setToggle={setToggle}
				setMode={setMode}
				totalFollow={totalFollow}
			/>
			<Follower fb={fb} tw={tw} ig={ig} yt={yt} />
			<Overview />
		</div>
	);
}

export default App;
