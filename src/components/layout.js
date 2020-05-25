import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

// import "../styles/index.sass";

const TemplateWrapper = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
            copyright
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className='min-h-screen flex flex-col justify-between'>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <header>
            <Link to='/'>{data.datoCmsSite.globalSeo.siteName}</Link>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
              }}
            />
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
            </ul>
            <p>
              {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                <a
                  key={profile.profileType}
                  href={profile.url}
                  target='blank'
                  className={`social social--${profile.profileType.toLowerCase()}`}
                >
                  {' '}
                </a>
              ))}
            </p>
          </header>
          <main>{children}</main>
          <footer>{data.datoCmsHome.copyright}</footer>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
