import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialLinks from '../utils/socialLinks';

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
                style={{ color: "rgb(97, 32, 172)" }}
            />
        </button>
        )
    })

    return (
        <div className="Home">
            <div className="content">
                <span className="name">Bennyhinn Titus D</span>
                <span>Security Engineer | Web Developer</span>
                <p className="intro">I'm a Cybersecurity undergraduate with a passion for crafting secure, modern web experiences. I love turning ideas into interactive websites and constantly exploring new tech to sharpen my skills.</p>
                <div className="links-container">{mappedSocialLinks}</div>
            </div>
            <div className="animation-container">Can't find an animation...</div>
        </div>
    )
}

export default Home
