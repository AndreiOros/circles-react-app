import React, { useState } from 'react';
import styles from './UserForm.module.css';
import { generateRandomColor } from 'utils/utils';

export default function UserForm({ canvasData, handleUserFormSubmission }) {
	const [isColorDisabled, setIsColorDisabled] = useState(false);
	function handleChange(event) {
		const { name, value } = event.target;
		handleUserFormSubmission(name, value);
	}
	function handleCheckboxChange(event) {
		setIsColorDisabled(event.target.checked);
		if (event.target.checked) {
			const color = generateRandomColor();
			handleUserFormSubmission('color', color);
		}
	}
	return (
		<div className={styles.form_container}>
			<form className={styles.form}>
				<label>
					width:
					<input
						type="number"
						name="width"
						required
						defaultValue={canvasData.width}
						onBlur={handleChange}
					/>
				</label>
				<label>
					height:
					<input
						type="number"
						name="height"
						required
						defaultValue={canvasData.height}
						onBlur={handleChange}
					/>
				</label>
				<label>
					radius:
					<input
						type="number"
						name="radius"
						required
						defaultValue={canvasData.radius}
						onBlur={handleChange}
					/>
				</label>
				<label>
					count:
					<input
						type="number"
						name="count"
						required
						defaultValue={canvasData.count}
						onBlur={handleChange}
					/>
				</label>
				<label>
					color:
					<input
						type="text"
						name="color"
						required
						defaultValue={canvasData.color}
						onBlur={handleChange}
						disabled={isColorDisabled}
					/>
					<input
						type="checkbox"
						name="useColor"
						onChange={handleCheckboxChange}
					/>
					Random color
				</label>
			</form>
		</div>
	);
}
