import Header from "./layout/header";
import { Layout } from "./layout/layout";
import { ContentWrap } from "./layout/content";
import PagesRouter from "./router";

export default function App() {
  return (
    <Layout>
      <Header />
      <ContentWrap>
        <PagesRouter />
      </ContentWrap>
    </Layout>
  );
}
