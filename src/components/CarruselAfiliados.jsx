import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import '../assets/css/carousel_afi.css'

function CarruselAfiliados() {
  return (
    <div className='afi_carrusel'>
        <h2 className='afi_tittle'>Nuestros Afiliados</h2>
    <Carousel variant="dark">
      <Carousel.Item className='afiliado'>
        <div className='afi_perfil'>
            <img src="./src/assets/img/perfil.png" alt="First slide"/>
            <div className='afi_info'>
                <h3>Empresa</h3>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae metus at lectus volutpat dapibus sed feugiat erat. Aenean tempus massa a erat rutrum ultricies. Integer”</p>
                <Link className='button_afi'>Afiliate</Link>
            </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item className='afiliado'>
        <div className='afi_perfil'>
            <img src="./src/assets/img/perfil.png" alt="First slide"/>
            <div className='afi_info'>
                <h3>Empresa</h3>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae metus at lectus volutpat dapibus sed feugiat erat. Aenean tempus massa a erat rutrum ultricies. Integer”</p>
                <Link className='button_afi'>Afiliate</Link>
            </div>
        </div>
        
      </Carousel.Item>
      <Carousel.Item className='afiliado'>
        <div className='afi_perfil'>
            <img src="./src/assets/img/perfil.png" alt="First slide"/>
            <div className='afi_info'>
                <h3>Empresa</h3>
                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae metus at lectus volutpat dapibus sed feugiat erat. Aenean tempus massa a erat rutrum ultricies. Integer”</p>
                <Link className='button_afi'>Afiliate</Link>
            </div>
        </div>
        
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default CarruselAfiliados;