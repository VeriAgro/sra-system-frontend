import { useSignal } from "@preact/signals";
import { JSX } from "preact";
import { Button } from "../components/Button.tsx";
import { Alert } from "../components/Alert.tsx";

interface FormProps {
  schema: Record<string, {
    type: string;
    label: string;
    required?: boolean;
    options?: string[];
  }>;
  endpoint: string;
  onSubmit: (data: Record<string, string>) => void;
}

export default function Form({ schema, endpoint, onSubmit }: FormProps) {
  const formData = useSignal<Record<string, string>>({});
  const alertData = useSignal<{ type: "success" | "failure" | "warning", message: string }>({ type: "success", message: "" });

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://sra-system-backend-999646529726.us-central1.run.app//${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.value),
      });
      if (response.ok) {
        const data = await response.json();
        alertData.value = { type: "success", message: `Item criado com sucesso: ${data._id}` };
        if (typeof onSubmit === 'function') {
          onSubmit(formData.value);
        }
      }
    } catch (_error) {
      alertData.value = { type: "failure", message: "Erro ao cadastrar item" };
    }
  };

  const handleInput = (field: string, value: string) => {
    formData.value = { ...formData.value, [field]: value };
    console.log('Field updated:', field, 'Value:', value);
  };

  return (
    
    <form onSubmit={handleSubmit} class="space-y-6 backdrop-blur-sm bg-white/5 rounded-xl p-6 shadow-xl border border-white/10">
        <Alert type={alertData.value.type} message={alertData.value.message}/>
      {Object.entries(schema).map(([field, config]) => (
        field !== 'endpoint' && (
        <div key={field} class="flex flex-col">
          <label class="text-sm font-medium mb-2 text-gray-300">
            {config.label}
            {config.required && <span class="text-cyan-400">*</span>}
          </label>
          {config.type === "select" && config.options ? (
            <select
              name={field}
              required={config.required}
              onChange={(e) => handleInput(field, e.currentTarget.value)}
              class="bg-slate-800 border border-white/10 rounded-md px-4 py-2 text-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            >
              <option value="">Select an option</option>
              {config.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={config.type}
              name={field}
              required={config.required}
              onChange={(e) => handleInput(field, e.currentTarget.value)}
              class="bg-slate-800 border border-white/10 rounded-md px-4 py-2 text-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 outline-none"
            />
          )}
        </div>
        )
      ))}
      <Button type="submit">
        Enviar
      </Button>
    </form>
  );
}