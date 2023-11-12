import AboutMe from "./aboutMe";
import Projects from "./projects";
import Contact from "./contact";
import ScrollSpy from "react-ui-scrollspy";
import Navbar from "./navbar";
import * as React from 'react'

const Content = () => {
  const [lastActiveNavItem, setLastActiveNavItem] = React.useState(null);

  const transitionActiveNavItem = (id) => {
    console.log(id);
    setLastActiveNavItem(id);
  };

  return (
    <div className="flex flex-row">
      <Navbar lastActiveNavItem={lastActiveNavItem} />
      <div
        className="content relative ml-48"
        style={{
          marginRight: "15%",
        }}
      >
        <ScrollSpy
          scrollThrottle={10}
          offsetTop={-600}
          onUpdateCallback={(id) => transitionActiveNavItem(id)}        >
          <AboutMe />
          <Projects />
          <Contact />
        </ScrollSpy>
      </div>
    </div>
  );
};

export default Content;
