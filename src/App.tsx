import React from "react";

import "./css/App.css";
import "./css/Resp.css";

const App: React.FC = () => {
	return (
		<section className="d-grid" id="container">
			<section className="d-flex jc-center" id="main-container">
				<div className="d-grid" id="main-grid">
					<div className="long-sec" id="logo-image"> <img src="img/logo.svg" alt="Logo" /> </div>
					<div className="d-flex jc-center long-sec"> <p id="logo-name">Dip Spray</p> </div>

					<div className="d-flex jc-center long-sec"> <p id="tagline"> 
						Just a twist of the tap, and 1 Aptos DevNet token flows your way—fueling your blockchain innovations one drop at a time! 
					</p> </div>

					<div className="d-flex"> <input type="text" className="inp" id="acc" placeholder="Account Address" /> </div>
					<div className="d-flex"> <input type="number" className="inp" id="quan" min={1} defaultValue={1} max={10} /> </div>
					<div className="d-flex"> <input type="button" className="inp" id="btn" value="Fuel It" /> </div>
				</div>
			</section>

			<footer className="d-flex jc-center"> <p className="d-flex">Made with ❤️ by &nbsp;
				<a href="https://github.com/jAnubhav" target="_blank" className="d-flex jc-center" id="credit">
					<i className="fab fa-github"></i> <span>jAnubhav</span>
				</a>
			</p> </footer>
		</section>
	);
};

export default App;