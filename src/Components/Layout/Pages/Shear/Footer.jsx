import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../../assets/cover.png'
const Footer = () => {
    return (
        <div className="bg-orange-300 pb-4 pt-12">
            <div className='grid grid-cols-1 md:grid-cols-3 text-white mb-4'>
                <div className="col bg-orange-800  p-8">
                    <div className='ml-16 md:mx-2'>
                    <div className='flex '>
                        <div ><img className=' h-16' src={logo}  alt="" /></div>
                       
                    </div>
                    <p className='mt-2 ml-10'>
                        About Us

                    </p>

                    </div>
                </div>
                <div className="col bg-orange-900 text-center p-8 ">
                    <p className="text-xl">CONTACT US</p>
                    <p className='my-2'>
                        +88 123456789 <br />
                        traditional+new@gmail.com <br />

                    </p>

                </div>
                <div className='col   bg-orange-800'>
                    <div className="p-8 text-center">
                        <p className="text-2xl">Follow Us</p>
                        <p>Join us on social media</p>
                        <div className="flex text-white ml-32 md:ml-20  my-2 ">
                            <p className='px-2'><FaFacebookF></FaFacebookF></p>
                            <p className='px-2'><FaTwitter></FaTwitter></p>
                            <p className='px-2'><FaInstagram></FaInstagram></p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-slate-600 text-center mx-4">Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </div>
    );
};

export default Footer;