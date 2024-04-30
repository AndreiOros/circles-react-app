import React, { useEffect, useState } from 'react';
import UserForm from 'components/UserForm/UserForm';
import Canvas from 'components/Canvas/Canvas';
export default function Circles() {
	const [canvasData, setCanvasData] = useState({
		width: '1200',
		height: '700',
		radius: 7,
		count: 300,
		color: '#FFD700',
	});
	const [circlesArray, setCirclesArray] = useState([]);
	const failedPositions = [];

	function handleUserFormSubmission(formData) {
		setCanvasData(formData);
	}
	function generateCirclesArray() {
		if (canvasData.width > 0) {
			const arrayData = [];
			for (let i = 0; i < canvasData.count; i++) {
				const coordonates = generatePosition(arrayData);
				const object = {
					id: i,
					radius: canvasData.radius,
					position: coordonates,
					color: canvasData.color,
				};
				arrayData.push(object);
			}
			setCirclesArray(arrayData);
		}
	}
	function generatePosition(circlesArrayData) {
		const x = Math.floor(Math.random() * (canvasData.width + 1));
		const y = Math.floor(Math.random() * (canvasData.height + 1));
		if (failedPositions.includes({ x: x, y: y }))
			return generatePosition(circlesArrayData);

		const isPositionOccupied = circlesArrayData.includes({ x: x, y: y });
		const isOutOfBound = determineIfCirclesAreOutOfBound({ x: x, y: y });
		const isOverlapped = determineIfCirclesOverlap(circlesArrayData, {
			x: x,
			y: y,
		});

		if (isPositionOccupied || isOverlapped || isOutOfBound) {
			failedPositions.push({ x: x, y: y });
			return generatePosition(circlesArrayData);
		}
		return { x: x, y: y };
	}
	function determineIfCirclesOverlap(circlesArrayData, coordinates) {
		for (let i = 0; i < circlesArrayData.length; i++) {
			const circle = circlesArrayData[i];
			const overlapsXaxis =
				(coordinates.x >= circle.position.x &&
					coordinates.x <=
						circle.position.x + canvasData.radius * 2 + 2) ||
				(coordinates.x <= circle.position.x &&
					coordinates.x >=
						circle.position.x - canvasData.radius * 2 - 2);
			const overlapsYaxis =
				(coordinates.y >= circle.position.y &&
					coordinates.y <=
						circle.position.y + canvasData.radius * 2 + 2) ||
				(coordinates.y <= circle.position.y &&
					coordinates.y >=
						circle.position.y - canvasData.radius * 2 - 2);
			if (overlapsXaxis && overlapsYaxis) {
				return true; // Overlap detected
			}
		}
		return false; // No overlap detected
	}
	function determineIfCirclesAreOutOfBound(coordonates) {
		const outOfBoundXaxis =
			coordonates.x + Number(canvasData.radius) * 2 + 2 >
			Number(canvasData.width);
		const outOfBoundYaxis =
			coordonates.y + Number(canvasData.radius) * 2 + 2 >
			Number(canvasData.height);
		if (outOfBoundXaxis || outOfBoundYaxis) {
			return true;
		}
		return false;
	}

	useEffect(() => {
		generateCirclesArray();
	}, [canvasData]);

	return (
		<div>
			<div>
				<UserForm
					canvasData={canvasData}
					handleUserFormSubmission={handleUserFormSubmission}
				/>
			</div>
			<div style={{ height: '100%' }}>
				<Canvas circlesArray={circlesArray} canvasData={canvasData} />
			</div>
		</div>
	);
}
