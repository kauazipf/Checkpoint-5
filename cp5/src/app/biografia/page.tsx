import React from 'react';
import Image from "next/image"

export default function Biografia() {
    return (
        <div className="container mx-auto p-8 flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold mb-4 text-center">Immanuel Velikovsky</h1>

            <Image className='w-64 h-auto mb-6' src={"/images/immanuel.png"} alt='Immanuel Velikovsky' width={580} height={580}></Image>
            <p className="text-lg leading-relaxed text-center">
                Immanuel Velikovsky (em russo: Иммануил Великовский; 10 de junho de 1859 - 17 de novembro de 1979) foi um psiquiatra russo-judeu, mais conhecido como o autor de uma série de livros controversos que reinterpretam acontecimentos da história antiga, em particular o livro Mundos em Colisão, publicado em 1950. Antes disso, ele participou da fundação da Universidade Hebraica de Jerusalém em Israel e foi um psiquiatra e psicanalista.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-center">
                Seus livros usam mitologia comparada e fontes literárias arcaicas (incluindo o Antigo Testamento) para alegar que a Terra sofreu aproximações catastróficas com outros planetas (principalmente Vênus e Marte) em tempos passados. Ao posicionar Velikovsky entre catastrofistas como Hans Bellamy, Ignatius Donnely e Johan Gottlieb Radlof, os astrônomos britânicos Victor Clube e Bill Napier apontaram que "... Velikovsky não é tanto o primeiro dos novos catastrofistas ..., ele é o último de uma linhagem de catastrofistas tradicionais que remonta aos tempos medievais, e provavelmente antes". Velikovsky alegava que os efeitos eletromagnéticos têm um papel importante na mecânica celestial. Ele propôs também uma revisão da cronologia do Antigo Egito, Grécia, Israel e outras culturas do Oriente Próximo antigo. A cronologia revisada buscava explicar a assim chamada "idade das trevas" do leste do Mediterrâneo (c. 1100-750 AEC) e reconciliar a história bíblica com a arqueologia acadêmica e a cronologia egípcia.
            </p>
            <p className="text-lg leading-relaxed mt-4 text-center">
                Em geral as teorias de Velikovsky são ignoradas ou duramente rejeitadas pela comunidade científica. Mesmo assim, seus livros vendem bem e tem o apoio entusiástico entre os leigos, geralmente acompanhados de alegações de tratamento injusto pela academia ortodoxa. A controvérsia cercando seu trabalho e a sua recepção é normalmente referida como "O caso Velikovsky". O trabalho de Velikovsky é mencionado frequentemente como um exemplo canônico de pseudociência e também é usado como exemplo do problema da demarcação.
            </p>
        </div>
    );
}
