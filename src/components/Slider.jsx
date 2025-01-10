import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Slider() {
  return (
    <Carousel>
                <div>
                    <img src="https://tp.jihadur.com/wp-content/uploads/2025/01/banner.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://tp.jihadur.com/wp-content/uploads/2025/01/banner-2.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://tp.jihadur.com/wp-content/uploads/2025/01/banner-2.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
  )
}
