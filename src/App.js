import Counter from "./Counter";
import Footer from "./Footer";
import Hello from "./Hello";

function App() {
  return (
    <>
      <h1>{process.env.REACT_APP_HELLO_MSG}</h1>
      <Hello />
      <Counter />
      <Footer />
    </>
  );
}

export default App;


