import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />

      <main className="page">
        <section className="about-page">
          <article>
            <h2>Deep Fry Dat!</h2>
            <p>
              Zeppoles pork-stuffed egg rolls crawfish puffs wontons. Elephant
              ears plantain chips far-far. Fried farm eggs Cajun crabcakes
              shrimp po-boys crawfish pies calamari.
            </p>
            <p>
              Empanadas sopapillas gator bites Philly scrapple fried pickles.
              Fried Snickers horseradish sauce doughnuts clam strips and
              cocktail sauce empanadas.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person puring salt in bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="feature-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { order: ASC, fields: title }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default About
