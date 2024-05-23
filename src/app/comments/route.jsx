import {comments} from "./data";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.name.includes(query))
    : comments;
  return Response.json(filteredComments);
}

export async function POST(request) {
  // Extract the comment from the request
  const comment = await request.json();
  const newComment = {
    id: comments?.length + 1,
    name: comment?.name,
    email: comment?.email,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
