import React, { useEffect, useState, useRef } from 'react';

import UserForm from 'components/UserForm/UserForm';
import Canvas from 'components/Canvas/Canvas';

import useGenerateCirclesArray from 'hooks/useGenerateCirclesArray';
import { getCanvasMeasurements } from 'utils/utils';

import styles from './Circles.module.css';

export default function Circles() {
	const [canvasWidth, setCanvasWidth] = useState();
	const [canvasHeight, setCanvasHeight] = useState();
	const [canvasRadius, setCanvasRadius] = useState(7);
	const [canvasCount, setCanvasCount] = useState(10);
	const [canvasColor, setCanvasColor] = useState('#FFD700');
	const [circlesArray, setCirclesArray] = useState([]);
	const [canvasDimensions, setCanvasDimensions] = useState({
		height: 0,
		width: 0,
	});

	const componentRef = useRef(null);

	let arrayData = useGenerateCirclesArray(
		canvasHeight,
		canvasWidth,
		canvasCount,
		canvasRadius,
		canvasColor,
		canvasDimensions,
	);

	function handleUserFormSubmission(fieldName, value) {
		switch (fieldName) {
			case 'width':
				setCanvasWidth(value);
				break;
			case 'height':
				setCanvasHeight(value);
				break;
			case 'radius':
				setCanvasRadius(value);
				break;
			case 'count':
				setCanvasCount(value);
				break;
			case 'color':
				setCanvasColor(value);
				break;
			default:
				break;
		}
	}

	useEffect(() => {
		setCirclesArray(arrayData);
	}, [
		canvasWidth,
		canvasHeight,
		canvasRadius,
		canvasCount,
		canvasColor,
		canvasDimensions,
	]);

	useEffect(() => {
		const dimensions = getCanvasMeasurements(componentRef);
		setCanvasDimensions(dimensions);
	}, [Canvas]);

	return (
		<div className={styles.container}>
			<UserForm
				canvasData={{
					width: canvasWidth,
					height: canvasHeight,
					radius: canvasRadius,
					count: canvasCount,
					color: canvasColor,
				}}
				handleUserFormSubmission={handleUserFormSubmission}
			/>

			<Canvas
				circlesArray={circlesArray}
				canvasData={{
					width: canvasWidth,
					height: canvasHeight,
					radius: canvasRadius,
					count: canvasCount,
					color: canvasColor,
				}}
				componentRef={componentRef}
			/>
		</div>
	);
}
