import React from 'react';
import Layout from '../components/layout';
import myImage from '../content/images/image-1.jpg';
import Image from '../components/image';

const AboutPage = () => (
    <Layout>
        <div>
            <h1> Just some extra header! </h1>
            <img src={myImage} width="200px" height="auto"/>
            {/* <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
            <div style={{ 
                width: `400px`,
                }}>
               <Image/>  
            </div>
            <div style={{ width: `300px`, }}>
                <Image />  
            </div>
            <div style={{ width: `300px`, }}>
                <Image />  
            </div>
            </div> */}
           
           
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
</div>
</Layout> );
           


export default AboutPage;