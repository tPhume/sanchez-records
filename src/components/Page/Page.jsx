import React, { useState, useEffect } from "react";

function Page({ api }) {
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(1);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const cur = current;
    const curCards = cards;

    // If data has never been fetched before
    let data;
    if (!(cur in curCards)) {
      data = api.getData(current);
      curCards[cur] = data;
      setCards();
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
