import React, { useState } from 'react';
import styles from './UserForm.module.css';

export default function UserForm({ canvasData, handleUserFormSubmission }) {
	const [formData, setFormData] = useState({ ...canvasData });
	function submitForm(event) {
		event.preventDefault();

		handleUserFormSubmission(formData);
	}
	function handleChange(event) {
		const { name, value } = event.target;
		setFormData((values) => ({ ...values, [name]: value }));
	}
	return (
		<div className={styles.form_container}>
			<form
				className={styles.form}
				onSubmit={(event) => {
					submitForm(event);
				}}
			>
				<label>
					width:
					<input
						type="number"
						name="width"
						required
						value={formData.width}
						onChange={handleChange}
					/>
				</label>
				<label>
					height:
					<input
						type="number"
						name="height"
						required
						value={formData.height}
						onChange={handleChange}
					/>
				</label>
				<label>
					radius:
					<input
						type="number"
						name="radius"
						required
						value={formData.radius}
						onChange={handleChange}
					/>
				</label>
				<label>
					count:
					<input
						type="number"
						name="count"
						required
						value={formData.count}
						onChange={handleChange}
					/>
				</label>
				<label>
					color:
					<input
						type="text"
						name="color"
						required
						value={formData.color}
						onChange={handleChange}
					/>
				</label>
				<input
					className={styles.submit_btn}
					type="submit"
					value="Submit"
				/>
			</form>
		</div>
	);
}
