import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul className="lista">
                <li className="link"> <Link href="/">Home</Link> </li>
                <li className="link"> <Link href="/biografia">Biografia</Link> </li>
                <li className="link"> <Link href="/livro">Livro</Link></li>
                <li className="link"> <Link href="/calculo">Calculo</Link> </li>
                <li className="link"> <Link href="/planeta">Venus</Link></li>
            </ul>
        </nav>
    )
}