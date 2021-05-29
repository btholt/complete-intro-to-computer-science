import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "../components/TOCCard";

import "./index.css";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
          }
        }
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              id
              frontmatter {
                order
                path
                title
                section
                description
              }
            }
          }
        }
      }
    `}
    render={(props) => (
      <div className="index">
        <div className="jumbotron">
          <div className="courseInfo">
            <h1>{props.site.siteMetadata.title}</h1>
            <div className="author">
              <div className="image">
                <img className="image" src="author.jpg" />
              </div>
              <div className="info">
                <div className="name">Brian Holt</div>
                <div className="company">Microsoft</div>
              </div>
            </div>
          </div>
          <div className="courseIcon">
            <img src="algorithms.png" />
          </div>
        </div>

        <Card
          title="Table of Contents"
          content={props.allMarkdownRemark.edges}
        />
      </div>
    )}
  />
);

export default IndexPage;
