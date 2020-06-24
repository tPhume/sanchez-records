import React, { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import getData from "../../services/api/rest/index";

function Page({ api }) {
  // Contains number of pages
  const [pages, setPages] = useState(-1);

  // Contains the user current page
  const [current, setCurrent] = useState(1);

  // Contains the array of all loaded data for each page
  const [cards, setCards] = useState([]);

  // Indicate fetching of data
  const [loading, setLoading] = useState(true);

  // Get info once on init
  useEffect(() => {
    setLoading(true);

    getData(api, 1)
      .then((res) => {
        const { info, results } = res.data;

        setPages(info.pages);
        setCards([results]);
        setLoading(false);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  // Run when switching page
  useEffect(() => {
    setLoading(true);

    const cur = current;
    const newCards = cards;

    // If data has never been fetched before
    if (!(cur - 1 in cards)) {
      getData(api, cur)
        .then((res) => {
          const { results } = res.data;
          newCards[cur - 1] = results;
          setCards(newCards);
          setLoading(false);
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    } else if (cur - 1 in cards) {
      setLoading(false);
    }
  }, [current]);

  return (
    <section className="flex flex-col max-h-full pl-4 pr-4 w-10/12">
      <section className="flex max-h-full overflow-auto">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <h1>{JSON.stringify(cards[current - 1])}</h1>
        )}
      </section>
      <Pagination
        totalPages={pages}
        current={current}
        setCurrent={setCurrent}
      />
    </section>
  );
}

export default Page;
