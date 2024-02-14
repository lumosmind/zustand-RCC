import { useEffect, useState } from "react";
import {
  CustomTitleRCC,
  customTitleRC,
  createCustomTitle,
} from "./components/custom-title/CustomTitle";

export const [TitleX, TitleXRC] = createCustomTitle({
  text: "title X",
  visible: true,
  link: "https//:x.com",
});

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isLinkActive, setIsLinkActive] = useState(false);
  const [titleXText, setTitleXText] = useState("X");

  useEffect(() => {
    customTitleRC({
      text: "başlık 1",
      visible: isHeaderVisible,
      link: isLinkActive ? "https://google.com" : undefined,
    });

    console.log("isLinksDisabled", isHeaderVisible);
  }, [isHeaderVisible, isLinkActive]);

  useEffect(() => {
    TitleXRC({ text: titleXText }); // set only which props you want, RC provides patching state
  }, [titleXText]);

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
        <br />
        <br />
        <label htmlFor="">TitleX text</label>
        <input
          type="text"
          name=""
          id=""
          value={titleXText}
          onChange={(e) => {
            setTitleXText(e.target.value);
          }}
        />
      </header>
      <main>
        <TitleX />
      </main>
      <footer>
        <CustomTitleRCC />
      </footer>
    </div>
  );
}

export default App;
