import React from 'react';
import styles from './Canvas.module.css';
import Circle from 'components/Circle/Circle';

export default function Canvas({ circlesArray, canvasData, componentRef }) {
	return (
		<div
			ref={componentRef}
			className={styles.canvas}
			style={{
				width: `${canvasData.width}px`,
				height: `${canvasData.height}px`,
			}}
		>
			{circlesArray.map((circle) => {
				return <Circle key={circlesArray.id} circleData={circle} />;
			})}
		</div>
	);
}
