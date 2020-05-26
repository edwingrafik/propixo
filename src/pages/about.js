import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import Layout from "../components/layout"

const About = ({ data: { about } }) => (
  <Layout>
    <HelmetDatoCms seo={about.seoMetaTags} />
    <div className='container font-sans'>
      <div className='bg-red-900 w-8 h-8'></div>
      <div className='bg-red-800 w-16 h-16'></div>
      <div className='bg-red-700 w-24 h-24'></div>
      <div className='bg-red-600 w-40 h-40'></div>
      <div className='bg-red-500 w-64 h-64'></div>
      <div className='bg-red-400 w-104 h-104'></div>
      <div className='bg-red-300 w-168 h-168'></div>
      <div className='bg-red-200 w-272 h-272'></div>
      <div className="text-h1">
        Header 1<br />
        Eos placeat id impedit sint eum cumque nam in. Numquam quos quos autem
        rerum ipsa voluptatem. Dolor reiciendis sit. Consequatur qui
        perspiciatis non enim blanditiis. Autem recusandae ipsum sit vero.
        Tempore ipsum unde illo est rerum minima modi ea sunt.
      </div>
      <div className="text-h2">
        Header 2<br />
        Eos placeat id impedit sint eum cumque nam in. Numquam quos quos autem
        rerum ipsa voluptatem. Dolor reiciendis sit. Consequatur qui
        perspiciatis non enim blanditiis. Autem recusandae ipsum sit vero.
        Tempore ipsum unde illo est rerum minima modi ea sunt.
      </div>
      <div className="text-h3">
        Header 3<br />
        Eos placeat id impedit sint eum cumque nam in. Numquam quos quos autem
        rerum ipsa voluptatem. Dolor reiciendis sit. Consequatur qui
        perspiciatis non enim blanditiis. Autem recusandae ipsum sit vero.
        Tempore ipsum unde illo est rerum minima modi ea sunt.
      </div>
      <div className="text-h4">
        Header 4<br />
        Eos placeat id impedit sint eum cumque nam in. Numquam quos quos autem
        rerum ipsa voluptatem. Dolor reiciendis sit. Consequatur qui
        perspiciatis non enim blanditiis. Autem recusandae ipsum sit vero.
        Tempore ipsum unde illo est rerum minima modi ea sunt.
      </div>
      <div className="text-base">
        Text base<br />
        Eos placeat id impedit sint eum cumque nam in. Numquam quos quos autem
        rerum ipsa voluptatem. Dolor reiciendis sit. Consequatur qui
        perspiciatis non enim blanditiis. Autem recusandae ipsum sit vero.
        Tempore ipsum unde illo est rerum minima modi ea sunt.
      </div>
      <div className="text-small">
        Text small<br />
        Eos placeat id impedit sint eum cumque nam in. Numquam quos quos autem
        rerum ipsa voluptatem. Dolor reiciendis sit. Consequatur qui
        perspiciatis non enim blanditiis. Autem recusandae ipsum sit vero.
        Tempore ipsum unde illo est rerum minima modi ea sunt.
      </div>
      <h1 className='sheet__title'>{about.title}</h1>
      <p className='sheet__lead'>{about.subtitle}</p>
      <div className='sheet__gallery'>
        <Img fluid={about.photo.fluid} />
      </div>
      <div
        className='sheet__body'
        dangerouslySetInnerHTML={{
          __html: about.bioNode.childMarkdownRemark.html,
        }}
      />
    </div>
  </Layout>
);

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAboutPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
