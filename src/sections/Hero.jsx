import React, { useState } from 'react';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constant';
import { bigShoe1 } from '../assets/images';
import ShoeCard from '../components/ShoeCard';
const Hero = () => {
	const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
	return (
		<section
			id='home'
			className=' p-2 w-full flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container'
		>
			<div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28'>
				<p className='text-lg text-coral-red font-montserrat'>Our Summer Collection</p>
				<h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
					<span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
						The New Arrival
					</span>
					<br />
					<span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
				</h1>
				<p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
					Discover stylish Nike arrivals, quality comfort and innovation for your active life.
				</p>
				<Button label={'Shop Now'} iconURL={arrowRight} />
				<div
					className='flex
				justify-start items-start flex-wrap w-full mt-20 gap-16'
				>
					{statistics.map((stats, index) => (
						<div key={index}>
							<p className='text-4xl font-palanquin font-bold'>{stats.value}</p>
							<p className='leading-7 font-montserrat text-slate-gray'>{stats.label}</p>
						</div>
					))}
				</div>
			</div>
			<div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
				<img
					src={bigShoeImage}
					alt='shoes collection'
					width={610}
					height={500}
					className='object-contain relative z-10'
				/>
				<div className='absolute flex sm:gap-6 gap-4 -bottom-[5%] sm-left-[10%] max-sm:px-6'>
					{shoes.map((shoe) => (
						<div key={shoe}>
							<ShoeCard
								imageURL={shoe}
								changeBigShowImage={(shoeImage) => setBigShoeImage(shoeImage)}
								bigShowImage={bigShoeImage}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
