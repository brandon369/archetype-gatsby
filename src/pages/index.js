import * as React from "react"
import Layout from "../components/organisms/layout/Layout"
import SEO from "../components/seo"
// import { graphql } from "gatsby"
import "../styles/index.scss"


// markup
const IndexPage = (props) => {
  // const { allContentfulContenidoHome } = props.data

  return (
    <Layout>
      <SEO
        title='Home'
        description='this is a home page'
      />
      <h1>Home page</h1>
    </Layout>
  )
}


// export const query = graphql`
//     query Meta_Query_Home{
//         allContentfulContenidoHome {
//             nodes {
//                 metaTitulo
//                 metaDescription {
//                     metaDescription
//                 }
//             }
//         }
//     }
// `


export default IndexPage
