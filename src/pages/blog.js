import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

const BlogPage = ({data}) => (
    <Layout>
        <h1>Latests posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={ post.node.id }>
                <h3>{post.node.frontmatter.title}</h3>
                <small>Posted by { post.node.frontmatter.author }</small>
                <br />
                <br />
                <Link to={post.node.frontmatter.path}>Read more</Link>
                <br />
                <br />
                <hr />
            </div>
        ))}
    </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
        edges {
            node {
            frontmatter {
                path
                date
                description
                title
                author
            }
            }
        }
        }
    }`


export default BlogPage