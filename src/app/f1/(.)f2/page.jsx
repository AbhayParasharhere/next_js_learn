import Link from "next/link";

export default function InterceptedF2() {
  return (
    <div>
      (.) Intercepted F2
      <Link href="/f1">F1</Link>
    </div>
  );
}
