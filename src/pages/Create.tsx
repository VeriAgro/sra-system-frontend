import Header from '../components/Header.tsx';
import Form, { FormValue } from '../components/Form.tsx';
import React from 'react';
function Create({ form }: { form: string }) {
	return (
		<>
		<Header />
		<Form
			formValues={form === 'location' ? [
				new FormValue("Name", "name", true),
				new FormValue("Description", "description", false),
				new FormValue("Latitude", "latitude", true, "number"),
				new FormValue("Longitude", "longitude", true, "number")
			] : form === 'animal' ? [
				new FormValue("Breed", "breed", true),
				new FormValue("Sex", "sex", true),
				new FormValue("Name", "name", true)
			] : form === 'event' ? [
				new FormValue("Type", "type_number", true, "number"),
				new FormValue("Date", "date", true, "date"),
				new FormValue("Description", "description", false),
				new FormValue("Location", "location_id", true),
				new FormValue("Animal", "animal_id", true)
			] : []}
			URL={`https://sra-system-backend-999646529726.us-central1.run.app/${form}`}
		/>
		</>
	);
}

export default Create;