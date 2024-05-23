export const generateMetadata = ({params}) => {
  return {title: `Post ${params.postId}`};
};

export default function SpecificPost() {
  return <div>Specific POST</div>;
}
