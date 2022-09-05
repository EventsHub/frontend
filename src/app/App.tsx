import Header from "../shared/ui/header";
import Layout from "../shared/ui/layout";
import Pages from "../pages";

import * as styles from "./styles";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Layout>
        <Pages />
      </Layout>
    </div>
  );
};

export default App;
