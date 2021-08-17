const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  const result = await graphql(
    `
      {
        allContentfulProjects {
          edges {
            node {
              slug
              contentfulid
              title
              category
              overview {
                internal {
                  content
                }
              }
              solution {
                internal {
                  content
                }
              }
              roletext {
                internal {
                  content
                }
              }
              conclusion {
                internal {
                  content
                }
              }
              coverimage {
                id
                file {
                  url
                  fileName
                }
              }
              image1 {
                file {
                  url
                  fileName
                }
              }
              image2 {
                file {
                  url
                  fileName
                }
              }
              image3 {
                file {
                  url
                  fileName
                }
              }
              createdAt(formatString: "DD 'de' MMMM, YYYY")
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulProjects.edges

  if (posts.length > 0) {
    posts.forEach(post => {
      createPage({
        path: post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug,
        },
      })
    })
  }
}
