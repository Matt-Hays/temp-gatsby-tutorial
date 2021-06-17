// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const getData = graphql`
//   {
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

// const FetchData = () => {
//   const {
//     site: {
//       info: { title },
//     },
//   } = useStaticQuery(getData)
//   return (
//     <div>
//       <h2>Name: {title}</h2>
//     </div>
//   )
// }

// export default FetchData

// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"

// const ComponentName = () => {
//   const data = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           complexData {
//             age
//             name
//           }
//           person {
//             name
//             age
//           }
//           description
//           title
//           simpleData
//           author
//         }
//       }
//     }
//   `)
//   return (
//     <div>
//       <h2>{data.site.siteMetadata.person.name}</h2>
//       <div>
//         {data.site.siteMetadata.complexData.map((item, index) => {
//           return (
//             <p key={index}>
//               {item.name}: {item.age}
//             </p>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default ComponentName
