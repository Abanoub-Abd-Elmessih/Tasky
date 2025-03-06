import { Footer, Header } from "@/components";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="grow flex flex-col justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
