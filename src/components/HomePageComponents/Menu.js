import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import Product from './Product'
import { Link } from 'gatsby'
export default function Menu() {
  return (
    <Section>
      <Title title="featured items" message="little taste" />
      <ProductList>
        <StaticQuery
          query={graphql`
            {
              items: allContentfulMenu {
                edges {
                  node {
                    name
                    price
                    id
                    ingredients
                    img {
                      fixed(width: 150, height: 150) {
                        ...GatsbyContentfulFixed_tracedSVG
                      }
                    }
                  }
                }
              }
            }
          `}
          render={data => {
            const { edges: sweets } = data.items
            return sweets.map(item => {
              return <Product key={item.node.id} product={item.node} />
            })
          }}
        />
      </ProductList>
      <Link to="/menu/" style={{ textDecoration: 'none' }}>
        <SectionButton style={{ margin: '2rem auto' }}>full menu</SectionButton>
      </Link>
    </Section>
  )
}

export const ProductList = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
  }
`
