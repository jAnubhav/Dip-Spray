import React from 'react';

import './App.css';

const App: React.FC = () => {
	return (
		<section className='d-flex fld-col jc-center container'>
			<div className='d-grid main-grid'>
				<div className='d-flex jc-center logo'> <img src='./img/logo.svg' alt='Logo' /> </div>
				<div className='d-flex jc-center'> <p className='title'>Dip Spray</p> </div>

				<div className='d-flex'>
					<p className='tagline'>Just a twist of the tap, and 1 Aptos DevNet token flows your way - fueling your blockchain innovations!</p>
				</div>

				<div> <input type='text' name='account' id='account' placeholder='Account Address' /> </div>
				<div> <input type='number' name='quan' id='quan' value={1} min={1} /> </div>
				<div> <input type='button' value='Fuel It' /> </div>
			</div>
		</section>
	)
};

export default App;
