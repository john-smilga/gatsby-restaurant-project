import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { MainSection, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import Product from './Product'
import { Link } from 'gatsby'
export default function Menu() {
  return (
    <MainSection>
      <Title title="featured items" message="little taste" />

      <StaticQuery
        query={graphql`
          {
            items: allContentfulMenu {
              edges {
                node {
                  name
                  price
                  id
                  description
                  img {
                    fluid(maxWidth: 800) {
                      ...GatsbyContentfulFluid_tracedSVG
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
      <Link to="/menu/" style={{ textDecoration: 'none' }}>
        <SectionButton style={{ margin: '2rem auto' }}>full menu</SectionButton>
      </Link>
    </MainSection>
  )
}
