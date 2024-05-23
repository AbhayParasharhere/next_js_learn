"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import React from "react";

const Posts = ({params}) => {
  const router = useRouter();
  return (
    <div>
      Posts
      <button onClick={() => router.push("/posts/1")}>Post 1</button>
      <button onClick={() => router.push("/register")}>Register</button>
      <button onClick={() => router.replace("/register")}>
        Register Replace
      </button>
      <button onClick={() => router.forward()}>Forward</button>
      <Link href="/posts/1"> Post 1</Link>
      <Link href="/register"> Register</Link>
    </div>
  );
};

export default Posts;
