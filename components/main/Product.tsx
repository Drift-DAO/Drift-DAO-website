import React from 'react';
import Image from 'next/image';

const Product = () => {
	return (
		<div className="bg-[url('/images/bg-3.jpg')] " id="product">
			<div className="py-24">
				<div className="font-bold font-mono text-white text-5xl text-center">
					All in one
				</div>
				<div className="font-bold font-mono text-white text-5xl text-center py-2">
					place
				</div>
				<div className="md:flex justify-around items-center justify-items-center md:my-16 ">
					<div
						className="justify-center justify-items-center px-3"
						// style={{ height: '80vh', width: '40vw' }}
					>
						<img
							src="/images/app-drift-dao.png"
							height={'600'}
							width={'1012'}
							alt="load.."
						/>
					</div>
					<div className="text-pink-500 font-bold font-mono text-xl my-24 mx-8">
						<ul className="mx-4" style={{ listStyleType: 'circle' }}>
							<li className="my-2">Access all your DAOs in one app 🧑‍💻</li>
							<li className="my-2">Chat with fellow DAO members 📱💬</li>
							<li className="my-2">Create posts in discussion forum 🐧</li>
							<li className="my-2">Vote on RFPs 🔥 </li>
							<li className="my-2">Vote on snapshots 🗳️</li>
							<li className="my-2">Composable data 🥳</li>
							<li className="my-2">And, much more...🚀</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
