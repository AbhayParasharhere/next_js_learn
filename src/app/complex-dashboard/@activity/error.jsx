"use client";
import {useEffect} from "react";

export default function ErrorActivity({error}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong in activity!</h2>
    </div>
  );
}
