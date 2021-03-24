import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import {Button} from "./Button"
import {FaGithub} from 'react-icons/fa'
import {Link} from 'gatsby'

const Projects = () => {

  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            alt
            name
            tags
            description
            codelink
            demolink
            index
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getProjects(data) {
    const projectsArray = [];
    data.allProjectsJson.edges.forEach( (item, index) => {
      console.log(item.node.tags);
      projectsArray.push(
        <ProjectCard key={index}>
          <ProjectImg src={item.node.img.childImageSharp.fluid.src}
          fluid={item.node.img.childImageSharp.fluid}
          alt={item.node.alt}/>
          <ProjectInfo>
              <Index>{item.node.index}</Index>
              <ProjectName>{item.node.name}</ProjectName>
              <ProjectDescription>{item.node.description}</ProjectDescription>
            <ProjectButtons>
              <Button to={item.node.demolink} round="true">Demo</Button>
              <IconLink to={item.node.codelink}><FaGithub></FaGithub></IconLink>
            </ProjectButtons>
          </ProjectInfo>
        </ProjectCard>
      )
    })
    return projectsArray;
  }

  return (
    <ProjectContainer id="project-container">
      <ProjectHeader data-sal="slide-left" data-sal-easing="ease" data-sal-duration="1000">Projects</ProjectHeader>
      <ProjectWrapper data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">{getProjects(data)}</ProjectWrapper>
    </ProjectContainer>
  )
}

export default Projects

const ProjectContainer = styled.div`
  background: #0c0c0c;
  padding: 0rem calc((100vw - 1300px)/2);
  color: #fff;
`
const ProjectHeader = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  color: #3FE0D0;
  padding-bottom: 5rem;
  padding-top:5rem;
`

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-content:center;
  padding: 0 2rem;

  @media screen and (max-width:1300px) {
    grid-template-columns: 1fr;
  }
`
const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.3s ease;

  /* @media screen and (min-width:768px) {
    flex-direction: row;
  } */
  
`

const ProjectImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  /* position: absolute; */
  border-radius: 5px;
  filter: brightness(70%);
  transition: 0.2s ease;

  &:hover {
    filter: brightness(100%);
  }
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;
  background: #fff;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: translate(0%, -5%);
  min-height:335px;

  
  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const Index = styled.h1`
  padding-top:1.5rem;
  font-size: "15px";
  font-family: Open sans;
  color: #3FE0D0;
  transition: 0.3s;

  &:hover {
    color: #a464f4;
  }
`

const ProjectName = styled.h1`
  color: black;
  padding-top:1rem;
  font-size: clamp(0.5rem, 3vw, 1.5rem);
  /* padding: 1rem 0rem; */
`

const ProjectDescription = styled.p`
  color: #777777;
  padding: 1rem 0rem;
  line-height:1.5;
  font-size: clamp(0.5rem, 3vw, 1rem);
`
const ProjectButtons = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 5rem; */
  /* justify-content:space-between; */
`
const IconLink = styled(Link)`
  font-size: 1.25rem;
  color: white;
  transition: 0.5s;
  background-color: #3FE0D0;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem 0.70rem;
  margin-left: 0.25rem;

  &:hover {
    background: ${({primary}) => (primary ? '#a464f4' : '#a464f4')};
    transform: translateY(-2px);
  }
`
// Implement tags
// const Tags = styled.div`
//   display: flex;
//   flex-direction: row;
// `

// const Tag = styled.div`
//   color: grey;
//   border-radius: 3px;
//   margin-right: 1rem;
// `

// const TagText = styled.h1`
//   background-color: black;
//   font-size: 1rem;
//   color: black;
// `
