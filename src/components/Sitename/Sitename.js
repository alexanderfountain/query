import React from "react";
import { StaticQuery, graphql } from "gatsby";
const Sitename = ({ data }) => (
  <header>
    <h1>{data.site.siteMetadata.title}</h1>
  </header>
);
export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Sitename data={data} {...props} />}
  />
);
