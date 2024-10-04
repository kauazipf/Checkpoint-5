import Image from "next/image"

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 bg-gray-100 m-32 gap-8">
        <h2 className="text-2xl font-bold mb-4">Explore algumas coisas sobre Worlds in Collision.</h2>
        <Image src={"/images/livro.png"} alt='Livro Worlds in Collision' width={300} height={300}></Image>
        <p className="mb-8 text-gray-700 text-center font-semibold m-10">
          Aqui você irá encontrar algumas informações sobre o autor Immanuel Velikovsky e sobre seu livro Worlds in Collision.
          Navegue pela nossa pagina e descubra sobre o seu livro, sua bibliografia e uma teoria!
        </p>
    </div>
  )
}
