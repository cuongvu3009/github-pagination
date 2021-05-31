import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

function App() {
  const { loading, data } = useFetch();
  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);

  function handelPage(index) {
    setPage(index);
  }

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? "loading..." : "paginition"}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>

        {!loading && (
          <div className='btn-container'>
            {data.map((item, index) => {
              return (
                <button
                  className={`page-btn ${index === page ? "active-btn" : null}`}
                  key={index}
                  onClick={() => handelPage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
