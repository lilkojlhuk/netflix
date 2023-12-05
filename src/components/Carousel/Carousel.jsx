import './Carousel.scss'
import Flickity from 'react-flickity-component';
import CarouselItem from './CarouselItem';

const flickityOptions = {
    initialIndex: 0,
    prevNextButtons: true,
    pageDots: false,
    wrapAround: false,
    draggable: true,
    contain: true,
    cellAlign: 'left',
    groupCells: 3
};

const Carousel = ({ item, category }) => {
    return (
        <div className='carousel'>
            <Flickity
                className='carousel__slider'
                elementType='div'
                disableImagesLoaded={true} 
                options={flickityOptions}
                reloadOnUpdate
                static
            >
                {item.filter(f => f.category === category).map(e => ( <CarouselItem e={e}  key={e.id} /> ))}
            </Flickity>
        </div>
    );
};

export default Carousel;