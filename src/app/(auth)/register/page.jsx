"use client";
import {useRouter} from "next/navigation";

export default function Register() {
  const router = useRouter();
  return (
    <div>
      Register
      <button onClick={() => router.back()}>BACK</button>
    </div>
  );
}
