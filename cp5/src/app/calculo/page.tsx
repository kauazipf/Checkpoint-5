import React from 'react';

export default function Calculo() {
    return (
        <div className="container mx-auto p-8 m-40">
            <h1 className="text-3xl font-bold mb-4">Cálculo</h1>
            <p className="text-lg">
                Fórmula: <span className="font-mono">F = G * (m₁ * m₂) / r²</span>
            </p>
            <p className="mt-4 text-lg">
                Onde:
                <ul className="list-disc list-inside mt-2">
                    <li><strong>F</strong> é a força gravitacional entre dois corpos</li>
                    <li><strong>G</strong> é a constante gravitacional</li>
                    <li><strong>m₁</strong> e <strong>m₂</strong> são as massas dos corpos</li>
                    <li><strong>r</strong> é a distância entre os centros dos dois corpos</li>
                </ul>
            </p>
        </div>
    );
}
