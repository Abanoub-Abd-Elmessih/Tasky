import Link from "next/link";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="w-full p-4">
      <div className="container h-16 border backdrop-blur-3xl rounded-xl flex justify-between items-center">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <SignedOut>
            <Button asChild variant={"ghost"}>
              <Link href={"/login"}>Sign In</Link>
            </Button>
            <Button asChild>
              <Link href={"/register"}>Start for free</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
