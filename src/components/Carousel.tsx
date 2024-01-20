import  {useSpringCarousel}  from 'react-spring-carousel'
import { SlideOne } from './slides/slideOne';
import { SlideTwo } from './slides/slideTwo';
import { SlideThree } from './slides/slideThree';

export function Carousel() {
  const { carouselFragment } = useSpringCarousel({
    carouselSlideAxis: 'y',
    onscrollend: true,
    items: [
      {
        id: 'item-1',
        renderItem: (
          <div className='w-full h-full flex items-center justify-center'><SlideOne/></div>
        )
      },
      {
        id: 'item-2',
        renderItem: (
          <div className='w-full h-full flex items-center justify-center'><SlideTwo/></div>
        )
      },
      {
        id: 'item-3',
        renderItem: (
          <div className='w-full h-full flex items-center justify-center'><SlideThree/></div>
        )
      }
    ]
  })

  return (
    <div className='h-full w-full mx-auto overflow-y-hidden'>
      {carouselFragment}
    </div>
  );
}