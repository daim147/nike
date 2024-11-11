import React from 'react';

const ShoeCard = ({ imageURL, changeBigShowImage, bigShowImage }) => {
	const handleClick = () => {
		if (bigShowImage !== imageURL.bigShoe) {
			changeBigShowImage(imageURL.bigShoe);
		}
	};

	return (
		<div
			className={`border-2 rounded-xl ${
				bigShowImage === imageURL.bigShoe ? 'border-coral-red' : 'border-transparent'
			} cursor-pointer max-sm:flex-1`}
			onClick={handleClick}
		>
			<div className='flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4'>
				<img
					src={imageURL.thumbnail}
					alt='shoe'
					width={127}
					height={103}
					className='object-contain'
				/>
			</div>
		</div>
	);
};

export default ShoeCard;
