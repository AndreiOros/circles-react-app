import React from 'react';

import styles from './InputForm.module.css';

const InputForm = ({ handleFormSubmit, circles, canvas }) => {
	const formData = { ...circles, ...canvas };

	const onInputBlur = (event) => {
		const { name, value } = event.target;
		return handleFormSubmit({ name, value });
	};

	const onCheckboxChange = (event) => {
		const { name, checked } = event.target;
		return handleFormSubmit({ name, value: checked });
	};

	return (
		<form className={styles.form}>
			<div className={styles.inputForm}>
				<label className={styles.input}>
					Canvas width:
					<input
						type="number"
						name="canvasWidth"
						onBlur={onInputBlur}
						defaultValue={formData.canvasWidth}
					/>
				</label>
				<label className={styles.input}>
					Canvas Height:
					<input
						type="number"
						name="canvasHeight"
						onBlur={onInputBlur}
						defaultValue={formData.canvasHeight}
					/>
				</label>
				<label className={styles.input}>
					Circles count:
					<input
						type="number"
						name="circlesCount"
						onBlur={onInputBlur}
						defaultValue={formData.circlesCount}
					/>
				</label>
				<label className={styles.input}>
					Circles radius:
					<input
						type="number"
						name="circlesRadius"
						onBlur={onInputBlur}
						defaultValue={formData.circlesRadius}
					/>
				</label>
				<label className={styles.input}>
					Circles movement angle:
					<input
						type="number"
						name="circlesAngle"
						onBlur={onInputBlur}
						defaultValue={formData.movementAngle}
					/>
				</label>
				<label className={styles.input}>
					Circles color:
					<input
						type="text"
						name="circlesColor"
						defaultValue={formData.circlesColor}
						onBlur={onInputBlur}
					/>
				</label>
				<label className={styles.input}>
					Random colors:
					<input
						type="checkbox"
						name="randomColors"
						onChange={onCheckboxChange}
					/>
				</label>
				<label className={styles.input}>
					Move Circles:
					<input
						type="checkbox"
						name="movingCircles"
						onChange={onCheckboxChange}
					/>
				</label>
			</div>
		</form>
	);
};

export default InputForm;
