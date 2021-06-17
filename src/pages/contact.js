import React from "react"
import Layout from "../components/Layout"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article>
            <h3>Want To Get In Touch?</h3>
            <p>
              Far-far Hubig's pies pommes frites and aioli wontons eggplant
              parm. Croquettes fried pickles Lay's. Corn fritters churros
              zeppoles.
            </p>
            <p>
              Elephant ears fried farm eggs chalupas. Mrs. Wheat's meat pies
              krupuks pommes frites and aioli Lay's soft-shelled crabs. Popovers
              far-far horseradish sauce. Chalupas elephant ears Mrs. Wheat's
              meat pies. Cajun crabcakes chicken cutlets zeppoles.
            </p>
            <p>
              Fried Oreos pommes frites and aioli kids chicken nuggets
              horseradish sauce. Samosas hush puppies 'n' tartar sauce funnel
              cakes chicken fingers with Cane's sauce. Hush puppies 'n' tartar
              sauce samosas latkes. Mozzarella sticks elephant ears onion rings
              popovers.
            </p>
          </article>
          <article>
            <form className="contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Your Name</label>
                <textarea name="meassage" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
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

export default Contact
