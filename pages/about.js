import Link from 'next/link';

function About(){
    return (
        <div>
            <h2>About</h2>
            <Contador />
            <Link href="/">
                <a>About Us</a>
            </Link>
        </div>
    )
}

export default About;
