import Location from "../components/Location.tsx";

interface AnimalProps {
  name: string;
  description: string;
  birth: Date;
  sex: string;
  breed: string;
  color: string;
  weight: number;
  height: number;
  location: string;
  register_date: Date;
}

export function Animal(props: AnimalProps) {
  return (
    <div class="space-y-6 backdrop-blur-sm bg-white/5 rounded-xl p-6 shadow-xl border border-white/10">
      <h2 class="text-xl font-bold text-gray-300">{props.name}</h2>
      <p class="text-gray-300">{props.description}</p>
      <div class="grid grid-cols-2 gap-4">
        <div class="text-gray-300">Nascimento: {props.birth.toLocaleDateString()}</div>
        <div class="text-gray-300">Sexo: {props.sex}</div>
        <div class="text-gray-300">Raça: {props.breed}</div>
        <div class="text-gray-300">Cor: {props.color}</div>
        <div class="text-gray-300">Peso: {props.weight}kg</div>
        <div class="text-gray-300">Altura: {props.height}cm</div>
        <div class="text-gray-300">Registrado em: {props.register_date.toLocaleDateString()}</div>
        <label class="text-gray-300">Localização de origem:</label>
        <Location name={props.location} description={props.location} latitude={-23.608903} longitude={-46.661967} />
      </div>
    </div>
  );
}