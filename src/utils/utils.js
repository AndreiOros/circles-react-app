export function getCanvasMeasurements(ref) {
	if (!ref || !ref.current) {
		return { width: 0, height: 0 };
	}
	const { width, height } = ref.current.getBoundingClientRect();
	return { width, height };
}

export function generateRandomColor() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	const redHex = red.toString(16).padStart(2, '0');
	const greenHex = green.toString(16).padStart(2, '0');
	const blueHex = blue.toString(16).padStart(2, '0');

	const color = `#${redHex}${greenHex}${blueHex}`;

	return color;
}

export function generatePostions(
	canvasWidth,
	canvasHeight,
	circlesArray,
	canvasRadius,
) {
	const coordinates = generateCoordinates(canvasWidth, canvasHeight);
	const validCoordinates = determineIfPostionsAreValid(
		coordinates,
		circlesArray,
		canvasRadius,
		canvasWidth,
		canvasHeight,
	);
	if (validCoordinates) {
		return coordinates;
	}
	return generatePostions(
		canvasWidth,
		canvasHeight,
		circlesArray,
		canvasRadius,
	);
}

function generateCoordinates(canvasWidth, canvasHeight) {
	const x = Math.floor(Math.random() * (canvasWidth + 1));
	const y = Math.floor(Math.random() * (canvasHeight + 1));

	return { x: x, y: y };
}

function determineIfPostionsAreValid(
	coordinates,
	circlesArray,
	canvasRadius,
	canvasWidth,
	canvasHeight,
) {
	const isPositionOccupied = circlesArray.includes({
		x: coordinates.x,
		y: coordinates.y,
	});
	const isOutOfBound = determineIfCirclesAreOutOfBound(
		canvasRadius,
		canvasWidth,
		canvasHeight,
		{
			x: coordinates.x,
			y: coordinates.y,
		},
	);
	const isOverlapped = determineIfCirclesOverlap(canvasRadius, circlesArray, {
		x: coordinates.x,
		y: coordinates.y,
	});

	if (isPositionOccupied || isOverlapped || isOutOfBound) {
		return false;
	}
	return true;
}

function determineIfCirclesOverlap(
	canvasRadius,
	circlesArrayData,
	coordinates,
) {
	for (let i = 0; i < circlesArrayData.length; i++) {
		const circle = circlesArrayData[i];
		const overlapsXaxis =
			(coordinates.x >= circle.position.x &&
				coordinates.x <= circle.position.x + canvasRadius * 2 + 2) ||
			(coordinates.x <= circle.position.x &&
				coordinates.x >= circle.position.x - canvasRadius * 2 - 2);
		const overlapsYaxis =
			(coordinates.y >= circle.position.y &&
				coordinates.y <= circle.position.y + canvasRadius * 2 + 2) ||
			(coordinates.y <= circle.position.y &&
				coordinates.y >= circle.position.y - canvasRadius * 2 - 2);
		if (overlapsXaxis && overlapsYaxis) {
			return true;
		}
	}
	return false;
}

function determineIfCirclesAreOutOfBound(
	canvasRadius,
	canvasWidth,
	canvasHeight,
	coordinates,
) {
	const outOfBoundXaxis =
		coordinates.x + Number(canvasRadius) * 2 + 2 > Number(canvasWidth);
	const outOfBoundYaxis =
		coordinates.y + Number(canvasRadius) * 2 + 2 > Number(canvasHeight);
	if (outOfBoundXaxis || outOfBoundYaxis) {
		return true;
	}
	return false;
}
