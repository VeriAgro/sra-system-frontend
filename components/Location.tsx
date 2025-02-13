/*const LocationSchema = new mongoose.Schema({
    name: String,
    description: String,
    latitude: Number,
    longitude: Number,
});
*/
const Location = ({ name, description, latitude, longitude }: { name: string; description: string; latitude: number; longitude: number }) => {
  return (
    <div class="space-y-4 backdrop-blur-sm bg-white/5 rounded-xl p-6 shadow-xl border border-white/10">
      <h2 class="text-lg font-medium text-gray-300">{name}</h2>
      <p class="text-sm text-gray-300">{description}</p>
      <div class="rounded-md overflow-hidden border border-white/10">
        <iframe 
          width="100%" 
          height="200" 
          frameBorder="0" 
          scrolling="no" 
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&hl=es&z=7&output=embed`}
          class="bg-slate-800"
        />
      </div>
    </div>
  );
};export default Location;