import React from 'react';
import { Link, graphql } from 'gatsby';
// import Masonry from 'react-masonry-component'
import Img from 'gatsby-image';
import Layout from '../components/layout';
import ReCAPTCHA from 'react-google-recaptcha';

const IndexPage = ({ data }) => (
  <Layout>
    <section className='container'>
      {/* <form>
        <p>
          <label>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type='email' name='email' />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            <select name='role[]' multiple>
              <option value='leader'>Leader</option>
              <option value='follower'>Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message'></textarea>
          </label>
        </p>
      </form> */}

      <div className='w-full max-w-xs'>
        <form
          className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-recaptcha='true'
          action='/thank-you'
        >
          <input type='hidden' name='contact' value='Contact Form' />
          <div className='mb-4'>
            <label
              className='block text-gray-700 text-sm font-bold mb-2'
              for='username'
            >
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Username'
              name='name'
            />
          </div>
          <div className='flex items-center justify-between'>
            {/* <ReCAPTCHA sitekey={process.env.GATSBY_RECAPTCHA_KEY} /> */}
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <h1 className='h1-text text-text-darker mt-16'>Studio usług cyfrowych</h1>
      <h2 className='h2-text text-text-darker mt-16'>
        Strategia, technologia i design wspierają biznes naszych klientów.
      </h2>
      <code>obrazek</code>
      <h3 className='text-h3 text-text-darker mt-16'>
        ProPixo to agencja cyfrowa o strategicznym podejściu do projektowania,
        kodowania i obsługi stron internetowych i aplikacji internetowych, które
        wspierają najlepsze wrażenia użytkownika i twoje KPI
      </h3> */}
      {/* {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id}>
          <div className='w-272 h-auto rounded-lg shadow-lg overflow-hidden'>
            <Img className='w-full h-full' fluid={work.coverImage.fluid} />
          </div>
          <Link className='button' to={`/works/${work.slug}`}>
            <span className='button-text'>{work.title}</span>
          </Link>
          <p>{work.excerpt}</p>
        </div>
      ))} */}
    </section>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }, limit: 1) {
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
`;
