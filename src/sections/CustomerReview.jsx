import React from 'react';
import { reviews } from '../constant';
import ReviewCard from '../components/ReviewCard';

const CustomerReview = () => {
	return (
		<section className='max-container'>
			<h3 className='text-center font-palanquin text-4xl font-bold'>
				What Our <span className='text-coral-red'>Customers</span> Say?
			</h3>
			<p className='info-text text-center m-auto mt-4 max-w-lg'>
				Hear genuine stories from our satisfied customers about their exceptional experiences with
				us.
			</p>
			<div className='mt-24 flex-1 flex justify-evenly items-center max-lg:flex-col gap-14'>
				{reviews.map((review) => (
					<ReviewCard key={review.feedback} {...review} />
				))}
			</div>
		</section>
	);
};

export default CustomerReview;
