import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const navbar = () => {
	const router = useRouter();
	const onBoardDAO = () => {
		// console.log('jai maata di');
		router.push('/onBoardDAO');
	};
	return (
		<Navbar
			fluid={true}
			rounded={false}
			className="sticky top-0"
			style={{ backgroundColor: '#170034', zIndex: 10 }}
		>
			<div>
				<span className="self-center whitespace-nowrap text-2xl sm:text-4xl font-semibold text-pink-800 dark:text-white ">
					<Link href="/">Drift-DAO</Link>
				</span>
			</div>
			<div className="flex md:order-2">
				<Button
					outline={true}
					gradientDuoTone="purpleToPink"
					className="mr-3"
					onClick={onBoardDAO}
				>
					Onboard DAO 🚀🔥
				</Button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<div  className="lg:text-xl text-base text-gray-300 mb-2">
					<Link href="/#home">Home</Link>
				</div>
				<div  className="lg:text-xl text-base text-gray-300 mb-2">
					<Link href="/#product">About</Link>
				</div>
				<div  className="lg:text-xl text-base text-gray-300 mb-2">
					<Link href="/#team">Our team</Link>
				</div>
				<div className="lg:text-xl text-base text-gray-300 mb-2">
					<Link href="/#contact">Contact us</Link>
				</div>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default navbar;
