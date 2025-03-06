import { SignUp } from "@clerk/nextjs";

export default function Register() {
  return (
    <section>
      <div className="container flex justify-center">
        <SignUp signInUrl="/login" />
      </div>
    </section>
  );
}
