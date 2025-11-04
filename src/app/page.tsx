
export default function Home() {
  return (
    <div className="p-5 text-white min-h-screen bg-zinc-800 bg-[url(/space-universo.jpg)] bg-cover">
      <header className="m-10 text-center mb-10">
        <a href="#home" className="m-10">Home</a>
        <a href="#about" className="m-10" >About</a>
        <a href="#projetos" className="m-10">Projetos</a>
        <a href="#contato" className="m-10">Contato</a>
        <div className="mb-15"></div>
        <h1 className="text-center font-sans text-4xl mb-5">Olá, sou Lucas Bruno Calle Chambi</h1>
        <p className="text-center text-3xl">Desenvolvedor Front-End</p>
      </header>

      <main className="bg-stone-200 border-b-gray-950 p-10 rounded-lg text-black">
        <section id="#about" className="mb-20">
          <h2 className="text-2xl mb-5 text-center">Sobre Mim</h2>
          <p className="text-center">Sou um desenvolvedor front-end com experiência em criar interfaces de usuário atraentes e funcionais. Tenho paixão por tecnologia e estou sempre buscando aprender novas habilidades.</p>
          <div className="mb-20"></div>
          <h2 className="text-2xl text-center">Minhas Habilidades</h2>
          <div className="flex flex-row text-center mt-2 flex-wrap justify-center gap-2">
            <div className="basis-64">PHP</div>
            <div className="basis-64">BLADE</div>
            <div className="basis-64">TAILWINDCSS</div>
            <div className="basis-64">JAVASCRIPT</div>
            <div className="basis-64">REACTJS</div>
            <div className="basis-64">NEXTJS</div> 
          </div>
        </section>
      </main>
    </div>
  );
}
