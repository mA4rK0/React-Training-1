import { useState, useEffect } from "react";
import axios from "axios";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    // console.log(value);
    const filteredPosts = postsData.filter((item) => {
      return item.title.includes(value);
    });
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  // useEffect(() => {
  //   console.log("render");

  //   return () => {
  //     console.log("clean up");
  //   };
  // }, [posts]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const config = {
          headers: {
            Accept: "application/json",
          },
        };

        const res = await axios.get("https://jsonplaceholder.typicode.com/todos", config);

        setExternalPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchApi();
  }, []);

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => {
        // return <Article title={title} tags={tags} date={date} />; OR :

        return <Article {...{ title, tags, date, isNew }} key={index} />;
      })}
      <hr />
      <h2>External Posts</h2>
      {externalPosts.map((item, index) => {
        return <div key={index}>- {item.title}</div>;
      })}
    </>
  );
}

export default Homepage;
