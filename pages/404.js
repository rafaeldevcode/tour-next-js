import Link from "next/link";

export default function Page404(){
    return (
        <div>
            <h1>404 - Page not found!</h1>

            <Link href="/">
                <a>Voltar a home</a>
            </Link>
        </div>
    )
}