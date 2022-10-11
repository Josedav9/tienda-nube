//Load pages
import Orders from "../pages/Orders";
//Layouts
import LayoutMenu from "../layouts/LayoutMenu";

const routes = [
  {
    path: "/",
    layout: LayoutMenu,
    component: Orders,
  },
  {
    //404
    path: "/*",
    layout: LayoutMenu,
    component: Orders,
  },
];

export default routes;
