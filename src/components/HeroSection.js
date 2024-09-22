import React from 'react';
import { Button } from 'antd';

const HeroSection = ({ onExploreClick }) => (
    <section aria-label="Hero" className="relative min-h-screen w-full">
        <img
            src="https://media.licdn.com/dms/image/v2/C4D12AQFt3PVoxjvBeQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1612776307084?e=2147483647&v=beta&t=KXaYFtGbMwMqjF6LUxnAc-keQs8mC5eBydeh-0Fa4ww"
            alt="GitHub Open Source"
            className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute p-5 inset-0 flex flex-col items-center justify-center text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
            <h1 className='text-center'>Welcome To GitHub Community Club!</h1>
            <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6 font-bold text-white">
                Join us in our mission to foster growth, collaboration, and innovation through open-source projects and community engagement.
            </p>
            <Button type="primary" size="large" onClick={onExploreClick}>
                Explore Resources
            </Button>
        </div>
    </section>
);

export default React.memo(HeroSection);