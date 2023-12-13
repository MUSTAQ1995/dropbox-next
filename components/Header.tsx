import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeToggler } from "./ThemeToggler";

const Header = () => {
  return (
    <header className="flex items-center justify-between" >
      <Link href="/" className="flex items-center space-x-2" >
        <div className="bg-[#0160FE] w-fit" >
          <Image
            // src="https://easypractice.net/wp-content/uploads/2020/08/Dropbox_Icon.png"
            src="https://www.shareicon.net/download/2016/07/13/606936_dropbox_2048x2048.png"
            alt="Dropbox"
            height={50}
            width={50}
            className="invert"
          // https://th.bing.com/th/id/OIP.2frIigfycYFPDtMeDHU2jgHaHa?rs=1&pid=ImgDetMain/
          />
        </div>
        <h1 className="font-bold text-xl" >Dropbox</h1>
      </Link>
      <div className="px-5 flex space-x-2 items-center" >
        <ThemeToggler/>
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  )
}

export default Header