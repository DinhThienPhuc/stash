import { Link, Route, Routes } from "react-router-dom";

import { BASE_NAME } from "@artemis/utils";
import NxWelcome from "./nx-welcome";
import { Switch } from "@artemis/components";
import styled from "styled-components";

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  console.log("me asass");

  return (
    <StyledApp>
      <NxWelcome title="react" />
      {BASE_NAME}
      <Switch />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{" "}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
