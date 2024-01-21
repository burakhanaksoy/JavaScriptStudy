import { useEffect, useState } from "react";

type BaseApiResponse = {
  title: string;
  body: string;
};

interface ApiResponse extends BaseApiResponse {
  id: number;
}

const MyArticle = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [page, setPage] = useState(1);

  const endpoint = `https://dummyjson.com/posts/${page}`;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setPage(page + 1);
    setData(null);
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
        return;
      });
  };
  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      {data ? (
        <article
          className="article"
          style={{
            maxWidth: "100%",
            backgroundColor: "#d3d3d3",
            opacity: 0.3,
            borderRadius: "5%",
            minHeight: "250px",
            maxHeight: "250px",
            overflow: "auto",
          }}
        >
          <h5 style={{ opacity: 1, color: "black" }}>{data.title}</h5>
          <p style={{ opacity: 1, color: "black" }}>{data.body}</p>
        </article>
      ) : (
        <div
          className="loading-div"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d3d3d3",
            opacity: 0.3,
            borderRadius: "5%",
            minHeight: "250px",
            maxHeight: "250px",
          }}
        >
          <p
            style={{
              color: "black",
            }}
          >
            loading...
          </p>
        </div>
      )}
    </>
  );
};

export default MyArticle;
