import React from 'react';
import Navbar from '../components/layout/Navbar';
import Home from '../components/main/Home';
import Image from 'next/image';
import Product from '../components/main/Product';
import Team from '../components/main/Team';
import Contact from '../components/main/Contact';

const index = () => {
	return (
		<div>
			<Home />
			<Product />
			<Team />
			<Contact />
		</div>
	);
};

export default index;
