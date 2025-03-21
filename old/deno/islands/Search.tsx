import { useState, useEffect } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { Animal } from "../components/Animal.tsx";
import { Event } from "../components/Event.tsx";

interface AnimalData {
  name: string;
  description: string;
  birth: string;
  sex: string;
  breed: string;
  color: string;
  weight: number;
  height: number;
  location: string;
  register_date: string;
}

interface EventData {
  type_number: number;
  description: string;
  date: string;
  animal_id: string;
  location: string;
}


export default function Search() {
  const [search, setSearch] = useState("");
  const [animal, setAnimal] = useState<AnimalData | null>(null);
  const [events, setEvents] = useState<EventData[]>([]);

  const handleSearch = (searchId: string) => {
    globalThis.window.location.href = `?id=${searchId}`;
  };

  const fetchData = async (searchId: string) => {
    try {
      const [animalResponse, eventsResponse] = await Promise.all([
        fetch(
          `https://sra-system-backend-999646529726.us-central1.run.app/animal/${searchId}`
        ),
        fetch(
          `https://sra-system-backend-999646529726.us-central1.run.app/events/animal/${searchId}`
        )
      ]);
      const animalData: AnimalData = await animalResponse.json();
      const eventsData: EventData[] = await eventsResponse.json();
      setAnimal(animalData);
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(globalThis.location.search);
    const searchId = urlParams.get('id');
    if (searchId) {
      fetchData(searchId);
    }
  }, []);

  return (
    <div>
      {!animal && (
        <div class="flex justify-center items-center gap-4 py-8">
          <input
            type="text"
            placeholder="Search by ID..."
            value={search}
            onChange={(e) => setSearch((e.target as HTMLInputElement).value)}
            class="px-4 py-2 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:border-blue-500"
          />
          <Button onClick={() => handleSearch(search)}>
            Search
          </Button>
        </div>
      )}
      <div class="flex justify-center">
        {animal && (
          <Animal 
            name={animal.name}
            description={animal.description}
            birth={new Date(animal.birth)}
            sex={animal.sex}
            breed={animal.breed}
            color={animal.color}
            weight={animal.weight}
            height={animal.height}
            location={animal.location}
            register_date={new Date(animal.register_date)}
          />
        )}
      </div>
      <div class="flex flex-col gap-4 mt-8">
        {events.map((event) => (
          <Event
            type_number={event.type_number}
            description={event.description}
            date={new Date(event.date)}
            animal_id={event.animal_id}
            location={event.location}
          />
        ))}
      </div>
    </div>
  );
}