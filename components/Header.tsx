import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
            <Image
            className="rounded-full"
            src="/../public/logobrown.png"
            width={50}
            height={50}
            alt="logo"
            />
            </Link>
            <h1>FAITH NGUYEN</h1>
        </div>
        <div>
            <Link
            href="https://faithnguyenart.vercel.app"
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
            >
                Visit my art site
            </Link>
        </div>

    </header>
  )
}

export default Header