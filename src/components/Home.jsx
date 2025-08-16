import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialLinks from '../utils/socialLinks';
import Lottie from 'lottie-react';
import codingAnimation from '../utils/codingAnimation';

const Home = () => {
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
                <span className='role'>Security Engineer | Web Developer</span>
                <p className="intro">I'm a CYS undergraduate passionate about building secure, modern web experiences and turning ideas into interactive sites while exploring new tech to enhance my skills.</p>
                <div className="links-container">{mappedSocialLinks}</div>
            </div>
            <div className="animation-container">
                <Lottie 
                    animationData={codingAnimation} 
                    loop={true}
                />
            </div>
        </div>
    )
}

export default Home
