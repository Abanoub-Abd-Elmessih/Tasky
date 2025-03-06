import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <section className="container flex justify-center">
      <SignUp signInUrl="/login" />
    </section>
  );
}
