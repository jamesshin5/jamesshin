import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'

const Experience = () => {

  const data = useStaticQuery(graphql`
    query ExperiencesQuery {
      allExperiencesJson {
        edges {
          node {
            company
            descriptionMain
            descriptionOne
            descriptionTwo
            time
            title
          }
        }
      }
    }
  `)

function getExperiences(data) {
  const ExperiencesArray = [];
  data.allExperiencesJson.edges.forEach( (item, index) => {
    ExperiencesArray.push(
      <ExperienceCard key={index}>
        {/* <ExperienceIcon></ExperienceIcon> */}
        <ExperienceInfo>
            <ExperienceCompany>{item.node.company}</ExperienceCompany>
            <ExperienceTitle>{item.node.title}, {item.node.time}</ExperienceTitle>
            <ExperienceDescription bold="true">{item.node.descriptionMain}</ExperienceDescription>
            <ExperienceDescription><ColoredText>1. </ColoredText>{item.node.descriptionOne}</ExperienceDescription>
            <ExperienceDescription><ColoredText>2. </ColoredText>{item.node.descriptionTwo}</ExperienceDescription>
        </ExperienceInfo>
      </ExperienceCard>
    )
  })
  return ExperiencesArray;
}

  return (
    <ExperienceContainer id="experiences-container" >
      <ExperienceHeader data-sal="slide-left" data-sal-easing="ease" data-sal-duration="1000">Experience</ExperienceHeader>
      <ExperienceTable data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
        {getExperiences(data)}
      </ExperienceTable>
    </ExperienceContainer>
  )
}

export default Experience

const ExperienceContainer = styled.div`
  background: #0c0c0c;
  padding: 3rem calc((100vw - 1300px)/2);
  color: #fff;
`
const ExperienceHeader = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  color: #3FE0D0;
  padding-top: 3rem;
  padding-bottom: 5rem;
`
const ExperienceTable = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-content: flex-start;
  padding: 0 2rem;

  @media screen and (max-width:1300px) {
    grid-template-columns: 1fr;
  }
`

const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 3px;
  padding:  3rem 2rem;
  /* padding: 4rem 2rem; */
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`
// const ExperienceIcon = styled.div`
// `
const ExperienceInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  /* @media screen and (max-width: 280px) {
    padding: 0 2rem;
  } */
`
const ExperienceCompany = styled.div`
  color: black;
  /* padding-top:3rem; */
  font-weight: bold;
  font-size: clamp(1rem, 3vw, 1.1rem);
  letter-spacing:2px;
`
const ExperienceTitle = styled.div`
  color: black;
  padding-top:0.5rem;
  font-weight: lighter;
  letter-spacing:2px;
  font-size: clamp(1rem, 3vw, 1.1rem);
`
const ExperienceDescription = styled.div`
  color: #888888;
  padding: 1rem 0rem;
  line-height:1.5;
  font-weight: ${({bold}) => (bold ? "normal" : "lighter")};
  font-size: clamp(1rem, 3vw, 1rem);
`
const ColoredText = styled.div`
  color: #3FE0D0;
  font-weight: normal;
`


