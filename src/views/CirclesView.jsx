import React, { useEffect } from 'react';

import InputForm from 'components/InputForm';
import Canvas from 'components/Canvas';

import { createCircles, moveCircles } from 'services/CirclesService';

import useCirclesState from 'hooks/useCirclesState';
import useCanvasState from 'hooks/useCanvasState';

const CirclesView = () => {
	const circles = useCirclesState();
	const canvas = useCanvasState();

	useEffect(() => {
		if (circles.movingCircles) {
			const interval = setInterval(() => {
				circles.setCircles(
					moveCircles(
						circles.circles,
						canvas.canvasWidth,
						canvas.canvasHeight,
						circles.movementAngle,
					),
				);
			}, 100);

			return () => clearInterval(interval);
		}
	}, [circles.movingCircles]);

	useEffect(() => {
		circles.setCircles(
			createCircles(
				circles.circlesCount,
				canvas.canvasHeight,
				canvas.canvasWidth,
				{
					size: circles.circlesRadius,
					color: circles.circlesColor,
					angle: circles.movementAngle,
				},
			),
		);
	}, []);

	useEffect(() => {
		circles.setCircles(
			createCircles(
				circles.circlesCount,
				canvas.canvasHeight,
				canvas.canvasWidth,
				{ size: circles.circlesRadius, color: circles.circlesColor },
			),
		);
	}, [circles.circlesCount]);

	const handleFormSubmit = (formData) => {
		switch (formData.name) {
			case 'canvasWidth':
				canvas.setCanvasWidth(Number(formData.value));
				break;
			case 'canvasHeight':
				canvas.setCanvasHeight(Number(formData.value));
				break;
			case 'circlesCount':
				circles.setCirclesCount(Number(formData.value));
				break;
			case 'circlesRadius':
				circles.setCirclesRadius(Number(formData.value));
				break;
			case 'circlesAngle':
				circles.setMovementAngle(Number(formData.value));
				break;
			case 'randomColors':
				if (formData.value) {
					circles.changeCircleColorRandomly(circles.circles);
					break;
				}
				circles.setCircleColorToSelectedColor();
				break;
			case 'movingCircles':
				circles.setMovingCircles(formData.value);
				break;
			default:
				break;
		}
	};

	return (
		<div>
			<div>
				<InputForm
					handleFormSubmit={handleFormSubmit}
					circles={circles}
					canvas={canvas}
				/>
			</div>
			<div>
				<Canvas canvasData={canvas} circles={circles} />
			</div>
		</div>
	);
};

export default CirclesView;
