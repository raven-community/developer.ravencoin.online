// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { FaAngleLeft } from 'react-icons/fa'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import MasteringRavencoinAttribution from 'components/MasteringRavencoinAttribution'
import HelmetPlus from 'components/HelmetPlus'

import H3 from 'atoms/H3'
import H2 from 'atoms/H2'
import H1 from 'atoms/H1'
import StyledLink from 'atoms/StyledLink'

import spacing from 'styles/spacing'

import HeroImg from 'images/learn-ravencoin-header.jpg'

const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const PageLayout = styled.div`
  display: grid;
  margin-top: ${spacing.medium};
  grid-gap: ${spacing.small};
`

const ChapterLayout = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-row-gap: ${spacing.tiny};
  grid-column-gap: ${spacing.tiny};
`

type Props = {
  location: Object,
  data: Object,
}

const Learn = ({ location, data }: Props) => {
  const chapters = data.allMarkdownRemark.edges

  return (
    <DefaultLayout location={location}>
      <HelmetPlus
        title={`Mastering Ravencoin - book - developer.ravencoin.online`}
        description={
          'Learn all about Ravencoin to take you from a beginner to expert.'
        }
        keywords={
          'mastering ravencoin, book, rvnbox, tutorials, developer tools, rvncoin, Ravencoin, RVN, sdk, api'
        }
        location={location}
      />
      <Hero image={HeroImg}>
        <HeroLayout>
          <StyledLink to="/learn">
            <H3 centerVertical>
              {' '}
              <FaAngleLeft />
              Learn
            </H3>
          </StyledLink>
          <H1 background>Mastering Ravencoin</H1>
          <H3 background>Build a foundation of knowledge</H3>
        </HeroLayout>
      </Hero>
      <Container>
        <PageLayout>
          <MasteringRavencoinAttribution />
          <H2>Chapters</H2>
          <ChapterLayout>
            {chapters.map(chapter => (
              <React.Fragment
                key={`${chapter.node.frontmatter.slug}-${
                  chapter.node.frontmatter.chapter
                }`}
              >
                <H3 key={chapter.node.frontmatter.chapter} monospace>
                  {chapter.node.frontmatter.chapter}.
                </H3>
                <H3 key={chapter.node.frontmatter.slug}>
                  <StyledLink to={chapter.node.fields.slug}>
                    {chapter.node.frontmatter.title}
                  </StyledLink>
                </H3>
              </React.Fragment>
            ))}
          </ChapterLayout>
        </PageLayout>
      </Container>
    </DefaultLayout>
  )
}

export default Learn

export const query = graphql`
  query MasteringBookQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___chapter], order: ASC }
      filter: { fields: { type: { eq: "chapter" } } }
    ) {
      totalCount
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            chapter
            updatedAt(formatString: "MMMM Do, YYYY")
            publishedAt(formatString: "MMMM Do, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
