import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import Form from "../islands/Form.tsx";


export default function Home() {
  const exampleSchema = {
    name: {
      type: "text",
      label: "Nome do local",
      required: true,
    },
    description: {
      type: "text",
      label: "Descrição",
      required: true,
    },
    latitude: {
      type: "number",
      label: "Latitude",
      required: true,
    },
    longitude: {
      type: "number",
      label: "Longitude",
      required: true,
    },
  };
  const handleFormSubmit = () => {
    console.log("Form submitted!");
  };

  return (
    <div class="px-4 py-8 mx-auto bg-gradient-to-r from-slate-900 to-slate-800 min-h-screen">
      <Header />
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <div class="w-full max-w-md p-6 backdrop-blur-sm bg-white/5 rounded-xl shadow-xl border border-white/10">
          <h2 class="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Cadastrar local
          </h2>
          <Form
            schema={exampleSchema}
            endpoint="location"
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
