import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Homepage = () => {
  return (
    <Layout pageTitle="Homepage" pageHeading="Homepage">
      <main>
        <p> We're going to fucking make it.</p>
        <StaticImage
          src="https://images.unsplash.com/photo-1643226228323-34e639efc40e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
          alt="Pizza"
        />
      </main>
    </Layout>
  );
};
export default Homepage;
