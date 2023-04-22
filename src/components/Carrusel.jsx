import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../assets/css/carousel.css'

function Slider() {

  return (
    
    <Carousel className='slider'>

      <Carousel.Item className='slider_item'>
      <div className='gradient' >
                
                </div>
                
                <div >
                <img
                  className="d-block w-100"
                  src="./src/assets/img/slide_1.jpg"
                  alt="Third slide"
                />
                
        
                <Carousel.Caption className='slider_caption'>
                  
                    <div className='slider_label' >
                        <h3 className='tittle'>FORTALECIMIENTO</h3>
                        <h3 className='tittle'>PROFESIONAL</h3>
                        <p className='description'>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo cupiditate dolorem aperiam doloribus eius aspernatur reiciendis porro accusantium. Maiores sunt dolore ratione ad, impedit et debitis ea architecto praesentium.
                        </p>
                        <Link to='/fortalecimientos' className='butn'>Mas Informacion</Link>

                    </div>
                  
                </Carousel.Caption>
                </div>
      </Carousel.Item>

      <Carousel.Item className='slider_item'>
        <div className='gradient'>
                
        </div>
        
        <div>
        <img
          className="d-block w-100"
          src="./src/assets/img/slide_2.jpg"
          alt="Third slide"
        />
        

        <Carousel.Caption className='slider_caption'>
          
            <div className='slider_label'>
                <h3 className='tittle'>FORTALECIMIENTO</h3>
                <h3 className='tittle'>PROFESIONAL</h3>
                <p className='description'>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo cupiditate dolorem aperiam doloribus eius aspernatur reiciendis porro accusantium. Maiores sunt dolore ratione ad, impedit et debitis ea architecto praesentium.
                </p>
                <Link to='/fortalecimientos' className='butn'>Mas Informacion</Link>
            </div>
          
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      
      <Carousel.Item className='slider_item'>
        <div className='gradient'>
                
        </div>
        
        <div>
        <img
          className="d-block w-100"
          src="./src/assets/img/slide_3.jpg"
          alt="Third slide"
        />
        

        <Carousel.Caption className='slider_caption'>
          
            <div className='slider_label'>
                <h3 className='tittle'>FORTALECIMIENTO</h3>
                <h3 className='tittle'>PROFESIONAL</h3>
                <p className='description'>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo cupiditate dolorem aperiam doloribus eius aspernatur reiciendis porro accusantium. Maiores sunt dolore ratione ad, impedit et debitis ea architecto praesentium.
                </p>
                <Link to='/fortalecimientos' className='butn'>Mas Informacion</Link>
            </div>
          
        </Carousel.Caption>
        </div>
        
        
      </Carousel.Item>
      <Carousel.Item className='slider_item'>
        <div className='gradient'>
                
        </div>
        
        <div>
        <img
          className="d-block w-100"
          src="./src/assets/img/slide_4.jpg"
          alt="Third slide"
        />
        

        <Carousel.Caption className='slider_caption'>
          
            <div className='slider_label'>
                <h3 className='tittle'>FORTALECIMIENTO</h3>
                <h3 className='tittle'>PROFESIONAL</h3>
                <p className='description'>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo cupiditate dolorem aperiam doloribus eius aspernatur reiciendis porro accusantium. Maiores sunt dolore ratione ad, impedit et debitis ea architecto praesentium.
                </p>
                <Link to='/fortalecimientos' className='butn'>Mas Informacion</Link>
            </div>
          
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;