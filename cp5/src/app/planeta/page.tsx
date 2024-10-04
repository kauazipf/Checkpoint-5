import React from 'react';
import Image from "next/image"

export default function Venus() {
    return (
        <div className="container mx-auto p-8 flex flex-col items-center justify-center max-h-screen gap-24 m-12">
            <h1 className="text-4xl font-bold mb-4 text-center">Teoria do Nascimento de Venus</h1>

            <Image src={"/images/venus.png"} alt='Venus' width={330} height={330}></Image>
            <p className="text-lg leading-relaxed text-center">
                Velikovsky acreditava que Vênus era um cometa que se separou de Júpiter e passou perto de outros objetos no Sistema Solar. Ele sugeriu que os gases quentes do cometa causaram as 10 pragas do Egito Antigo.

            </p>

        </div>
    );
}