import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import Hello from "./Hello";

function App() {
  console.log(process.env.REACT_APP_HELLO_MSG);
  return (
    <>
      <Header />

      <h1 className="text-center">{process.env.REACT_APP_HELLO_MSG}</h1>
      <Hello />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
