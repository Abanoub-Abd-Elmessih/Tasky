import { SignIn } from "@clerk/nextjs";

export default function Login() {
  return (
    <section>
      <div className="container flex justify-center">
        <SignIn />
      </div>
    </section>
  );
}
