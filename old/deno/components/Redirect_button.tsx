import { JSX } from "preact";
export function Redirect_button(props: JSX.HTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      class="px-3 py-2 border-cyan-400 border-2 rounded-lg bg-blue-800 text-white hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-cyan-300/50 transform hover:-translate-y-0.5 inline-block text-center no-underline"
    />
  );
}