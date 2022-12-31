import Link
 from "next/link"
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/"
            className="text-white flex items-center justify-between p-5">
                <ArrowUturnLeftIcon className="h-6 w-6 text-white mr-2" />
                Go back to Website
            </Link>
            <div className="hidden md:flex p-5 rounded-lg justify-center border border-white">
                <h1 className="  text-white">
                    Check out my art page
                </h1>
                <Link
                href="https://faithnguyenart.vercel.app"
                className="text-white font-bold ml-2">
                    faithnguyenart.vercel.app       
                </Link>
            </div>
        </div>
    <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar