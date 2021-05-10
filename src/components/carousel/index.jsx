import Slider from 'react-slick';
import classnames from 'classnames';

export function Carousel({ items, component: Component, settings }) {
  return (
    <Slider {...settings}>
      {items.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </Slider>
  );
}

export function Arrow({ icon: Icon, onClick, className }) {
  return (
    <div className={classnames('slider-arrow', className)} onClick={onClick}>
      <Icon />
    </div>
  );
}