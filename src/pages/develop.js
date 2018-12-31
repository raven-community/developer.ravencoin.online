// @flow

import React from 'react'
import styled from 'styled-components'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import InfoCard from 'components/InfoCard'
import HelmetPlus from 'components/HelmetPlus'

import H3 from 'atoms/H3'
import H1 from 'atoms/H1'

import media from 'styles/media'
import spacing from 'styles/spacing'

import HeroImg from 'images/develop-ravencoin-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const CardLayout = styled.div`
  display: grid;
  padding-top: ${spacing.large};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

type Props = {
  location: Object,
}

const DevelopPage = ({ location }: Props) => (
  <DefaultLayout location={location}>
    <HelmetPlus
      title={`Develop - developer.ravencoin.online`}
      description={
        'Development hub for all your development needs to be successful on Ravencoin'
      }
      keywords={
        'rvnbox, tutorials, developer tools, ravencoin, rvncoin, RVN, sdk, api'
      }
      location={location}
    />
    <Hero image={HeroImg}>
      <HeroLayout>
        <H1 background>Develop on Ravencoin</H1>
        <H3 primary>Help bring financial sovereignty to the world</H3>
      </HeroLayout>
    </Hero>
    <Container>
      <CardLayout>
        <InfoCard
          to="/rvnbox"
          title="RVNBOX"
          text="Fully featured javascript framework. Offering utility methods for Mnemonics, HDNodes, ECPairs, Crypto, Address conversion, Transactions and much more."
          cta="View"
        />
        <InfoCard
          to="/gui"
          title="GUI"
          text="BIP44 development wallet. Convert between address types. Create QR codes for WIF, XPub and XPrivs. Sign and verify messages."
          cta="View"
        />
        <InfoCard
          to="/rest"
          title="REST"
          text="The RVN JSON RPC over HTTP including a fully documented and interactive GUI which developers can use to test their ideas and confirm their code is making proper API calls."
          cta="View"
        />
        <InfoCard
          title="Cloud"
          text="Blockchain-as-a-Service. Infrastructure to deploy and scale your apps. An ecosystem of add-ons for data, monitoring, logging, metrics, testing and more all built w/ RVNBOX."
          disabledcta="Coming soon"
        />
        <InfoCard
          title="Market"
          text="Paid downloads, streaming media, in-app purchases, tokens and more ways for you to monetize."
          disabledcta="Coming soon"
        />
        <InfoCard
          to="/faucets"
          title="Faucets"
          text="Testnet RVN and assets for developers."
          cta="View"
        />
      </CardLayout>
    </Container>
  </DefaultLayout>
)

export default DevelopPage
