import { useState } from 'react';

const useCanvasState = () => {
	const [canvasWidth, setCanvasWidth] = useState(500);
	const [canvasHeight, setCanvasHeight] = useState(500);

	return {
		canvasWidth,
		setCanvasWidth,
		canvasHeight,
		setCanvasHeight,
	};
};

export default useCanvasState;
