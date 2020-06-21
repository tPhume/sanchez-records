import React, { useState, useEffect } from "react";
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

    const { info, results } = getData(api, 1);
    setPages(info.pages);
    setCards([results]);

    setLoading(false);
  }, []);

  // Run when switching page
  useEffect(() => {
    setLoading(true);

    const cur = current;
    const newCards = cards;

    // If data has never been fetched before
    if (!(cur in cards)) {
      const { results } = getData(api, current);
      newCards[cur - 1] = results;
      setCards(newCards);
    }

    setLoading(false);
  }, [current]);

  return (
    <section className="flex flex-col">
      <section className="flex">
        {loading ? <h1>Loading</h1> : <h1>{cards[current]}</h1>}
      </section>
      <div>TODO: Choose page here</div>
    </section>
  );
}

export default Page;
