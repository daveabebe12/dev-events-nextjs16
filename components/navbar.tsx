import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-6">
        <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>DevEvent</p>
        </Link>
      </nav>
      
      <ul className="nav-links list-none gap-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">Events</Link></li>
        <li><Link href="/">CreateEvent</Link></li>
      </ul>
    </header>
  )
}

export default Navbar