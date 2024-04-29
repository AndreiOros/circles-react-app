import React from 'react';
import style from './Circle.modules.css';

export default function Circle({ circleData }) {
	return (
		<div
			className={style.circle}
			style={{
				backgroundColor: circleData.color,
				height: `${circleData.radius * 2}px`,
				width: `${circleData.radius * 2}px`,
				left: `${circleData.position.x}px`,
				top: `${circleData.position.y}px`,
			}}
		></div>
	);
}
