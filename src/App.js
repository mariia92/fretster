import React from "react";
import HomePage from "./HomePage";
import UnterrichtPage from "./UnterrichtPage";
import "./App.css";

const App = () => {
  const navigationButtons = [
    { text: "home", href: "/" },
    { text: "unterricht", href: "/unterricht" },
    { text: "workshops", href: "/workshops" },
    { text: "lehrer", href: "/lehrer" },
    { text: "events", href: "/events" },
    { text: "kontakt", href: "/kontakt" },
  ];
  const getCurrentPage = () =>
    navigationButtons.findIndex((b) => b.href === window.location.pathname) ||
    0;
  const [currentPage, setCurrentPage] = React.useState(getCurrentPage());

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
      navigationHook={setCurrentPage}
    />
  );
};
export default App;
