import React from "react";
import { Fragment } from "react";
interface EmptyLayoutProps {
  children: JSX.Element;
}

function EmptyLayout(props: EmptyLayoutProps) {
  return <Fragment>{props.children}</Fragment>;
}

export default EmptyLayout;
