import { ReactElement } from "react";

export default function LayoutMenu(props: { children: ReactElement }) {
  const { children } = props;
  return (
    <>
      <div className="App">
        <h1>Test plugin for tienda nube</h1>
        <div className="container">
          <h2>
            List of orders
            <li></li>
          </h2>
        </div>
      </div>
      {children}
    </>
  );
}
