function Wrapper(props: any) {
  console.log(props);
  return <datalist id={props.root}>{props.children}</datalist>;
}

export default Wrapper;
