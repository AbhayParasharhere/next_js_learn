import Card from "@/components/card";

const waithalfSecond = () => {
  throwErrorRandomly();
  return new Promise((resolve) => setTimeout(resolve, 500));
};

const throwErrorRandomly = () => {
  if (Math.random() > 0.5) {
    throw new Error("Random error occurred");
  }
};

export default async function ActivityLog() {
  await waithalfSecond();
  return <Card>ActivityLog</Card>;
}
