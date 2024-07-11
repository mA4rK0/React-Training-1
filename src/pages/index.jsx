import { useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) => {
      return item.title.includes(value);
    });
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map(({ title, tags, date, isNew }, index) => {
        // return <Article title={title} tags={tags} date={date} />; OR :

        return <Article {...{ title, tags, date, isNew }} key={index} />;
      })}
    </>
  );
}

export default Homepage;
