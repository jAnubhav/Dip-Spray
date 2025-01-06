import React from "react";
import { toast, ToastContainer, Slide } from "react-toastify";

import { Variables } from "./assets/funder";

import "./css/App.css";
import "./css/Resp.css";

const App: React.FC = () => {
	const { update_acc, update_quan, fund_account, acc_input, quan_input, btn_state } = Variables();

	const take_action = async () => {
		toast.info("Request Sent!", { 
			pauseOnHover: false, transition: Slide, className: "toast" }); 
		
			await fund_account(); 
		
		toast.success("Fueled the Account!", { 
			pauseOnHover: false, transition: Slide, className: "toast" }); 
	};

	return (
		<section className="d-grid" id="container">
			<section className="d-flex jc-center" id="main-container">
				<ToastContainer className="toast-grid" position="top-center" autoClose={2000} 
					hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss={false} 
					draggable pauseOnHover={false} theme="colored" transition={Slide} 
				/>

				<div className="d-grid" id="main-grid">
					<div className="long-sec" id="logo-image"> <img src="img/logo.svg" alt="Logo" /> </div>
					<div className="d-flex jc-center long-sec"> <p id="logo-name">Dip Spray</p> </div>

					<div className="d-flex jc-center long-sec"> <p id="tagline">
						Just a twist of the tap, and 1 Aptos DevNet token flows your way - fueling your blockchain innovations drop by drop!
					</p> </div>

					<div className="d-flex" id="acc-con">
						<input type="text" className="inp" id="acc" placeholder="Account Address"
							onChange={update_acc} value={acc_input} />
					</div>

					<div className="d-flex">
						<input type="number" className="inp" id="quan" min={1} max={10}
							onChange={update_quan} value={quan_input} />
					</div>

					<div className="d-flex">
						<input type="button" className={`inp ${btn_state}`} id="btn"
							onClick={take_action} value="Fuel It" />
					</div>
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