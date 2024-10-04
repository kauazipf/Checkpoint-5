import Link from "next/link";

export default function Menu() {
    return (
        <nav>
            <ul>
                <li> <Link href="/">Home</Link> </li>
                <li> <Link href="/biografia">Biografia</Link> </li>
                <li> <Link href="/livro">Livro</Link></li>
                <li> <Link href="/calculo">Calculo</Link> </li>
                <li> <Link href="/planeta">Teoria do Nascimento de Venus</Link></li>
            </ul>
        </nav>
    )
}