import { FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import C from "../utils/c-lang.png";


const Skills = () => {
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
                            <div className="prog-lans">
                                <FaPython color="rgb(114, 39, 200)" size={23}/>
                                <span className="prog-name">Python</span>
                            </div>
                            <div className="prog-lans">
                                <FaJava color="rgb(114, 39, 200)" size={25}/>
                                <span className="prog-name">Java</span>
                            </div>
                            <div className="prog-lans">
                                <FaHtml5 color="rgb(114, 39, 200)" size={25}/>
                                <span className="prog-name">HTML</span>
                            </div>
                            <div className="prog-lans">
                                <FaCss3Alt color="rgb(114, 39, 200)" size={25}/>
                                <span className="prog-name">CSS</span>
                            </div>
                            <div className="prog-lans">
                                <RiJavascriptFill color="rgb(114, 39, 200)" size={25}/>
                                <span className="prog-name">JavaScript</span>
                            </div>
                            <div className="prog-lans">
                                <img className="c" src={C} alt="" />
                                <span className="prog-name">C</span>
                            </div>
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
