import './header.css'
import Link from "next/link";

export default function Header() {
    return (
        <header className="header">
            <Link href={`/`} passHref>
                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="60" viewBox="0 0 200 60">
                        <text x="10" y="45" font-family="Arial, Helvetica, sans-serif" font-size="40" fill="green">
                            VidMarkt
                        </text>
                    </svg>
                </div>
            </Link>
            <div className="search-bar">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="auth-buttons">
                <button className="sign-up">Sign up</button>
                <button className="log-in">Log in</button>
            </div>
        </header>
    );
}