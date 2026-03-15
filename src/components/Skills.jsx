import { useState } from 'react';
import { 
  programmingLanguages, 
  frameworks, 
  databases, 
  technicalConcepts, 
  cybersecurityTools 
} from "../utils/skillsData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from "lottie-react";
import codingAnimation from "../utils/codingAnimation"

const Skills = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const skillCategories = [
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Frameworks & Libraries", skills: frameworks },
    { title: "Databases", skills: databases },
    { title: "Technical Concepts", skills: technicalConcepts },
    { title: "Cybersecurity Tools", skills: cybersecurityTools },
  ];

  const handleNextCategory = () => {
    if (currentCategoryIndex < skillCategories.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCategoryIndex(currentCategoryIndex + 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const handlePreviousCategory = () => {
    if (currentCategoryIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentCategoryIndex(currentCategoryIndex - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const currentCategory = skillCategories[currentCategoryIndex];
  const hasNextCategory = currentCategoryIndex < skillCategories.length - 1;
  const hasPreviousCategory = currentCategoryIndex > 0;

  const renderSkillCard = (skill) => {
    const hasIcon = !!skill.icon;
    return (
      <div key={skill.name} className={`skill-card ${!hasIcon ? 'no-icon' : ''} ${isAnimating ? 'animating' : ''}`}>
        {skill.icon && <span className="skill-card-icon">{skill.icon}</span>}
        <span className="skill-card-label">{skill.name}</span>
      </div>
    );
  };

  const styles = {
    height: 389,
    width: 389,
    marginTop: -40
  };

  return (
    <div className="Skills">
      <span className="title">Skills</span>
      <span className="follow-up">Tools and Technologies</span>
      
      <div className="skills-content-container">
        <div className="skills-actual-content">
          <h3 className="skills-category-title">{currentCategory.title}</h3>
          <div className={`skills-display-cards ${isAnimating ? 'slide-out' : 'slide-in'}`}>
            {currentCategory.skills.map((skill) => renderSkillCard(skill))}
          </div>
          
          <div className="skills-navigation">
            <button 
              className="arrow-btn left-arrow"
              onClick={handlePreviousCategory}
              disabled={!hasPreviousCategory}
            >
              <FontAwesomeIcon icon={['fas', 'arrow-left']} />
            </button>
            <button 
              className="arrow-btn right-arrow"
              onClick={handleNextCategory}
              disabled={!hasNextCategory}
            >
              <FontAwesomeIcon icon={['fas', 'arrow-right']} />
            </button>
          </div>
        </div>
        <div className="skills-animation">
          <Lottie 
            animationData={codingAnimation}
            loop={true}
            style={styles}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
