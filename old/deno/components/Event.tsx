import Location from "../components/Location.tsx";

enum EventType {
  vacinação = 1,
  movimento = 2,
  abate = 3,
  registro = 4,
}

interface EventProps {
  type_number: EventType;
  description: string;
  date: Date;
  animal_id: string;
  location: string;
}
export function Event(props: EventProps) {
  return (
    <div class="space-y-6 backdrop-blur-sm bg-white/5 rounded-xl p-6 shadow-xl border border-white/10">
      <h2 class="text-xl font-bold text-gray-300">Evento tipo {EventType[props.type_number]}</h2>
      <p class="text-gray-300">{props.description}</p>
      <div class="grid grid-cols-2 gap-4">
        <div class="text-gray-300">Data: {props.date.toLocaleString()}</div>
        <label class="text-gray-300">Localização do evento:</label>
        <Location name={props.location} description={props.location} latitude={-23.608903} longitude={-46.661967} />
      </div>
    </div>
  );
}