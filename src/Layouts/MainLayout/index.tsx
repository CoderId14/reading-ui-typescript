import React from "react";
import { Children } from "react";
import Header from "../../components/Header";

interface MainLayoutProps {
  children: JSX.Element;
}

function MainLayout(props: MainLayoutProps) {
  console.log(props);
  return (
    <div className="container">
      MainLayout
      <Header></Header>
      {props.children}
    </div>
  );
}

export default MainLayout;
