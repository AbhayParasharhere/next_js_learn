import {notFound} from "next/navigation";
import React from "react";

const Posts = ({params}) => {
  console.log(params);
  if (!params.length > 0) {
    notFound();
  }
  return <div>Posts</div>;
};

export default Posts;
