import { useEffect } from "react";

import Grid from "../../shared/ui/grid";
import Card from "../../shared/ui/card";
import Empty from "../../shared/ui/empty";

import useCardStore from "../../stores/cardStore";

const Home = () => {
  const fetchData = useCardStore((state) => state.getCards);
  const events = useCardStore((state) => state.cards);

  useEffect(() => {
    fetchData();
  }, []);

  if (events.length === 0)
    return <Empty src="/images/empty.svg" label="No events found..." />;
  return (
    <Grid>
      {events &&
        events.map((item) => (
          <Card
            img={item.urlImage}
            title={item.title}
            location={item.address}
          />
        ))}
    </Grid>
  );
};

export default Home;
