import { useEffect, useState } from "react";
import {
  CustomTitleRCC,
  CustomTitleRC,
} from "./components/custom-title/CustomTitle";

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isLinkActive, setIsLinkActive] = useState(false);

  useEffect(() => {
    CustomTitleRC({
      text: "başlık 1",
      visible: isHeaderVisible,
      link: isLinkActive ? "https://google.com" : undefined,
    });

    console.log("isLinksDisabled", isHeaderVisible);
  }, [isHeaderVisible, isLinkActive]);

  return (
    <div className="App">
      <header>
        <label htmlFor="">isHeaderVisible</label>
        <input
          checked={isHeaderVisible}
          type="checkbox"
          name=""
          id=""
          onChange={(e) => {
            const value = e.target.checked;
            setIsHeaderVisible(value);
          }}
        />
        <br />
        <label htmlFor="">isLinkActive</label>
        <input
          checked={isLinkActive}
          type="checkbox"
          name=""
          id=""
          onChange={(e) => {
            const value = e.target.checked;
            setIsLinkActive(value);
          }}
        />
      </header>
      <footer>
        <CustomTitleRCC />
      </footer>
    </div>
  );
}

export default App;
