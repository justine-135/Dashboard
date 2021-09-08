import { ReactComponent as FbIcon } from "../images/icon-facebook.svg";
import { ReactComponent as IgIcon } from "../images/icon-instagram.svg";
import { ReactComponent as TwIcon } from "../images/icon-twitter.svg";
import { ReactComponent as YtIcon } from "../images/icon-youtube.svg";
import { ReactComponent as UpIcon } from "../images/icon-up.svg";
import { ReactComponent as DownIcon } from "../images/icon-down.svg";

const Overview = () => {
	return (
		<div className="overview-bg">
			<h6 className="overview-bg__headline">Overview - Today</h6>
			<div className="overview-bg__grid">
				<div className="overview-bg__grid__card">
					<div className="overview-bg__grid__card__social">
						<span>Page Views</span>
						<FbIcon />
					</div>
					<div className="overview-bg__grid__card__result">
						<h6>86</h6>
						<div className="vote">
							<UpIcon />
							<span>3%</span>
						</div>
					</div>
				</div>
				<div className="overview-bg__grid__card">
					<div className="overview-bg__grid__card__social">
						<span>Likes</span>
						<FbIcon />
					</div>
					<div className="overview-bg__grid__card__result">
						<h6>52</h6>
						<div className="vote">
							<DownIcon />
							<span style={{ color: "hsl(356, 69%, 56%)" }}>2%</span>
						</div>
					</div>
				</div>
				<div className="overview-bg__grid__card">
					<div className="overview-bg__grid__card__social">
						<span>Likes</span>
						<IgIcon />
					</div>
					<div className="overview-bg__grid__card__result">
						<h6>5462</h6>
						<div className="vote">
							<UpIcon />
							<span>2257%</span>
						</div>
					</div>
				</div>
				<div className="overview-bg__grid__card">
					<div className="overview-bg__grid__card__social">
						<span>Profile Views</span>
						<IgIcon />
					</div>
					<div className="overview-bg__grid__card__result">
						<h6>52k</h6>
						<div className="vote">
							<UpIcon />
							<span>1375%</span>
						</div>
					</div>
				</div>
				<div className="overview-bg__grid__card">
					<div className="overview-bg__grid__card__social">
						<span>Retweets</span>
						<TwIcon />
					</div>
					<div className="overview-bg__grid__card__result">
						<h6>117</h6>
						<div className="vote">
							<UpIcon />
							<span>303%</span>
						</div>
					</div>
				</div>
				<div className="overview-bg__grid__card">
					<div className="overview-bg__grid__card__social">
						<span>Likes</span>
						<TwIcon />
					</div>
					<div className="overview-bg__grid__card__result">
						<h6>507</h6>
						<div className="vote">
							<UpIcon />
							<span>553%</span>
						</div>
					</div>
				</div>
				<div className="overview-bg__grid__card">
					<div className="overview-bg__grid__card__social">
						<span>Likes</span>
						<YtIcon />
					</div>
					<div className="overview-bg__grid__card__result">
						<h6>107</h6>
						<div className="vote">
							<DownIcon />
							<span style={{ color: "hsl(356, 69%, 56%)" }}>19%</span>
						</div>
					</div>
				</div>
				<div className="overview-bg__grid__card">
					<div className="overview-bg__grid__card__social">
						<span>Total Views</span>
						<YtIcon />
					</div>
					<div className="overview-bg__grid__card__result">
						<h6>1407</h6>
						<div className="vote">
							<DownIcon />
							<span style={{ color: "hsl(356, 69%, 56%)" }}>12%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Overview;
