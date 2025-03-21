import { Redirect_button } from "../components/Redirect_button.tsx";

export default function Header() {
  return (
    <header class="flex gap-4 py-4 px-6 bg-black-100">
      <nav class="flex gap-4">
        <Redirect_button href="/">Início</Redirect_button>
        <Redirect_button href="/animal">Cadastrar animal</Redirect_button>
        <Redirect_button href="/event">Cadastrar evento</Redirect_button>
        <Redirect_button href="/location">Cadastrar local</Redirect_button>
        <Redirect_button href="/search">Pesquisar animal</Redirect_button>
      </nav>
    </header>
  );
}
