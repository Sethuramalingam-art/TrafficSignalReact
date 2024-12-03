import "./App.css";
import Traffic from "./Traffic";

function App() {
  const states = {
    red: {
      duration: 4000,
      backgroundColor: "red",
      next: "yellow",
    },
    yellow: {
      duration: 500,
      backgroundColor: "yellow",
      next: "green",
    },
    green: {
      duration: 3000,
      backgroundColor: "green",
      next: "red",
    },
  };
  return (
    <>
      <span>Control Traffic Signal</span>
      <Traffic states={states} />
    </>
  );
}

export default App;
