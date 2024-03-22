import React from "react";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Source } from "./pages/Source/Source";
import { Sink } from "./pages/Sink/Sink";
import { AppBranding } from "./utils/constants";

export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  component: React.ComponentType<any>;
  path: string;
  title: string;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    component: Dashboard,
    label: "Pipeline",
    path: "/",
    title: `${AppBranding} | Pipeline`,
  },
  {
    component: Source,
    label: "Source",
    path: "/source",
    title: `${AppBranding} | Source`,
  },
  {
    component: Sink,
    label: "Sink",
    path: "/sink",
    title: `${AppBranding} | Sink`,
  },
];

export { routes };
