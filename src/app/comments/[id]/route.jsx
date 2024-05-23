import {redirect} from "next/navigation";
import {comments} from "../data";

export async function GET(request, context) {
  const params = context.params;
  const id = params.id;
  if (parseInt(id) > comments.length) {
    redirect("/comments");
  }

  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}

export async function PATCH(request, {params}) {
  const id = params.id;
  const body = await request.json();
  const {name, email} = body;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index].email = email;
  comments[index].name = name;
  return Response.json(comments[index]);
}

export async function DELETE(request, {params}) {
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(params.id)
  );
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json({
    message: "Comment deleted successfully",
    deletedComment,
  });
}
