import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'
import styles from './Index.module.scss'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import PageDivider from '../components/PageDivider'
import ClientCard from '../components/ClientCard'
import ContactForm from '../components/ContactForm'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'
import ContactInner from '../elements/ContactInner'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Clients from '../views/Clients'

import avatar from '../images/avatar.jpg'
import john from '../images/john-kealy.png'
import websiteface from '../images/websiteface.svg'
import stevie from '../images/stevie.png'

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

const ClientsWrapper = styled.div`
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
  ${tw`w-48 xl:w-80 h-auto m-auto block lg:float-right clearfix`}
`

const ScrollText = styled.p`
  ${tw`text-center mt-10 lg:mt-20 font-sans font-bold`}
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl font-sans`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-black font-sans text-xl md:text-2xl lg:text-3xl`};
`

const ContactTitle = styled.h1`
  ${tw`text-black font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

class Index extends React.Component {
  render() {
    return (
      <>
        <Layout />
        <Parallax pages={5}>
          <PageDivider />
          <Hero offset={0}>
            <HeroImage src={websiteface} alt="Richard Illustrated Picture" />
            <BigTitle>
              Hi! I'm Richard.
            </BigTitle>
            <Subtitle>I'm a software consultant based in the San Francisco Bay Area.</Subtitle>
            <ScrollText>SCROLL</ScrollText>
            <div className={styles.iconscroll}></div>
          </Hero>
          <Projects offset={1}>
            <Title>Projects</Title>
            <ProjectsWrapper>
              <ProjectCard
                title="UCSF.EDU"
                link="https://www.ucsf.edu"
                bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              >
                On this project I was a key member of the design and development of UCSF's redesign project.
              </ProjectCard>
              <ProjectCard
                title="Quicksoft CRM"
                link="https://www.behance.net/gallery/75369603/Quicksoft-CRM?"
                bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
              >
                This project was built with React from the ground up. Redux was used for state management.
              </ProjectCard>
            </ProjectsWrapper>
          </Projects>
          <Clients offset={2}>
            <Title>Clients</Title>
            <ClientsWrapper>
              <ClientCard
                photo={stevie} alt="Stevi botella Photo"
                children="&quot;Richard is a wizard when it comes to front-end development. I've relied on him for countless projects and he's always delivered.&quot;"
                title="Steve Botella (CEO Quicksoft)"
                bg="#FFFFFF"
              ></ClientCard>
              <ClientCard
                photo={john} alt="John Kealy Photo"
                children="&quot;His design aesthetic is impeccable, his programming ability unmatched, and his hard work and integrity is paramount. Richard is the only developer I'd consider for my next project&quot;"
                title="John Kealy (UCSF)"
                bg="#FFFFFF"
              ></ClientCard>
            </ClientsWrapper>
          </Clients>
          <About offset={3}>
            <Title>About</Title>
            <AboutHero>
              <Avatar src={avatar} alt="John Doe" />
              <AboutSub>
                Developer and entrepreneur.
          </AboutSub>
            </AboutHero>
            <AboutDesc>
              I began web development at the age of sixteen creating custom themes for Myspace pages. I was always interested in design so I went to the SFAI for web design and begin my journey there. Design had a huge impact on my career and exposed me to the full process of product development. In 2009 I started my own web company and through those failures, I learned many things about software engineering and freelancing. I snatched up a great opportunity with UCSF and learned bountiful things about information systems, computer science, and business management. So here I am now with Tinker, my modest sole proprietorship, taking everything I learned and providing the best software consulting I can!
              Hit me up with a message with any questions you may have or just to say hi.
            </AboutDesc>
          </About>
          <Contact offset={4}>
            <ContactInner>
              <ContactTitle>Get in touch</ContactTitle>
              <ContactForm></ContactForm>
            </ContactInner>
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
