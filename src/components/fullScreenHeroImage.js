import React from 'react';
import { graphql } from 'gatsby';

const FullScreenHeroImage = ({data}) => {
 return (
     <>
        <h1> My hero image!</h1>
        {/* <img src={data.edges.src} /> */}
        
      </>
 )
} 

// const query = graphql`
// query HeroQuery($path: String!) {
//     allFile(
//         filter: {
//             extension: {regex: "/(jpg)|(png)|(jpeg)/"}
//             relativeDirectory: {eq: $path}
//         }
//     )
//     edges {
//         node {
//             childImageSharp{
//                 fluid(maxWidth: 500)
//                 ...GatsbyImageSharpFluid
//             }
//             src
//         }
//     }
    
//   }`

export default FullScreenHeroImage;