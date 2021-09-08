import { ReactComponent as FbIcon } from "../images/icon-facebook.svg";
import { ReactComponent as IgIcon } from "../images/icon-instagram.svg";
import { ReactComponent as TwIcon } from "../images/icon-twitter.svg";
import { ReactComponent as YtIcon } from "../images/icon-youtube.svg";
import { ReactComponent as UpIcon } from "../images/icon-up.svg";
import { ReactComponent as DownIcon } from "../images/icon-down.svg";

const Follower = ({ fb, tw, ig, yt }) => {
	return (
		<div className="follower-grid">
			<div className="follower-grid__card">
				<div className="follower-grid__card__social-card">
					<FbIcon />
					<span>@Justine Upano</span>
				</div>
				<h3>{fb}</h3>
				<span className="follower">followers</span>
				<div className="f-count">
					<UpIcon />
					<span>12 Today</span>
				</div>
			</div>
			<div className="follower-grid__card">
				<div className="follower-grid__card__social-card">
					<TwIcon />
					<span>@j u s t i n e</span>
				</div>
				<h3>{tw}</h3>
				<span className="follower">followers</span>
				<div className="f-count">
					<UpIcon />
					<span>12 Today</span>
				</div>
			</div>
			<div className="follower-grid__card">
				<div className="follower-grid__card__social-card">
					<IgIcon />
					<span>@justineray__</span>
				</div>
				<h3>{ig}</h3>
				<span className="follower">followers</span>
				<div className="f-count">
					<UpIcon />
					<span>12 Today</span>
				</div>
			</div>
			<div className="follower-grid__card">
				<div className="follower-grid__card__social-card">
					<YtIcon />
					<span>@tintin</span>
				</div>
				<h3>{yt}</h3>
				<span className="follower">followers</span>
				<div className="f-count">
					<DownIcon />
					<span>12 Today</span>
				</div>
			</div>
		</div>
	);
};

export default Follower;
