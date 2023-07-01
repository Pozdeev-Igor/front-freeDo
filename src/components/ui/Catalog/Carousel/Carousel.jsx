
import { Carousel } from "react-responsive-carousel";


const Carousels = ({image}) => {
 
  return (
    <Carousel autoPlay
    infiniteLoop='true'
    showThumbs={false} showStatus={false}
    >
    <div>
      <img alt="" src={image} />
    </div>
    <div>
      <img alt="" src={image} />
    </div>
    <div>
      <img alt="" src={image} />
    </div>
    </Carousel>
  );
}


export default Carousels;