import React from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
export default function Footer() {
  return (
    <FooterWrapper>
      <div className="item">
        <h1>contact</h1>
        <p>765 - 879 - 1077</p>
        <p>55 main stret - santa monica, CA</p>
        <p>email@email.com</p>
      </div>
      <div className="item">
        <h1 className="logo">eatery</h1>
      </div>
      <div className="item">
        <h1>hours</h1>
        <p>every day</p>
        <p>from noon to 1:30 pm</p>
        <p>and from 6 pm to 1 am</p>
      </div>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled.footer`
  padding: 1rem;
  background: ${styles.colors.mainGrey};
  color: ${styles.colors.mainWhite};
  text-align: center;
  h1 {
    text-transform: uppercase;
    color: ${styles.colors.mainYellow};
  }
  p {
    margin: 0.5rem 0;
  }
  .item {
    margin: 1rem 0;
  }
  .logo {
    display: inline-block;
    color: ${styles.colors.mainYellow};
    ${styles.border({
      width: '0.2rem',
      color: '#F2AF29',
    })};
    padding: 0.2rem 0.5rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`
