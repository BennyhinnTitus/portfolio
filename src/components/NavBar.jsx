import Lottie from 'lottie-react';
import laptopAnimation from '../utils/laptopAnimation';

const NavBar = () => {
    const styles = { 
        height: 170, 
        width: 170, 
        paddingTop: 10, 
        paddingLeft: 30 
    }

    return (
        <div className="NavBar">
            <div className="logo-container"> 
                <Lottie 
                    animationData={laptopAnimation} 
                    loop={true}
                    style={styles} 
                />
            </div>
            <div className="btn-container">
                <button className="btn">Home</button>
                <button className="btn">About</button>
                <button className="btn">Skills</button>
                <button className="btn">Projects</button>
                <button className="btn">Contact</button>
            </div>
        </div>
    )
}

export default NavBar
