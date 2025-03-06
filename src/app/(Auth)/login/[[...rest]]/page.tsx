import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <section className="container flex justify-center">
      <SignIn />
    </section>
  );
}
