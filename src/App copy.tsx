// import { useState } from 'react'
import reactLogo from "./assets/debezium_logo.png";
// import viteLogo from '/vite.svg'
// import './App.css'
import "@patternfly/react-core/dist/styles/base.css";
import { BarsIcon, CubesIcon } from "@patternfly/react-icons";
import {
  Brand,
  Button,
  EmptyState,
  EmptyStateActions,
  EmptyStateBody,
  EmptyStateFooter,
  EmptyStateHeader,
  EmptyStateIcon,
  EmptyStateVariant,
  Masthead,
  MastheadBrand,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSection,
  PageSidebar,
  PageSidebarBody,
  SkipToContent,
} from "@patternfly/react-core";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const pageId = "primary-app-container";

  const renderNavItem = (route: string, index: number) => (
    <NavItem
      key={`${route}-${index}`}
      id={`${route}-${index}`}
      isActive={route === "Home"}
    >
      {route}
    </NavItem>
  );

  const Navigation = (
    <Nav id="nav-primary-simple" theme="dark">
      <NavList id="nav-list-simple">
        {["Home", "Source", "Sink"].map((route, idx) =>
          renderNavItem(route, idx)
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
      <PageSection>
        <EmptyState variant={EmptyStateVariant.lg}>
          <EmptyStateHeader
            titleText="Empty state"
            headingLevel="h4"
            icon={<EmptyStateIcon icon={CubesIcon} />}
          />
          <EmptyStateBody>
            This represents the empty state pattern in PatternFly. Hopefully
            it's simple enough to use but flexible enough to meet a variety of
            needs.
          </EmptyStateBody>
          <EmptyStateFooter>
            <EmptyStateActions>
              <Button variant="primary">Primary action</Button>
            </EmptyStateActions>
            <EmptyStateActions>
              <Button variant="link">Multiple</Button>
              <Button variant="link">Action Buttons</Button>
              <Button variant="link">Can</Button>
              <Button variant="link">Go here</Button>
              <Button variant="link">In the secondary</Button>
              <Button variant="link">Action area</Button>
            </EmptyStateActions>
          </EmptyStateFooter>
        </EmptyState>
      </PageSection>
    </Page>
  );
}

export default App;
