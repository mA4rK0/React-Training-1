// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function SinglePost() {
  //   const params = useParams();
  //   const [post, setPost] = useState(null);

  //   useEffect(() => {
  //     const fetchApi = async () => {
  //       try {
  //         const config = {
  //           headers: {
  //             Accept: "application/json",
  //           },
  //         };

  //         const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.id}`, config);

  //         setPost(res.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchApi();
  //   }, []);

  const post = useLoaderData();

  return (
    <>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
}

export default SinglePost;
