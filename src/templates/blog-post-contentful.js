import * as React from "react"
import { graphql } from "gatsby"

// import Bio from "../components/bio"
// import Layout from "../components/layout"
// import Seo from "../components/seo"

const BlogPostContentfulTemplate = ({ data, location }) => {
  const post = data.allContentfulProjects.edges[0].node
  const siteTitle = data.allContentfulProjects?.title || 'Title'

  console.log(post.title)

  return (
    <div id='blogPost' location={location} title={siteTitle}>
      <h1>{post.title}</h1>

      <p>Testing</p>
    {/* /* <Layout location={location} title={siteTitle}>
      <Seo
    //     title={post.title}
    //     description={post.frontmatter.description || post.subtitle}
    //   />
    //   <article
    //     className="blog-post"
    //     itemScope
    //     itemType="http://schema.org/Article"
    //   >
    //     <header>
    //       <h1 itemProp="headline">{post.title}</h1>
    //       <p>{post.frontmatter.date}</p>
    //     </header>
    //     <section
    //       dangerouslySetInnerHTML={{ __html: post.html }}
    //       itemProp="articleBody"
    //     />
    //     <hr />
    //     <footer>
    //       <Bio />
    //     </footer>
    //   </article> */}
    {/* // </Layout> */}
    </div>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
query ( $slug: String! ) { 
allContentfulProjects( filter: {slug: { eq: $slug }} ) {
  edges {
    node {
      title
    }
  }
}
}
`





// `
// {
//   allContentfulProjects( slug: { eq: $slug }  ) {
//     edges {
//       node {
//         slug
//         title
//         author
//         overview {
//           internal {
//             content
//           }
//         }
//       }
//     }
//   }
// }
// `







// `
//   query ContentfulBlogPostBySlug(
//     $id: String!
//     $previousPostId: String
//     $nextPostId: String
//   ) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     markdownRemark(id: { eq: $id }) {
//       id
//       excerpt(pruneLength: 160)
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         description
//       }
//     }
//     previous: markdownRemark(id: { eq: $previousPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//     next: markdownRemark(id: { eq: $nextPostId }) {
//       fields {
//         slug
//       }
//       frontmatter {
//         title
//       }
//     }
//   }
// `
