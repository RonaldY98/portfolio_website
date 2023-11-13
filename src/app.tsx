import * as React from "react";
import Content from "./components/content";
import Footer from "./components/footer";
import Jupiter_Juno from 'assets/images/Jupiter_Juno.jpg'
import Title from "./components/title";

const Main = () => {
  return (
    <div className="relative bg-black">
      <img
        className="bg-image top-0 left-0 fixed w-full h-auto"
        src={Jupiter_Juno}
        alt="background image"
      ></img>
      <div className="content relative">
        <Title />
        <Content />
        <Footer />
      </div>
    </div>
  );
};

export default Main;
