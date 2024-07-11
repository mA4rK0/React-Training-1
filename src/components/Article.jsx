const ArticleStatus = ({ isNew }) => {
  return isNew && <span> -- New!</span>;
};

function Article(props) {
  //   const name = "Ohio";
  //   const arrs = ["a", "b", "c", "d"];

  //   return (
  //     <>
  //       <div>{name}</div>
  //       <div>{name}</div>
  //       <div>
  //         {arrs.map((arr) => {
  //           return (
  //             <>
  //               <div>{arr}</div>
  //               <div>{arr}</div>
  //             </>
  //           );
  //         })}
  //       </div>
  //     </>
  //   );

  return (
    <>
      {/* <div>{props.name}</div>
      <div>
        {props.titles.map((title) => {
          return (
            <>
              <div>- {title}</div>
            </>
          );
        })}
      </div> */}

      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags : {props.tags.join(", ")}
        {/* {props.isNew ? "-- New!" : ""} OR : */}
        {/* {props.isNew && " -- New!"} */}
        <ArticleStatus isNew={props.isNew} />
      </small>
      {/* <div>
        {props.titles.map((title) => {
          return (
            <>
              <div>- {title}</div>
            </>
          );
        })}
      </div> */}
    </>
  );
}

export default Article;
