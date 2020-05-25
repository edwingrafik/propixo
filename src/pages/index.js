import React from 'react'
import { Link, graphql } from 'gatsby'
// import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    {data.allDatoCmsWork.edges.map(({ node: work }) => (
      <div key={work.id}>
        <Img fluid={work.coverImage.fluid} />
        <Link className='button' to={`/works/${work.slug}`}>
          <span class='button-text'>{work.title}</span>
        </Link>
        <p>{work.excerpt}</p>
      </div>
    ))}
  </Layout>
);

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
