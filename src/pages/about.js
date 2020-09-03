import React from 'react';
import { graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const About = ({ data: { about } }) => (
  <Layout>
    <HelmetDatoCms seo={about.seoMetaTags} />

    <div className='container text-text'>
      <p>Sizes:</p>
      <div className='flex flex-wrap items-end'>
        <div className='bg-red-900 w-10 h-10'></div>
        <div className='bg-red-800 w-16 h-16'></div>
        <div className='bg-red-700 w-26 h-26'>26</div>
        <div className='bg-red-600 w-42 h-42'>42</div>
        <div className='bg-red-500 w-68 h-68'>68</div>
        <div className='bg-red-400 w-110 h-110'>110</div>
        <div className='bg-red-300 w-178 h-178'>178</div>
        <div className='bg-red-200 w-288 h-288'>288</div>
      </div>
      <p>Colors: Primary</p>
      <div className='flex flex-wrap'>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-primary'></div>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-primary-lighter'></div>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-primary-darker'></div>
      </div>
      <p>Colors: Secondary</p>
      <div className='flex flex-wrap'>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-secondary'></div>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-secondary-lighter'></div>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-secondary-darker'></div>
      </div>
      <p>Colors: Background</p>
      <div className='flex flex-wrap'>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-bg'></div>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-bg-lighter'></div>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-bg-darker'></div>
      </div>
      <p>Colors: Text</p>
      <div className='flex flex-wrap'>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-text'></div>
        <div className='w-68 h-68 rounded-lg shadow-lg m-16 bg-text-lighter'></div>
      </div>

      <div className='my-110 text-center text-text px-68'>
        <div className='text-4xl font-bold leading-10 mb-26'>
          Rozwiązania cyfrowe, które dają realne wyniki
        </div>
        <div className='text-lg leading-7'>
          Strategia, technologia i design to fundamenty tworzenia silnych
          rozwiązań online, które wspierają i wzmacniają biznes naszych
          klientów.
        </div>
      </div>
      <div className='text-text'>
        <code className="mt-42 block">Typography Header 1:</code>
        <div className='h1'>
          Eos placeat id impedit sint eum cumque nam in.
        </div>
        <code className="mt-42 block">Typography Header 2:</code>
        <div className='h2'>
          Eos placeat id impedit sint eum cumque nam in.
        </div>
        <code className="mt-42 block">Typography Header 3:</code>
        <div className='h3'>
          Eos placeat id impedit sint eum cumque nam in.
        </div>
        <code className="mt-42 block">Typography Base:</code>
        <div className='base'>
          Eos placeat id impedit sint eum cumque nam in.
        </div>
        <code className="mt-42 block">Typography Small:</code>
        <div className='small'>
          Eos placeat id impedit sint eum cumque nam in.
        </div>
        <code className="mt-42 block">Typography Label:</code>
        <div className='label'>
          Eos placeat id impedit sint eum cumque nam in.
        </div>
        <code className="mt-42 block">Typography Button:</code>
        <div className='button'>
          Eos placeat id impedit sint eum cumque nam in.
        </div>
      </div>

      {/* <h1 className='sheet__title'>{about.title}</h1> */}
      {/* <p className='sheet__lead'>{about.subtitle}</p> */}
      {/* <div className='sheet__gallery'>
        <Img fluid={about.photo.fluid} />
      </div> */}
      {/* <div
        className='sheet__body'
        dangerouslySetInnerHTML={{
          __html: about.bioNode.childMarkdownRemark.html,
        }}
      /> */}
    </div>
  </Layout>
);

export default About;

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
`;
