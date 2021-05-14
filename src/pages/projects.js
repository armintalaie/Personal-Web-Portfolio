import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function Projects({ posts }) {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <ol style={{ listStyle: `none` }} className="project-map">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          const description = post.frontmatter.description || post.excerpt
          let featuredImgFluid =
            post.frontmatter.featuredImage.childImageSharp.fluid
             

          return (
             <div className="project-section">
               <div className="project-img-holder">
                    <Img className="tag" fluid={featuredImgFluid} />
                </div>

              <div key={post.fields.slug} className="project-thumbnail">
                <h4>
                  <Link to={post.fields.slug} itemProp="url">
                    <span itemProp="headline">{title}</span>
                  </Link>
                </h4>

                <p>{description}</p>
              </div>
            </div>
           
          )
        })}
      </ol>
    </div>
  )
}

