import React from 'react';
import Card from './Card';

const About = () => {
	return (
    <div className="bg-[url('/images/bg.jpg')]" id="team">
      <div className="text-white text-6xl text-center pt-20">Our team</div>
      <div className="sm:flex items-center justify-around sm:h-screen py-10">
        <div className=" w-80 mx-auto">
          <Card
            img="/images/team/deependu.jpg"
            name="Deependu Jha"
            role="BlockChain Developer"
            email="deependujha21@gmail.com"
            twitter="deependu__"
            twitterLink="https://twitter.com/deependu__"
          />
        </div>
        <div className="mx-auto w-80">
          <Card
            img="/images/team/nitesh.jpeg"
            name="Nitesh Kumar"
            role="Frontend Developer"
            email="nkumar35101@gmail.com"
            twitter="nkumar35101"
            twitterLink="https://twitter.com/nkumar35101"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
