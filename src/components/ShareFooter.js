// @flow

import React from 'react'
import styled from 'styled-components'
import { FaReddit, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'

import H3 from 'atoms/H3'
import Text from 'atoms/Text'
import { SmartLink } from 'atoms/StyledLink'

import Container from 'components/Container'

import spacing from 'styles/spacing'
import media from 'styles/media'

const ShareLayout = styled.div`
  grid-template-columns: 1fr;
  grid-gap: ${spacing.medium};
  display: grid;
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.medium};
  border-top: 1px dashed ${props => props.theme.backgroundMuted};
  padding-top: ${spacing.medium};
  ${media.medium`
    grid-template-columns: .5fr .5fr;
  `};
`

const ShareCTA = styled.div`
  min-height: 75px;
  display: grid;
  align-content: end;
`

const SocialLinks = styled(H3)`
  justify-content: end;
  display: grid;
  grid-template-columns: min-content min-content min-content min-content;
  grid-template-rows: 1fr;
  grid-gap: ${spacing.small};
`

type Props = {
  location: Object,
}

const makeShareLink = (
  platform: 'reddit' | 'twitter' | 'facebook' | 'linkedin',
  href: string
) => {
  switch (platform) {
    case 'reddit':
      return `http://www.reddit.com/submit/?url=${href}`
    case 'twitter':
      return `https://twitter.com/intent/tweet/?text=Visit&url=${href}&via=RavenCoin&hashtags=programming,development,ravencoin,rvn`
    case 'linkedin':
      return `https://www.linkedin.com/shareArticle?mini=true&url=${href}&title=Ravencoin&source=http://developer.ravencoin.online&summary=developer.ravencoin.online`
    case 'facebook':
      return `https://www.facebook.com/sharer/sharer.php?u=${href}`
    default:
      return '/'
  }
}

class ShareFooter extends React.Component<Props> {
  componentDidMount() {
    const om = document.createElement('script')
    om.src = `https://a.optmnstr.com/app/js/api.min.js`
    om.setAttribute('data-campaign', 'v8lwzo6nqacmgnulutqp')
    om.setAttribute('data-user', '46652')
    om.async = true
    document.body.appendChild(om)

    if (window.omv8lwzo6nqacmgnulutqp) {
      window.omv8lwzo6nqacmgnulutqp.reset()
    }

    // Keep track of the script tag
    this.scriptTag = om
  }

  componentWillUnmount() {
    document.body.removeChild(this.scriptTag)
  }

  render() {
    const { location } = this.props

    const url = `http://developer.ravencoin.online${location.pathname}`

    return (
      <Container>
        <ShareLayout>
          <ShareCTA>
            <Text right>Share on... </Text>
            <SocialLinks>
              <SmartLink subtle to={makeShareLink('reddit', url)}>
                <FaReddit />
              </SmartLink>
              <SmartLink subtle to={makeShareLink('twitter', url)}>
                <FaTwitter />
              </SmartLink>
              <SmartLink subtle to={makeShareLink('facebook', url)}>
                <FaFacebook />
              </SmartLink>
              <SmartLink subtle to={makeShareLink('linkedin', url)}>
                <FaLinkedin />
              </SmartLink>
            </SocialLinks>
          </ShareCTA>
        </ShareLayout>
      </Container>
    )
  }
}

export default ShareFooter
