import "./App.css";
import {
  Hero,
  Auction,
  Collections,
  Creators,
  Footer,
  Resources,
} from "./components";
function App() {
  return (
    <div className="App">
      <div className="bg-[#0C0043] w-full">
        <Hero />
        <Auction />
        <Collections />
        <Creators />
        <Resources />
        <Footer />
      </div>
    </div>
  );
}

export default App;
