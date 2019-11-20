import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroImage from '../components/fullScreenHeroImage'
const texts = {
  title: {
    header: "test1",
    subheader: "test2",
  }, 
  description: {
    one: "fdsfdsfsdfsdf",
    two: "sfsdfsdfdsfsd",
  },
};
const IndexPage = ({data}) => (
  
  <Layout>
    <SEO title="Home" />
    <HeroImage/>
    <h1>{ texts.title.header }</h1>
<p> { texts.description.one }</p>
    <p>Now go build something great.</p>
    <p>This is sample site for Gatsby Crash Course</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
