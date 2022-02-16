import logo from '../../pages/images/Logo.png';
import { Wrapper } from './Footer-styles';

const Footer = () => {
    return (
        <Wrapper>
            <img src={logo} alt='logo'/>
            <div className='text'>
            <div className="social-media">
            <i class="fa fa-instagram"></i>
            <i class="fa fa-twitter"></i>
            </div>
            <div className="terms">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
            </div>
            <div>
                <p>2022 Splitski</p>
            </div>
            </div>
        </Wrapper>
    )
}

export default Footer;