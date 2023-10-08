import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Img1 from '../../../../../assets/Images/Category/bg-1.jpg'
import Img2 from '../../../../../assets/Images/Category/bg-2.jpg'
import Img3 from '../../../../../assets/Images/Category/bg-3.jpg'
import SectionTitle from '../Share/Sectiontitle';


const Category = () => {
    return (
        <div className='py-12'>
            <SectionTitle heading={'Our Top Jewelry'} subHeading={'Order In Online'}></SectionTitle>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       <SwiperSlide><img src={Img1} className='py-8'></img></SwiperSlide>
        <SwiperSlide><img src={Img2} className='py-8'></img></SwiperSlide>
        <SwiperSlide><img src={Img3} className='py-8'></img></SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Category;