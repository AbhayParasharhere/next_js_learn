import Card from "@/components/card";
import Link from "next/link";

const waithalfSecond = () => {
  throwErrorRandomly();
  return new Promise((resolve) => setTimeout(resolve, 500));
};

const throwErrorRandomly = () => {
  if (Math.random() > 0.8) {
    throw new Error("Random error occurred");
  }
};

export default async function ActivityLog() {
  await waithalfSecond();
  return (
    <Card>
      ActivityLog
      <Link href="/complex-dashboard/archived">Archived </Link>
    </Card>
  );
}
