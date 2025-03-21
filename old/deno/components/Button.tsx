import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-3 py-2 border-cyan-400 border-2 rounded-lg bg-blue-800 text-white hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-cyan-300/50 transform hover:-translate-y-0.5"
    />
  );
}
