import "./App.css";
import Header from "./components/Header/Header";
import Jobs from "./components/Jobs/Jobs";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="">
        <Jobs></Jobs>
      </div>
    </div>
  );
}

export default App;
