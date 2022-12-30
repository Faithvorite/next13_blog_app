import { ArrowRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href="/">
            <h1 className="font-bold tracking-widest text-3xl">FAITH NGUYEN</h1>
            </Link>
        </div>
        <div>
            <Link
            href="https://faithnguyenart.vercel.app"
            className="text-xs px-5 py-3 font-light md:text-base text-black flex items-center rounded-full text-center"
            >
                Visit my art site
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
            </Link>
        </div>

    </header>
  )
}

export default Header