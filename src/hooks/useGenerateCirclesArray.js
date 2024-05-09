import { generatePostions } from 'utils/utils';

export default function useGenerateCirclesArray(
	canvasHeight,
	canvasWidth,
	canvasCount,
	canvasRadius,
	canvasColor,
	canvasDimensions,
) {
	if (canvasDimensions.height == 0 && canvasDimensions.width == 0) {
		return [];
	}
	const arrayData = [];
	for (let i = 0; i < canvasCount; i++) {
		const coordinates = generatePostions(
			canvasWidth > 0 ? canvasWidth : canvasDimensions.width,
			canvasHeight > 0 ? canvasHeight : canvasDimensions.height,
			arrayData,
			canvasRadius,
		);
		const object = {
			id: i,
			radius: canvasRadius,
			position: coordinates,
			color: canvasColor,
		};
		arrayData.push(object);
	}
	return arrayData;
}
