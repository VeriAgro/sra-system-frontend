import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import { Redirect_button } from "../components/Redirect_button.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-gradient-to-r from-slate-900 to-slate-800 min-h-screen">
      <Header />
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tight">
          VeriAgro
        </h1>
        <p class="my-8 text-gray-300 leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl p-6 shadow-xl border border-white/10">
          VeriAgro é uma empresa inovadora que oferece soluções integradas de
          rastreabilidade para o setor agropecuário. Utilizando tecnologias de
          blockchain e IoT, a empresa garante o registro seguro e transparente
          de cada etapa na cadeia produtiva do gado, desde o nascimento até o
          abate. Com o uso de dispositivos modernos, como RFID, chips
          implantáveis e coleiras com GPS, VeriAgro possibilita um monitoramento
          em tempo real, assegurando a conformidade com as normas sanitárias e
          facilitando a certificação para exportação. Dessa forma, a empresa
          conecta produtores, cooperativas e órgãos reguladores, promovendo
          eficiência, segurança e confiança no gerenciamento do rebanho.
        </p>
        <Redirect_button href="/search?id=67ac001d27f4da090d87e3b0">Ver demonstração</Redirect_button>
      </div>
      <Footer />
    </div>
  );
}
