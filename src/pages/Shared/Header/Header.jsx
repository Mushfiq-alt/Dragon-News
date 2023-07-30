import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className='text-center'>

                <img src={logo} alt="" />
                <p className=''><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMM Do YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;