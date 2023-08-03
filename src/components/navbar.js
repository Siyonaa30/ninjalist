import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo"> 
                <Image src='/logo.png' width={128} height={77} alt=''/>
            </div>
            <Link className='mx-2' href="/">Home</Link>
            <Link className='mx-2' href="/about">About</Link>
            <Link className='mx-2' href="/ninjas">Ninja Listing</Link>
        </nav>
     );
}
 
export default Navbar;