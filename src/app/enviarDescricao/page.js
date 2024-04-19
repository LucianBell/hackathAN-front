export default function page() {
  return (
    <main className=" bg-white text-center">
      <h1 className=" text-3xl font-bold mx-2 pt-12">Formulário de Submissão</h1>

    <div className="">
    <div className=" flex justify-center bg-white">
    <iframe src="https://drive.google.com/file/d/1iJ9X_QxyCHUfHUy-S0CQHyP-Bz6PGc9b/preview"></iframe>
    </div>
      <form className=" align-middle py-10">
        <label for="titulo">Título:</label>
        <br />
        <input className=" rounded bg-color-gray" type="text" id="titulo" name="titulo" maxlength="60" />
        <br />

        <label for="datas">Datas:</label>
        <br />
        <input className=" rounded bg-color-gray" type="text" id="datas" name="datas" maxlength="60" />
        <br />

        <label for="content">Tags de Referência:</label>
        <br />
        <textarea className=" rounded bg-color-gray" id="content" name="content" rows="4" cols="50"></textarea>
        <br />

        <label for="content">Marcadores Sociais de Diferença:</label>
        <br />
        <textarea className=" rounded bg-color-gray" id="content" name="content" rows="4" cols="50"></textarea>
        <br />

        <button className=" p-3 mt-2 mb-[-10px] text-2xl text-white bg-color-blue rounded-lg transition-all ease-in-out duration-100 hover:bg-color-orange" type="submit">Enviar</button>
      </form>
    </div>
    </main>
  );
}
