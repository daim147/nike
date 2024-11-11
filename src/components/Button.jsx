import React from 'react';

const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
	return (
		<button
			className={`flex justify-center items-center g-2 px-7 py-4 border font-montserrat leading-none text-lg rounded-full ${
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor}`
					: 'bg-coral-red  text-white border-coral-red'
			} ${fullWidth && 'w-full'}`}
		>
			{label}
			{iconURL && <img src={iconURL} alt='icon' className='rounded-full ml-2 w-5 h-5' />}
		</button>
	);
};

export default Button;
