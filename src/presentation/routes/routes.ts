//Load pages
import Store from "../pages/Store";
//Layouts
import LayoutMenu from "../layouts/LayoutMenu";

const routes = [
  {
    path: "/",
    layout: LayoutMenu,
    component: Store,
  },
  {
    //404
    path: "/*",
    layout: LayoutMenu,
    component: Store,
  },
];

export default routes;
