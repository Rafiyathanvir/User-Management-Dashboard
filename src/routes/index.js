import { lazy } from "react";


const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));







const coreRoutes = [
  {
    path: "/home",
    component: Dashboard,
  },
  
 
  
  
];


let routes = coreRoutes;


export default routes;
