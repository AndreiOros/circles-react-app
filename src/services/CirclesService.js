export const CIRCLE_SIZE = {
	min: 15,
	max: 35,
};

export const CIRCLE_SPEED = {
	min: 5,
	max: 15,
};

export const getRndColor = () => {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);

	const redHex = red.toString(16).padStart(2, '0');
	const greenHex = green.toString(16).padStart(2, '0');
	const blueHex = blue.toString(16).padStart(2, '0');

	return `#${redHex}${greenHex}${blueHex}`;
};

export const getRndInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRndBinary = () => {
	return getRndInt(1, 100) <= 50 ? 1 : -1;
};

export const createCircle = (xBound, yBound) => {
	const color = getRndColor();

	const ogSize = getRndInt(CIRCLE_SIZE.min, CIRCLE_SIZE.max);
	const size = ogSize;
	const dSize = Math.floor(size / 2);

	const ogSpeed = getRndInt(CIRCLE_SPEED.min, CIRCLE_SPEED.max);
	const speed = ogSpeed;

	const xP = getRndInt(0 + size * 2, xBound - size * 2);
	const yP = getRndInt(0 + size * 2, yBound - size * 2);

	const xD = getRndBinary();
	const yD = getRndBinary();

	return { color, ogSize, size, dSize, ogSpeed, speed, xP, yP, xD, yD };
};

export const createCircles = (circlesCount, xBound, yBound, options = {}) => {
	return [...new Array(circlesCount)].map(() => {
		const circle = createCircle(xBound, yBound, options);
		if (options.size) {
			circle.size = options.size * 2;
		}

		if (options.speed) {
			modCircleSpeed(circle, options.speed);
		}

		if (options.color) {
			circle.color = options.color;
		}

		return circle;
	});
};

export const moveCircle = (circle, xBound, yBound) => {
	circle.xP += circle.xD * circle.speed;
	circle.yP += circle.yD * circle.speed;

	if (circle.xP <= 0 + circle.dSize) {
		circle.xP = 0 + circle.dSize;
		circle.xD *= -1;
	}

	if (circle.xP >= xBound - circle.dSize) {
		circle.xP = xBound - circle.dSize;
		circle.xD *= -1;
	}

	if (circle.yP <= 0 + circle.dSize) {
		circle.yP = 0 + circle.dSize;
		circle.yD *= -1;
	}

	if (circle.yP >= yBound - circle.dSize) {
		circle.yP = yBound - circle.dSize;
		circle.yD *= -1;
	}
	return circle;
};

export const moveCircles = (circles, xBound, yBound) => {
	const circlesArray = [...circles];
	circlesArray.forEach((circle) => {
		moveCircle(circle, xBound, yBound);
	});
	return circlesArray;
};

export const modCircleDir = (circle) => {
	if (getRndBinary() === 1) {
		circle.xD *= -1;
	} else {
		circle.yD *= -1;
	}
};

export const modCirclesDir = (circles) => {
	circles.forEach((circle) => {
		modCircleDir(circle);
	});
};

export const modCircleColor = (circle) => {
	circle.color = getRndColor();
};

export const modCirclesColor = (circles) => {
	const circlesArray = [...circles];
	circlesArray.forEach((circle) => {
		modCircleColor(circle);
	});
	return circlesArray;
};

export const modCircleSpeed = (circle, value) => {
	circle.speed = circle.ogSpeed + circle.ogSpeed * (value / 100);
};

export const modCirclesSpeed = (circles, value) => {
	circles.forEach((circle) => {
		modCircleSpeed(circle, value);
	});
};

export const modCircleSize = (circle, value) => {
	const size = circle.ogSize + circle.ogSize * (value / 100);
	circle.size = size;
	circle.dSize = Math.floor(size / 2);
	return circle.size;
};

export const modCirclesSize = (circles, value) => {
	circles.forEach((circle) => {
		modCircleSize(circle, value);
	});
};
