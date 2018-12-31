// @flow

import * as React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import { defaultTheme } from 'styles/themes'
import './base.css'

import HelmetPlus from 'components/HelmetPlus'
import NavBar from 'components/NavBar'
import ShareFooter from 'components/ShareFooter'

import Favicon from 'images/favicon.png'

type Props = {
  children: React.Node,
  location: Object,
}

type Data = {
  site: { siteMetadata: { title: string } },
}

const Main = styled.div`
  position: relative;
`

const DefaultLayout = ({ children, location }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data: Data) => (
      <>
        <HelmetPlus
          title={data.site.siteMetadata.title}
          description={
            'rvnbox based ravencoin.online developer platform and resources'
          }
          keywords={'rvnbox, developer tools, ravencoin, RVN, sdk, api'}
          location={location}
          image={Favicon}
        >
          <meta charSet="utf-8" />
          <script>
            var RavenCoinMenuWidth = 1152; var RavencoinMenuLang = 'en';
          </script>
          <script type="text/javascript" src="/universal-footer.js" />
          <script src="/universal-menu.js" />
        </HelmetPlus>
        <ThemeProvider theme={defaultTheme}>
          <Main>
            <NavBar pathname={location ? location.pathname : ''} />
            {children}
            <ShareFooter location={location} />
          </Main>
        </ThemeProvider>
      </>
    )}
  />
)

export default DefaultLayout
