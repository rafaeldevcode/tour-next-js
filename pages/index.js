import Link from "next/link";

export default function Home(){
    return (
        <div>
            <h1>Welcome to Next JS</h1>

            <img src="/images/avatar.jpeg" alt="RafaelDevCode"></img>

            <ul>
                <li>
                    <Link href="/sobre">
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}