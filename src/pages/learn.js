// @flow

import * as React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'

import InfoCard from 'components/InfoCard'

import H3 from 'atoms/H3'
import H1 from 'atoms/H1'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/learn-ravencoin-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const SectionLayout = styled.div`
  display: grid;
  padding-top: ${spacing.medium};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

type Props = {
  location: Object,
}

const Learn = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Learn - developer.ravencoin.online`}
      description={
        'Learning center and resources for all of your Ravencoin development needs'
      }
      keywords={
        'learn, rvnbox, tutorials, developer tools, ravencoin, rvncoin, RVN, sdk, api'
      }
      location={location}
    />
    <Hero image={HeroImg}>
      <HeroLayout>
        <H1 background>Learn</H1>
        <H3 primary>Go from hobbyist to professional step-by-step</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <SectionLayout>
        <InfoCard
          to="/tutorials"
          title="Tutorials"
          text="Step by step instructions to build Ravencoin apps from scratch.
            See real world examples get built and have your own working copies
            to bootstrap your project from."
          cta="View"
        />
        <InfoCard
          to="/insights"
          title="Insights"
          text="Learn from developers who have already shipped successful apps. What
            worked and what would they do different?"
          cta="View"
        />
        <InfoCard
          to="/mastering-ravencoin"
          title="Mastering Ravencoin"
          text="Based on Mastering Bitcoin by Andreas M. Antonopoulos, Mastering
            Ravencoin is the ultimate guide to the bring your knowledge from
            beginner to professional step by step."
          cta="Read"
        />
      </SectionLayout>
    </Container>
  </DefaultLayout>
)

export default Learn
