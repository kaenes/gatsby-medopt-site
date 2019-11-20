import React from 'react';
import Image from '../components/image';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const Gallery = ({data})=>(
    <div>
        <Layout>
        <h1>My gallery</h1>
        {
         data.allImageSharp.edges.map( (image,index) => (
             <div>
                {console.log(index)}
                <img src={image.node.fixed.src}/>
             </div>
         ))

        }
        </Layout>

    </div>
)

export const pageQuery = graphql`
    query MyQuery {
        allImageSharp {
        edges {
            node {
            fixed(width: 200) {
                src
                originalName
            }
            }
        }
        }
    }
  
`

export default Gallery

// class Gallery extends React.Component {
//     render() {
//         return (
//             <Layout>
//                 <h1>My Gallery</h1>

//                 <div
//                     style={{
//                     display: 'flex',
//                     flexDirection: 'row'
//                 }}>
//                     <div style={{
//                         width: `400px`
//                     }}>
//                         <Image mySource='placeholderImage'/>
//                     </div>
//                     <div style={{
//                         width: `400px`
//                     }}>
//                         <Image mySource='myImage'/>
//                     </div>
//                     <div style={{
//                         width: `400px`
//                     }}>
//                         <Image mySource='placeholderImage'/>
//                     </div>

//                 </div>


//             </Layout>
//         );
//     }
// }

// export default Gallery