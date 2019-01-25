import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import PageDivider from '../components/PageDivider'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'
import websiteface from '../images/websiteface.svg'
import downarrow from '../images/Arrow-down.svg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto m-auto`};
`

const HeroImage = styled.img`
  ${tw`w-64 xl:w-80 h-auto m-auto block lg:float-right clearfix`}
`

const DownArrow = styled.img`
  ${tw`w-16 ml-auto mr-auto block`}
`
const ScrollText = styled.p`
  ${tw`text-center mt-10 lg:mt-20 font-sans font-bold`}
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

class Index extends React.Component {
  separator = React.createRef();

  render() {
    return (
      <>
        <Layout />
        <Parallax pages={5}>
          <PageDivider />
          <Hero offset={0} scrollToContent={this.scrollToContent}>
            <HeroImage src={websiteface} alt="Richard Illustrated Picture" />
            <BigTitle>
              Hi! I'm Richard.
            </BigTitle>
            <Subtitle>I'm a software consultant based in the San Francisco Bay Area.</Subtitle>
            <ScrollText>SCROLL</ScrollText>
            <DownArrow src={downarrow} />
          </Hero>
          <Projects offset={1}>
            <Title>Projects</Title>
            <ProjectsWrapper>
              <ProjectCard
                title="Freiheit"
                link="https://www.behance.net/gallery/58937147/Freiheit"
                bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              >
                This project is my entry to Adobe's #ChallengeYourPerspective contest.
          </ProjectCard>
              <ProjectCard
                title="Harry Potter"
                link="https://www.behance.net/gallery/52915793/Harry-Potter"
                bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
              >
                I entered the DOCMA 2017 award with this Harry Potter inspired image.
          </ProjectCard>
              <ProjectCard
                title="Tomb Raider"
                link="https://www.behance.net/gallery/43907099/Tomb-Raider"
                bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
              >
                Recreation of a Tomb Raider Wallpaper (Fan Art)
          </ProjectCard>
              <ProjectCard
                title="Eagle"
                link="https://www.behance.net/gallery/38068151/Eagle"
                bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
              >
                A fantasy image manipulation relocating the habitat of wild animals.
          </ProjectCard>
            </ProjectsWrapper>
          </Projects>
          <About offset={3}>
            <Title>About</Title>
            <AboutHero>
              <Avatar src={avatar} alt="John Doe" />
              <AboutSub>
                Developer, gamer, and entrepreneur.
          </AboutSub>
            </AboutHero>
            <AboutDesc>
              You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
              every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
              make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
              want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
              right?
        </AboutDesc>
          </About>
          <Contact offset={4}>
            <Inner>
              <Title>Get in touch</Title>
              <ContactText>
                Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
                <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
                <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
              </ContactText>
            </Inner>
            <Footer>
              &copy; 2019 Tinker{' '}
            </Footer>
          </Contact>
        </Parallax>
      </>
    );
  }
}

export default Index
