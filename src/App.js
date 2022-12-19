import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CombinePage from "./Component/combinePage/CombinePage";
function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="App">
      <CombinePage></CombinePage>
    </div>
  );
}

export default App;
