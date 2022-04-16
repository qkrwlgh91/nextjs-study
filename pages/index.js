import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <h1>The Home Page</h1>
            <ul>
            <li>
                    <a href="/portfolio">a tag - Portfolio</a>
                </li>
                <li>
                    <Link replace href="/portfolio">link component - Portfolio</Link>
                </li>
                <li>
                    <Link href="/clients">link component - Clients</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage;