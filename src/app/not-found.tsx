import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { pageNotFound } from "../../public";

export default function NotFound() {
  return (
    <div className="grow container justify-center items-center flex flex-col">
      <h1 className="text-2xl font-semibold text-center sm:text-4xl">Hmmm, that page doesn’t exist.</h1>
      <p className="text-muted-foreground max-w-[55ch] text-center mt-4 mb-6 sm:text-lg">You can get back on track and manage your tasks with ease.</p>
      <div className="flex gap-2">
        <Button asChild>
          <Link href={"/"}>Return to Home</Link>
        </Button>
        <Button asChild variant={"ghost"}>
          <Link href={"app/inbox"}>View inbox</Link>
        </Button>
      </div>
      <figure className="mt-10">
        <Image src={pageNotFound} alt="not found page" width={560} height={373} />
      </figure>
    </div>
  );
}
