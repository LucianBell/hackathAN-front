import Image from "next/image";
import { CiUser } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaFlickr, FaYoutube, FaTiktok } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Home() {
  return (
    <main  className="flex flex-col items-center justify-between bg-white">

      <section className=" flex mt-12 px-12">
        <img src="../../images/main.png" className=" rounded-xl "/>

        <div className=" mx-7">
          <h1 className=" text-3xl font-bold">
            Bem-vindo ao <span className=" text-color-orange">Programa Patrimônio Compartilhado</span> do Arquivo Nacional.
          </h1>
          <p className=" text-lg my-5">
            Você pode nos ajudar contribuindo com <span className=" text-color-orange font-bold">marcadores de gênero, raça e
            regionalismo</span>, visando melhorar o acesso e a capacidade de descoberta
            de mais pessoas. Ajude a descrever documentos históricos, marque
            fotografias do arquivo ou compartilhe comentários com outros membros
            da comunidade. Junte-se a nós, seja um Arquivista Cidadão do AN!
          </p>
          <p className=" text-lg mb-10">
            Cada contribuição que você faz <span className=" text-color-orange font-bold">ajuda a democratizar nossa história.</span>
          </p>
          <a className=" p-3 text-2xl text-white bg-color-blue rounded-lg transition-all ease-in-out duration-100 hover:bg-color-orange" href="">Contribua hoje!</a>
        </div>
      </section>

      <section className=" mt-12 px-12 items-center">
        <h2 className=" text-3xl uppercase">
          confira nossas redes sociais!
        </h2>

        <div className=" items-center grid grid-cols-3">
          <div>
            <FaFacebook className=" text-4xl"/>
          </div>

          <div>
            <RiTwitterXLine className=" text-4xl"/>
          </div>

          <div>
            <FaInstagram className=" text-4xl"/>
          </div>

          <div>
            <FaFlickr className=" text-4xl"/>
          </div>

          <div>
            <FaYoutube className=" text-4xl"/>
          </div>

          <div>
            <FaTiktok className=" text-4xl"/>
          </div>
        </div>
      </section>
    </main>
  );
}
