import React from "react"
import styled from "styled-components"

import { StaticImage } from "gatsby-plugin-image"

const Images = () => {
  return (
    <Wrapper>
      <article>
        <h2>Fixed Image</h2>
        <StaticImage
          src="../assets/images/smoke.jpg"
          alt="Smoking a Pipe"
          layout="fixed"
          height={400}
          placeholder="blurred"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h2>Constrained Image</h2>
        <StaticImage
          src="../assets/images/smoke.jpg"
          alt="Smoking a Pipe"
          layout="constrained"
          height={400}
          placeholder="blurred"
          className="example-img"
          as="section"
        />
      </article>
      <article>
        <h2>Full-Width Image</h2>
        <StaticImage
          src="../assets/images/smoke.jpg"
          alt="Smoking a Pipe"
          layout="fullWidth"
          placeholder="blurred"
          className="example-img"
          as="section"
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  width: 70vw;
  margin: 0 auto;
  article {
    border: 2px solid red;
    overflow: hidden;
  }
`

export default Images
