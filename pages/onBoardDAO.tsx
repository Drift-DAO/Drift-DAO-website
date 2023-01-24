import React from 'react';
import Footer_01 from '../components/layout/Footer';
import OnBoardDAO from '../components/onBoardDAO/OnBoardDAO';

const onBoardDAO = () => {
	return (
		<div className="bg-[url('/images/bg.jpg')]  bg-fixed" >
			<OnBoardDAO />
			<Footer_01/>
		</div>
	);
};

export default onBoardDAO;
