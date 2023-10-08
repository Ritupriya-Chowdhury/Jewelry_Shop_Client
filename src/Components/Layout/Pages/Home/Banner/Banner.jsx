import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Img1 from '../../../../../assets/Images/Banner/1.png'
import Img2 from '../../../../../assets/Images/Banner/2(1).jpg'
import Img3 from '../../../../../assets/Images/Banner/3.jpg'
import Img4 from '../../../../../assets/Images/Banner/1.jpg'




const Banner = () => {
    return (
        <div className="pt-24 md:pb-4">
        <Carousel>
        
        {/* className="w-10/12 rounded-lg shadow-2xl mt-20 md:mt-0 mx-auto" */}
       
            <div >
              <img src={Img1}  />
              
            </div>
         
               
            <div >
              <img src={Img2}  />
              
            </div>
         
            <div >
              <img src={Img3}  />
              
            </div>
            <div >
              <img src={Img4}  />
              
            </div>
            
         
            </Carousel>
      </div>
    );
};

export default Banner;