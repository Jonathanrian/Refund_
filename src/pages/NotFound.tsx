export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10 ">
          Op`s! Essa página não existe.😢😢
        </h1>

        <p className="mb-8 text-center">
          Você pode voltar para a página anterior ou entrar em contato conosco
          para obter mais infomações!
        </p>

        <a
          href="/"
          className=" font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
}
