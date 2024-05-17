import React from 'react';

import Circle from './Circle';

const Canvas = ({ canvasData, circles }) => {
	return (
		<div
			style={{
				backgroundColor: 'lightgray',
				margin: '0 auto',
				width: `${canvasData.canvasWidth}px`,
				height: `${canvasData.canvasHeight}px`,
				position: 'relative',
			}}
		>
			{circles.circles.map((circle, index) => (
				<Circle key={index} circleData={circle} />
			))}
		</div>
	);
};

export default Canvas;
