// import { useState } from 'react'
import reactLogo from "./../assets/debezium_logo.png";
// import viteLogo from '/vite.svg'
// import './App.css'
import "@patternfly/react-core/dist/styles/base.css";
import { BarsIcon } from "@patternfly/react-icons";
import {
  Brand,
  Button,
  Masthead,
  MastheadBrand,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavExpandable,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
} from "@patternfly/react-core";
import { useState } from "react";
import { IAppRoute, IAppRouteGroup, routes } from "../route";
import { NavLink, useLocation } from "react-router-dom";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const location = useLocation();
  // const [count, setCount] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const pageId = "primary-app-container";

  const renderNavItem = (route: IAppRoute, index: number) => (
    <NavItem
      key={`${route.label}-${index}`}
      id={`${route.label}-${index}`}
      isActive={route.path === location.pathname}
    >
      <NavLink to={route.path}>{route.label}</NavLink>
    </NavItem>
  );

  // const renderNavItem = (route: string, index: number) => (
  //   <NavItem
  //     key={`${route}-${index}`}
  //     id={`${route}-${index}`}
  //     isActive={route === "Home"}
  //   >
  //     {route}
  //   </NavItem>
  // );

  const renderNavGroup = (group: IAppRouteGroup, groupIndex: number) => (
    <NavExpandable
      key={`${group.label}-${groupIndex}`}
      id={`${group.label}-${groupIndex}`}
      title={group.label}
      isActive={group.routes.some((route) => route.path === location.pathname)}
    >
      {group.routes.map(
        (route, idx) => route.label && renderNavItem(route, idx)
      )}
    </NavExpandable>
  );

  // const Navigation = (
  //   <Nav id="nav-primary-simple" theme="dark">
  //     <NavList id="nav-list-simple">
  //       {["Home", "Source", "Sink"].map((route, idx) =>
  //         renderNavItem(route, idx)
  //       )}
  //     </NavList>
  //   </Nav>
  // );

  const Navigation = (
    <Nav id="nav-primary-simple" theme="dark">
      <NavList id="nav-list-simple">
        {routes.map(
          (route, idx) =>
            route.label &&
            (!route.routes
              ? renderNavItem(route, idx)
              : renderNavGroup(route, idx))
        )}
      </NavList>
    </Nav>
  );

  const Header = (
    <Masthead>
      <MastheadToggle>
        <Button
          variant="plain"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Global navigation"
        >
          <BarsIcon />
        </Button>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand>
          <Brand
            src={reactLogo}
            alt="Patterfly Logo"
            heights={{ default: "30px" }}
          />
        </MastheadBrand>
      </MastheadMain>
    </Masthead>
  );

  const Sidebar = (
    <PageSidebar theme="dark">
      <PageSidebarBody>{Navigation}</PageSidebarBody>
    </PageSidebar>
  );

  const PageSkipToContent = (
    <SkipToContent
      onClick={(event) => {
        event.preventDefault();
        const primaryContentContainer = document.getElementById(pageId);
        primaryContentContainer && primaryContentContainer.focus();
      }}
      href={`#${pageId}`}
    >
      Skip to Content
    </SkipToContent>
  );

  return (
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React + Debezium</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <Button variant="primary" ouiaId="Primary">
    //   Primary
    // </Button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>

    <Page
      mainContainerId={pageId}
      header={Header}
      sidebar={sidebarOpen && Sidebar}
      skipToContent={PageSkipToContent}
    >
      {children}
    </Page>
  );
};

export { AppLayout };
