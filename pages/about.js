import Link from 'next/link';

function About(){
    return (
        <div>
            <h2>About</h2>            
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}

export default About;
