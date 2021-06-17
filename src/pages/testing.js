import React from "react"
// Page queries can only be used in pages...
// StaticQuery can be used anywhere

import Layout from "../components/Layout"
import Gallery from "../examples/Gallery"

const Testing = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

// const data = graphql`
//   query {
//     site {
//       info: siteMetadata {
//         complexData {
//           age
//           name
//         }
//         person {
//           name
//           age
//         }
//         description
//         title
//         simpleData
//         author
//       }
//     }
//   }
// `
export default Testing
