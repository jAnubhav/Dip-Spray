import React from 'react';

import './App.css';

const App: React.FC = () => {
	return (
		<section className='d-flex jc-center container'>
			<div className='d-grid main-grid'>
				<div className='d-flex jc-center logo'> <img src='./img/logo.svg' alt='Logo' /> </div>
				<div className='d-flex jc-center'> <p className='title'>Dip Spray</p> </div>

				<div className='d-flex'> <p className='tagline'>
					Just a twist of the tap, and 1 Aptos DevNet token flows your way - fueling your blockchain innovations!
				</p> </div>

				<div> <input className='inp acc' type='text' id='account' placeholder='Account Address' /> </div>
				<div> <input className='inp quan' type='number' id='quan' defaultValue={1} min={1} max={10} /> </div>
				<div> <input className='inp btn' type='button' value='Send' /> </div>
			</div>
		</section>
	)
};

export default App;
