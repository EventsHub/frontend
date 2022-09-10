import * as styles from "./styles";

import Header from "../shared/ui/header";
import Layout from "../shared/ui/layout";
import Pages from "../pages";

import CreateEvent from "../features/create-event";

const App = () => {
  return (
    <div className={styles.app}>
      <Header title="EventsHub" element={<CreateEvent />} />
      <Layout>
        <Pages />
      </Layout>
    </div>
  );
};

export default App;
