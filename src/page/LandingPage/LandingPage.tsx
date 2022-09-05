import * as React from "react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <>
      <div>Landing page hello</div>
      <Link to={"/auth"}>Go to Auth page</Link>
      <Link to={"/protected"}>Go to private page</Link>
    </>
  );
};
