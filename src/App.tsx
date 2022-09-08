import Layout from "./components/Layout";
import Container from "./components/Layout/Container";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Layout>
      <Container>
        <Homepage />
      </Container>
    </Layout>
  );
}

export default App;
