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
  padding-top: ${spacing.large};
  padding-bottom: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

type Props = {
  location: Object,
}

const Faucet = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Faucet - developer.ravencoin.online`}
      description={'Testnet RVN and assets for developers'}
      keywords={
        'faucet, rvnbox, tutorials, developer tools, ravencoin, rvncoin, RVN, sdk, api'
      }
      location={location}
    />
    <Hero image={HeroImg}>
      <HeroLayout>
        <H1 background>Faucets</H1>
        <H3 primary>Testnet RVN and Asset for developers</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <SectionLayout>
        <InfoCard
          to="/faucets/rvn"
          title="RVN Testnet Faucet"
          text="Ravencoin testnet faucet.  Get some testnet RVN for your development needs"
          cta="View"
        />
        <InfoCard
          to="/faucets/assets"
          title="Asset Testnet Faucet"
          text="Asset testnet faucet.  Get some testnet assets for your development needs"
          cta="View"
        />
      </SectionLayout>
    </Container>
  </DefaultLayout>
)

export default Faucet
