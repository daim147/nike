import React from 'react';

const Button = ({ label, iconURL }) => {
	return (
		<button className='flex justify-center items-center g-2 px-7 py-4 border font-montserrat leading-none text-lg bg-coral-red rounded-full text-white border-coral-red'>
			{label}
			<img src={iconURL} alt='icon' className='rounded-full ml-2 w-5 h-5' />
		</button>
	);
};

export default Button;
