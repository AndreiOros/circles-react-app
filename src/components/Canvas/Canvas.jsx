import React from 'react';
import styles from './Canvas.module.css';
import Circle from 'components/Circle/Circle';

export default function Canvas({ circlesArray, canvasData }) {
	const data = { ...canvasData };
	return (
		<>
			{data.width && (
				<div
					className={styles.canvas}
					style={{
						'--canvas-width': `${data.width}px`,
						'--canvas-height': `${data.height}px`,
					}}
				>
					{circlesArray.length > 0 &&
						circlesArray.map((circle) => {
							return (
								<Circle
									key={circlesArray.id}
									circleData={circle}
								/>
							);
						})}
				</div>
			)}
			{!data.width && (
				<div className={styles.message}>
					<span>Please submit you data</span>
				</div>
			)}
		</>
	);
}
