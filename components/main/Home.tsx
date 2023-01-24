import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
	return (
		<div
			id="home"
			className="bg-[url('/images/bg.jpg')] h-auto"
			style={{ height: '100vh' }}
		>
			<div className=" text-center pt-24">
				<div className="sm:text-8xl text-white font-bold italic text-6xl">
					Engage with all
				</div>
				<div className="sm:text-6xl text-white italic text-5xl mt-4">
					your DAOs
				</div>
				<div className=" text-white italic  my-6">
					<TypeAnimation
						sequence={[
							'effortlessly...', // Types 'One'
							1000, // Waits 1s
							'at one click...', // Deletes 'One' and types 'Two'
							2000, // Waits 2s
							'in one app...',
							2000,
							() => {
								// console.log('Done typing!'); // Place optional callbacks anywhere in the array
							},
						]}
						cursor={true}
						repeat={Infinity}
						style={{ fontSize: '2em' }}
					/>
				</div>
			</div>
			<div className="flex justify-center">
				<img
					// className={styles.img}
					src="/images/logo-white.png"
					height="200"
					width="522"
					alt="load..."
					// priority={true}
					style={{ width: 'auto', height: 'auto' }}
				/>
			</div>
		</div>
	);
};

export default Home;
