import Image from "next/image";
import { heroBannerLg, heroBannerSm } from "../../public";
import { ButtonStart, Footer, Header } from "@/components";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow flex justify-center items-center">
        <section className="container p-8 grid grid-cols-1 gap-8 items-center xl:gap-12 xl:grid-cols-[1fr_1.5fr]">
          <div className="flex flex-col items-center text-center space-y-4 lg:text-left lg:items-start lg:space-y-6 gap-3">
            <h1 className="font-semibold max-w-[22ch] text-3xl lg:text-5xl">
              Simplify Your Work and Life With
              <span className="inline-flex bg-gradient-to-t from-primary/40 to-primary/0 mx-2 px-0.5 rounded ">
                AI-Powered
              </span>
              Task Management.
            </h1>
            <p className="max-w-[48ch] text-foreground/80 md:text-lg lg:text-xl">
              Simplify life for both you and your team with the world’s #1 task
              manager and to-do list app.
            </p>
            <ButtonStart />
          </div>
          <figure className="rounded-2xl overflow-hidden">
            <Image
              src={heroBannerSm}
              alt="Tasky Ai banner"
              width={480}
              height={480}
              className="max-md:block hidden w-full"
            />
            <Image
              src={heroBannerLg}
              alt="Tasky Ai banner"
              width={960}
              height={540}
              className="hidden md:block w-full "
            />
          </figure>
        </section>
      </main>
      <Footer />
    </>
  );
}
