import React from "react";
import './Form.css';
class FormValue {
    title: string;
    internalName: string;
    required: boolean;
    type: string;
	constructor(title, internalName, required, type = "text") {
		this.title = title;
		this.internalName = internalName;
		this.required = required;
		this.type = type;
	}
}
	function Form({ formValues, URL }) {
		const handleSubmit = async (event) => {
			event.preventDefault();
			const formData = new FormData(event.target);
			const data = {};
		
			for (let [key, value] of formData.entries()) {
				const formValue = formValues.find(fv => fv.internalName === key);
				data[key] = formValue.type === 'number' ? Number(value) : value;
			}

			try {
				const response = await fetch(URL, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const result = await response.json();
				console.log('Success:', result);
			} catch (error) {
				console.error('Error:', error);
			}
		};

		return (
				<div className="form-container">
					<form onSubmit={handleSubmit}>
						{formValues.map((formValue) => (
							<div className="form-group" key={formValue.internalName}>
								<label className="form-label">
									{formValue.title}:
									<input
										className="form-input"
										type={formValue.type}
										name={formValue.internalName}
										required={formValue.required}
									/>
								</label>
							</div>
						))}
						<button type="submit" className="submit-button">Submit</button>
					</form>
				</div>
		);
	}
export default Form;
export { FormValue };