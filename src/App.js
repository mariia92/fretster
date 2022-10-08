import React from "react";
import HomePage from "./HomePage";
import UnterrichtPage from "./UnterrichtPage";
import "./App.css";

const App = () => {
  const navigationButtons = [
    { text: "home", hash: "" },
    { text: "unterricht", hash: "#/unterricht" },
    { text: "workshops", hash: "#/workshops" },
    { text: "lehrer", hash: "#/lehrer" },
    { text: "events", hash: "#/events" },
    { text: "kontakt", hash: "#/kontakt" },
  ];
  const getCurrentPage = () =>
    navigationButtons.findIndex((b) => b.hash === window.location.hash) || 0;
  const [currentPage, setCurrentPage] = React.useState(getCurrentPage());

  const navigationHook = (hash) => {
    window.location.href = `${window.location.href.split('#')[0]}${hash}`;
    setCurrentPage(navigationButtons.findIndex((b) => b.hash === hash))
  }

  const Pages = {
    home: HomePage,
    unterricht: UnterrichtPage,
  };
  const PageToRender = Pages[navigationButtons[currentPage]?.text] || HomePage;

  return (
    <PageToRender
      navigationButtons={navigationButtons.map((b, i) => ({
        ...b,
        isActive: i === currentPage,
      }))}
      currentPage={currentPage}
      navigationHook={navigationHook}
    />
  );
};
export default App;
