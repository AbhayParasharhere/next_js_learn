import Link from "next/link";

export default function InterceptedF3() {
  return (
    <div>
      (..) intercepted F3
      <Link href="/f1/f4">F4</Link>
    </div>
  );
}
