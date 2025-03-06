"use client";

import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import Link from "next/link";

export const ButtonStart = () => {
  const { isSignedIn } = useUser();
  return (
    <Button asChild size={"lg"}>
      <Link href={isSignedIn ? "/app/inbox" : "/login"}>Start for free</Link>
    </Button>
  );
};
