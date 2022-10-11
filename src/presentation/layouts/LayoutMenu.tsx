import { ReactElement } from "react";

export default function LayoutMenu(props: { children: ReactElement }) {
  const { children } = props;
  return (
    <>
      <div className="App">
        <div className="container">{children}</div>
      </div>
    </>
  );
}
