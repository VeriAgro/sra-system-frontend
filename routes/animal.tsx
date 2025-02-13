import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import Form from "../islands/Form.tsx";

export default function Home() {
  const exampleSchema = {
    name: {
      type: "text",
      label: "Nome do animal",
      required: true,
    },
    description: {
      type: "text",
      label: "Descrição",
      required: true,
    },
    birth: {
      type: "date",
      label: "Data de nascimento",
      required: true,
    },
    sex: {
      type: "text",
      label: "Sexo",
      required: true,
    },
    breed: {
      type: "text",
      label: "Raça",
      required: true,
    },
    color: {
      type: "text",
      label: "Cor",
      required: true,
    },
    weight: {
      type: "number",
      label: "Peso",
      required: true,
    },
    height: {
      type: "number",
      label: "Altura",
      required: true,
    },
    location: {
      type: "text",
      label: "Localização",
      required: true,
    }
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
            Cadastrar Animal
          </h2>
          <Form
            schema={exampleSchema}
            endpoint="animal"
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}