import React from 'react'
import { techData } from './techCardData'

type TechCardProps = {
    className: string;
    techData: techData;
}

const TechCard: React.FC<TechCardProps> = ({ className, techData }) => {
    console.log(techData.techLink)
  return (
    <a href={techData.techLink} target={"_blank"} rel="noreferrer" >
        <img
            data-aos="fade-down"
            className={className}
            src={techData.imgSrc} alt={techData.imgAlt}>
        </img>
    </a>
  )
}

export default TechCard
