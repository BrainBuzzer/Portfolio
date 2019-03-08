import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import Button from '../elements/Button'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

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
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
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

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Aditya Giri.
        </BigTitle>
        <Subtitle>I'm an Indie Maker, Functional Programming fanboy, and Teacher who loves to share knowledge.</Subtitle>
        <Button href="https://blog.brainbuzzer.me">Blog</Button>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Would You Rather?"
            link="https://github.com/BrainBuzzer/would_you_rather"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            This project was built for fun, and turned out to be really interesting.
          </ProjectCard>
          <ProjectCard
            title="Netjson.org"
            link="https://netjson.org"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            I have designed the front-end of the site which increases user engagement.
          </ProjectCard>
          <ProjectCard
            title="OpenWISP Website"
            link="http://openwisp.org/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Re-designed the entire site to make it captivating for the new users.
          </ProjectCard>
          <ProjectCard
            title="WIP - Shikshika"
            link="https://shikshika.org"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Work-in-Progress Open Source Udemy/Skillshare/Teachable Alternative
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Aditya Giri" />
          <AboutSub>
            Full Stack Web Developer
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          I'm a Full-Stack web developer. I'm currently studying from University of London in BSc(Computer Science). In the past, I have worked
          with technologies such as Elixir, Phoenix, Elm, React, and Vue. I also have experience in building highly
          scalable and concurrent applications. In the past, I've been Google Code-in Grand Prize Winner. 
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:dtrg21@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="http://t.me/BrainBuzzer">Telegram</a> &{' '}
            <a href="https://twitter.com/brainbuzzerme">Twitter</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Aditya Giri
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
