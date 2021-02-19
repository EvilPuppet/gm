import React from "react";
import { Link, graphql } from "gatsby";
import { Container, BlogList } from "../css/blog";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { animated, useSpring } from 'react-spring';

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts | Guilherme Motta | Software Enginner" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts | Guilherme Motta | Software Enginner" />
      <Container>
      <animated.h1 style={props}>BLOG</animated.h1>
        <BlogList>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug;
            return (
              <li key={post.fields.slug}>
                <Link to={post.fields.slug} itemProp="url">
                <img src={post.frontmatter.imgTitle.childImageSharp.fluid.src} alt="img title" />
                </Link>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </article>
              </li>
            );
          })}
        </BlogList>
      </Container>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          imgTitle {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
