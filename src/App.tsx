import SelectInput from "./components/Form/SelectInput";
import Layout from "./components/Layout";
import Container from "./components/Layout/Container";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  return (
    <Layout>
      <Container>
        <SelectInput options={options} defaultValue={options[0]} />
      </Container>
    </Layout>
  );
}

export default App;
