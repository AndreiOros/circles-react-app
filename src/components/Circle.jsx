import React from 'react';

const Circle = ({ circleData }) => {
	return (
		<div
			style={{
				width: `${circleData.size}px`,
				height: `${circleData.size}px`,
				borderRadius: '50%',
				backgroundColor: `${circleData.color}`,
				position: 'absolute',
				top: `${circleData.yP}px`,
				left: `${circleData.xP}px`,
			}}
		></div>
	);
};

export default Circle;
