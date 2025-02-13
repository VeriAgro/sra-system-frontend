const URL = 'http://localhost:80';
function searchAnimal(id){
    fetch(`${URL}/animal/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Animal not found')
            }
            return response.json()
        })
        .then(animal => {
            console.log(animal);
            const elements = {
                'name': animal.name,
                'description': animal.description,
                'birth': new Date(animal.birth).toLocaleDateString(),
                'sex': animal.sex,
                'breed': animal.breed,
                'color': animal.color,
                'weight': animal.weight,
                'height': animal.height,
                'register_date': new Date(animal.register_date).toLocaleDateString()            }

            for (const [id, value] of Object.entries(elements)) {
                const element = document.getElementById(id)
                if (element) {
                    element.textContent = value
                }
            }
            
             return fetch(`${URL}/event/animal/${id}`)
        })
         .then(response => {
             if (!response.ok) {
                 throw new Error('Events not found')
             }
             return response.json()
         })
         .then(events => {
             const eventsContainer = document.getElementById('eventsList')
             if (!eventsContainer) {
                 throw new Error('Events container not found')
             }
            
             eventsContainer.innerHTML = ''
            
             events.forEach(event => {
                 const eventDiv = document.createElement('div')
                 eventDiv.className = 'event'
                 const eventTypeMap = {
                     1: 'VACINACAO',
                     2: 'MOVIMENTO',
                     3: 'ABATE',
                     4: 'REGISTRO'
                 }
                 eventDiv.innerHTML = `
                     <h3>Event Type: ${eventTypeMap[event.type_number] || event.type_number}</h3>
                     <p>Description: ${event.description}</p>
                     <p>Date: ${new Date(event.date).toLocaleDateString()}</p>
                 `
                 eventsContainer.appendChild(eventDiv)
             })
         })        .catch(error => {
            console.error('Error:', error)
            const errorElement = document.getElementById('error-message')
            if (errorElement) {
                errorElement.textContent = error.message || 'Error fetching animal data'
            }
        })
}



/*

app.post("/animal", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, name, description, birth, sex, breed, color, weight, height, location_id } = req.body;
        const birthDate = new Date(birth);
        if (birthDate > new Date()) {
            res.status(400).json({ message: "Birth date cannot be in the future" });
            return;
        }
        const newAnimal = new AnimalModel({
            id,
            name,
            description,
            birth: birthDate,
            sex,
            breed,
            color,
            weight,
            height,
            location_id,
            register_date: new Date(),
        });
        const savedAnimal = await newAnimal.save();
        res.status(201).json(savedAnimal);
    } catch (error) {
        res.status(500).json({ message: "Error creating animal" });
    }
});
*/
async function createAnimal(animalData) {
    try {
        const response = await fetch(`${URL}/animal`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(animalData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error creating animal');
        }

        const savedAnimal = await response.json();
        return savedAnimal;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = error.message;
        throw error;
    }
}

/*

app.post("/location", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, name, description, latitude, longitude } = req.body;
        const newLocation = new LocationModel({
            id,
            name,
            description,
            latitude,
            longitude,
        });
        const savedLocation = await newLocation.save();
        res.status(201).json(savedLocation);
    } catch (error) {
        res.status(500).json({ message: "Error creating location" });
    }
});
*/
async function createLocation(locationData) {
    console.log('createLocation called with data:', locationData);
    try {
        const response = await fetch(`${URL}/location`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(locationData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error creating location');
        }
        const savedLocation = await response.json();
        return savedLocation;
    }
    catch (error) {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = error.message;
        throw error;
    }
}

/*
app.post("/event", async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, name, type_number, description, date, animal_id, location_id } = req.body;
        
        const animal = await AnimalModel.findById(animal_id);
        if (!animal) {
            res.status(404).json({ message: "Animal not found" });
            return;
        }

        const location = await LocationModel.findById(location_id);
        if (!location) {
            res.status(404).json({ message: "Location not found" });
            return;
        }

        const newEvent = new EventModel({
            id,
            name,
            type_number,
            description,
            date: new Date(date),
            animal,
            location
        });
        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({ message: "Error creating event" });
    }
});
*/

async function createEvent(eventData) {
    try {
        const response = await fetch(`${URL}/event`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error creating event');
        }
        const savedEvent = await response.json();
        return savedEvent;
    }
    catch (error) {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = error.message;
        throw error;
    }
}