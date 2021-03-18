import Slider from 'react-slick';

export function Carousel({ items, component: Component, settings }) {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </Slider>
  );
}
