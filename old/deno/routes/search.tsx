import Header from "../islands/Header.tsx";
import Footer from "../islands/Footer.tsx";
import Search from "../islands/Search.tsx";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-gradient-to-r from-slate-900 to-slate-800 min-h-screen">
      <Header/>
      <Search/>
      <Footer/>
    </div>
  );
}