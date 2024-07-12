import { useEffect, useState } from "react";
import axios from "axios";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const config = {
          headers: {
            Accept: "application/json",
          },
        };

        const res = await axios.get("https://jsonplaceholder.typicode.com/todos", config);

        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      <h2>My Blog Posts</h2>
      {posts.map((item, index) => {
        return <div key={index}>- {item.title}</div>;
      })}
    </>
  );
}

export default Blog;
