import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import MainLayout from "../Layouts/MainLayout/index";

const publicRoutes = [
  { path: "/", component: Home, layout: MainLayout },
  { path: "/following", component: Following, layout: null },
  { path: "/upload", component: Upload, layout: null },
];

const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
