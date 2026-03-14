import { 
  programmingLanguages, 
  frameworks, 
  databases, 
  technicalConcepts, 
  cybersecurityTools 
} from "../utils/skillsData"

const Skills = () => {
  const skillCategories = [
    { title: "Programming Languages", skills: programmingLanguages },
    { title: "Frameworks & Libraries", skills: frameworks },
    { title: "Databases", skills: databases },
    { title: "Technical Concepts", skills: technicalConcepts },
    { title: "Cybersecurity Tools", skills: cybersecurityTools },
  ];

  const renderSkillItem = (skill) => {
    const hasIcon = !!skill.icon;
    return (
      <div key={skill.name} className={`skill-item ${!hasIcon ? 'no-icon' : ''}`}>
        {skill.icon && <span className="skill-icon">{skill.icon}</span>}
        <span className="skill-label">{skill.name}</span>
      </div>
    )
  }

  return (
    <div className="Skills">
      <span className="title">Skills</span>
      <span className="follow-up">Tools and Technologies</span>
      <div className="skills-wrapper">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill) => renderSkillItem(skill))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
