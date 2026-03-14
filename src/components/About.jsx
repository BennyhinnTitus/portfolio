import cards from "../utils/cards"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lottie from "lottie-react";
import monitorAnimation from "../utils/monitorAnimation"

const About = () => {
    const mappedCards = cards.map(card => {
        return (
        <div className="card">
            <span className="card-title">{card.title}</span>
            <span className="card-follow-up">{card.followUp}</span>
        </div>
        )
    })

    const styles = {
        height: 389,
        width: 389,
        marginTop: -40
    }

    return (
        <div className="About">
            <span className="title">About Me</span>
            <span className="follow-up">My Profile</span>
            
            <div className="content-container">
                <div className="about-animation">
                    <Lottie 
                        animationData={monitorAnimation}
                        loop={true}
                        style={styles}
                    />
                </div>
                <div className="actual-content">
                    <div className="display-cards">
                        {mappedCards}
                    </div>
                    <p className="desc">I have participated in hackathons, CTFs, and competitive programming, building faster adaptive and learning skills through real problem solving. I focus on experiencing new technologies to contribute and build live projects and applications. I seek opportunities to collaborate, innovate, and build impactful solutions.</p>
                    <button 
                        onClick={() => {window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}} 
                        className="download-resume"
                    >
                        Resume
                        <FontAwesomeIcon 
                            icon={['fas', 'file']}
                            size="lg"
                            style={{ color: "white" }}
                        /> 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
