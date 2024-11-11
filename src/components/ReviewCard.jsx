import React from 'react';
import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className='flex justify-center items-center flex-col'>
			<img src={imgURL} alt='customer' className='rounded-full object-cover w-[120px] h-[120px]' />
			<p className='mt-6 info-text max-w-sm text-center'>{feedback}</p>
			<div className='mt-3 flex justify-center items-center gap-2.5'>
				<img src={star} alt='rating' width={24} height={24} className='object-contain m-0' />
				<p className='font-montserrat text-slate-gray text-xl'>({rating})</p>
			</div>
			<h3 className='mt-1 font-palanquin font-bold text-center text-3xl'>{customerName}</h3>
		</div>
	);
};

export default ReviewCard;
