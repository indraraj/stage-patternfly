import React from "react";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { NotFound } from "./pages/NotFound/NotFound";
import { Source } from "./pages/Source/Source";
import { useDocumentTitle } from "./utils/useDocumentTitle";
import { Sink } from "./pages/Sink/Sink";

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  component: React.ComponentType<any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */

  path: string;
  title: string;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;
// export type AppRouteConfig = IAppRoute ;

const routes: AppRouteConfig[] = [
  {
    component: Dashboard,
    label: "Home",
    path: "/",
    title: "Debezium | Connector List",
  },
  {
    component: Source,
    label: "Source",
    path: "/source",
    title: "Debezium | Create connector",
  },
  {
    component: Sink,
    label: "Sink",
    path: "/sink",
    title: "Debezium | Create connector",
  },
];

const PageWithTitle = ({ title }: { title: string }) => {
  useDocumentTitle(title);
  return <NotFound />;
};

const AppRoutes = (): React.ReactElement => (
  <Routes>
    {(routes as IAppRoute[]).map((route, index) => (
      <Route
        key={route.label || index}
        path={route.path}
        element={<route.component />}
      />
    ))}
    <Route path="*" element={<PageWithTitle title="404 Page Not Found" />} />

    {/* <Route path="/" element={<Dashboard />} />
    <Route path="/support" element={<Support />} /> */}
  </Routes>
);

export { AppRoutes, routes };
