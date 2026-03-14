import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialLinks from '../utils/socialLinks';
import Lottie from 'lottie-react';
import laptopAnimation from '../utils/laptopAnimation';

const Home = () => {
    const styles = { 
        height: 510, 
        width: 510, 
        paddingBottom: 30,
    }

    const mappedSocialLinks = socialLinks.map(link => {
        return (
        <button 
            className='link-btn'
            onClick={() => window.open(link.path , "_blank")}
        >
            <FontAwesomeIcon 
                className='social-links'
                icon={link.icon}
                shake
                size='2x'
                style={{ color: "rgb(122, 42, 214)" }}
            />
        </button>
        )
    })

    return (
        <div className="Home">
            <div className="content">
                <span className="first-name">Bennyhinn</span>
                <span className="last-name">Titus</span>
                <span className='role'>Cyber Enthusiast | Full Stack Web Developer</span>
                <p className="intro">I’m a Cybersecurity student passionate about turning ideas into secure, modern web experiences and building robust backend systems that power real-world applications.</p>
                <div className="links-container">{mappedSocialLinks}</div>
            </div>
            <div className="animation-container">
                <Lottie 
                    animationData={laptopAnimation} 
                    loop={true}
                    style={styles} 
                />
            </div>
        </div>
    )
}

export default Home
