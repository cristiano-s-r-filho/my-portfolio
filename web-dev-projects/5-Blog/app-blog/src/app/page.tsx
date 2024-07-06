import { asHTML } from "@prismicio/client";
import { createClient } from "../prismicio";
import { PrismicImage } from "@prismicio/react";
import xwitter from './../../public/twitter-icon.png'
import instagram from './../../public/instagram-icon.png'
import figma from './../../public/figma-icon.png'
export default async function Home() {
  // Definindo a variavel pra carregar o conteudo: 
  const prismic = createClient()
  const homepage = await prismic.getByUID('homepage','01')
  const titulo = homepage.data.title
  const subtitulo = homepage.data.subtitle
  const texto = asHTML(homepage.data.text_content)
  const imagem = homepage.data.home_image
  return (
    <main className="flex min-h-screen flex-col items-center min-w-[320px] w-full bg-neutral-100 gap-y-24">
      <div className="flex flex-row justify-between min-w-[320px] w-full md:px-5 py-3 px-2 bg-red-700">
          <h1 className="md:text-2xl text-base font-serif font-bold text-neutral-100">Lancer MEMES</h1>
          <ul className="flex flex-row justify-between  align-middle  items-center gap-6">
            <i>
                <img src={xwitter.src}/>
            </i>
            <i>
                <img src={instagram.src}/>
            </i>
            <i>
                <img src={figma.src}/>
            </i>
          </ul>
      </div>
      <div className="flex flex-col min-w-[320px] w-full min-h-[600px] md:p-6 p-0 ">
        <div className="flex align-top bg-neutral-100 justify-center p-10 min-w-[320px] max-h-full w-full h-20 flex-col gap-2">
          <h1 className='self-center justify-center text-2xl xl:text-3xl text-red-700 font-extrabold'>{titulo}</h1>       
        </div>
        <div className=" bg-neutral-100 flex justify-center p-10 max-h-full sm:w-full w-[320] h-full min-h-full min-w-[320px] flex-col md:flex-row-reverse gap-x-20">
            <PrismicImage field={imagem} className=" flex max-w-[500px] max-h-[500px]min-w-[50px] min-h-[50px] w-full h-full rounded-3xl justify-center items-center"/>
          <div className=" flex flex-col px-10 gap-10 min-h-fit min-w-10 items-center justify-center">
            <h2 className=" w-80 font-extrabold text-center xl:text-2xl">{subtitulo}</h2> 
            <div dangerouslySetInnerHTML={{__html:texto}}  className="text-justify font-serif min-h-80 text-lg xl:text-xl xl:max-w-96 max-w-72 p-0 "/>
          </div>
        </div>
      </div>
    </main>
  );
}
