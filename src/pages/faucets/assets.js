// @flow

import * as React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'
import AssetFaucet from 'components/asset-faucet'

import H3 from 'atoms/H3'
import H1 from 'atoms/H1'

import spacing from 'styles/spacing'

import HeroImg from 'images/learn-ravencoin-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

type Props = {
  location: Object,
}

const Faucet = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Testnet Asset Faucet - developer.ravencoin.online`}
      description={'Testnet assets for developers'}
      keywords={
        'faucet, rvnbox, tutorials, developer tools, ravencoin, rvncoin, RVN, sdk, api'
      }
      location={location}
    />
    <Hero image={HeroImg}>
      <HeroLayout>
        <H1 background>Testnet asset Faucet</H1>
        <H3 primary>For developers</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <AssetFaucet />
    </Container>
  </DefaultLayout>
)

export default Faucet
