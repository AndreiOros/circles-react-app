import { useState } from 'react';
import { modCirclesColor } from 'services/CirclesService';

const useCirclesState = () => {
	const [circlesCount, setCirclesCount] = useState(5);
	const [circlesColor, setCirclesColor] = useState('red');
	const [circlesRadius, setCirclesRadius] = useState(7);
	const [circles, setCircles] = useState([]);
	const [movingCircles, setMovingCircles] = useState(false);
	const [movementAngle, setMovementAngle] = useState(0);

	const changeCircleColorRandomly = (circles) => {
		setCircles(modCirclesColor(circles));
	};

	const setCircleColorToSelectedColor = () => {
		const circlesCopy = [...circles];
		circlesCopy.forEach((circle) => {
			circle.color = circlesColor;
		});
		setCircles(circlesCopy);
	};

	return {
		circlesCount,
		setCirclesCount,
		circlesColor,
		setCirclesColor,
		circlesRadius,
		setCirclesRadius,
		circles,
		setCircles,
		movingCircles,
		setMovingCircles,
		movementAngle,
		setMovementAngle,
		changeCircleColorRandomly,
		setCircleColorToSelectedColor,
	};
};

export default useCirclesState;
