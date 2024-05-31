import logo from '../../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-12'>
         <img className='pb-5' src={logo} alt="" />
         <p className='text-lg'>Journalism Without Fear or Favour</p>
         <p className='text-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>  
        </div>
    );
};

export default Header;