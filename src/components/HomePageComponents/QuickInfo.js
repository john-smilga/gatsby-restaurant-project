import React, { Component } from 'react'
import { MainSection, Title } from '../../utils'
import styled from 'styled-components'
import { styles } from '../../utils'
export default class QuickInfo extends Component {
  render() {
    return (
      <MainSection>
        <Title message="let us tell you" title="our misson" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
            blanditiis dolorum quae doloremque molestias expedita, eum voluptas
            distinctio! Molestiae fuga temporibus nemo non vel mollitia nesciunt
            quaerat facere voluptate earum.
          </p>
          <h3 className="author">quote author</h3>
        </QuickInfoWrapper>
      </MainSection>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2em;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  .author {
    text-align: center;
    font-size: 2rem;
    ${styles.textSlanted};
    text-transform: capitalize;
    ${styles.letterSpacing({ spacing: '0.2rem' })};
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
