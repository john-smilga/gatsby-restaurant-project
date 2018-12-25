import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import Img from 'gatsby-image'
export default function Product({ product }) {
  const { name, price, description } = product
  const { fluid } = product.img

  return (
    <ProductWrapper>
      <Img fluid={fluid} className="img" />
      <div className="text">
        <h3 className="name">{name}</h3>
        <h3 className="price">${price}</h3>
        <p className="info">{description}</p>
      </div>
    </ProductWrapper>
  )
}

export const ProductWrapper = styled.div`
  margin: 2rem 0;
  .img {
    border-radius: 0.5rem;
  }
  .name {
    color: ${styles.colors.mainGrey};
    margin-top: 0.5rem;
  }
  .price {
    color: ${styles.colors.mainYellow};
    margin-top: 0.5rem;
  }
  .info {
    line-height: 1.7em;
    margin-top: 0.5rem;
    word-spacing: 0.2rem;
  }
  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 2rem;
  }
`
