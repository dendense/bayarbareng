import Head from "next/head";
import PropTypes from "prop-types";

import Navbar from "../components/parts/Nav";

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <title>{title} | BayarBareng</title>
      <link rel="icon" href="/favicon.ico" />
      {/* Bootstrap CSS */}
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      {/* Google Analytics & Webmastertools Here */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
                <code snippet goes here>
              `,
        }}
      />
      {/* Bootstrap JS */}
      <script src="js/boostrap.min.js"></script>
    </Head>
    <Navbar />
    <div>{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
