import * as React from "react"
import {  graphql } from "gatsby"
import Navbar from "../components/navbar"
import About from "../components/about"
import Projects from "../components/projects"
import Experience from "../components/experience"
import Footer from "../components/footer"
import Social from "../components/socials"
import Layout from "../components/layout"
import Skills from "../components/skills"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Social />
      <h1 className="header-h"> Hi! My name is Armin </h1>{" "}
      <p className="header-p">
        I'm a Computer Science student at the University of British Columbia.
        I'm a developer and designer. In my free time, I like to play games,
        draw and binge watch shows.
      </p>{" "}
      <Navbar />
      <About />
      <Experience />
      <Projects posts={posts} />
      <Skills />
      <Footer />
    </Layout>
  )
}

export default BlogIndex

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
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
