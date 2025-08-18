import { programmingLanguages } from "../utils/skillsData"

const Skills = () => {
    const mappedSkills = programmingLanguages.map((lang, index) => {
        return (
            <div className="prog-lans">
                {lang.icon}
                <span className="prog-name">{lang.name}</span>
            </div>
        )
    })

    return (
        <div className="Skills">
            <span className="title">Skills</span>
            <span className="follow-up">Tools and Technologies</span>
            <div className="skills-container">
                <span className="txt">Technical Skills</span>
                <div className="outter-box">
                    <div className="inner-box">
                        <span className="box-name">Programming Languages</span>
                        <div className="actual-skills">
                            {mappedSkills}
                        </div>
                    </div>
                    <div className="inner-box">
                        <span className="box-name">Frameworks</span>
                        <div className="actual-skills"></div>
                    </div>
                </div>
                <span className="txt">Tools</span>
                <div className="outter-box">
                    <div className="inner-box">
                        <span className="box-name">Cybersecurity Tools</span>
                        <div className="actual-skills"></div>
                    </div>
                    <div className="inner-box">
                        <span className="box-name">Developer Tools</span>
                        <div className="actual-skills"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
