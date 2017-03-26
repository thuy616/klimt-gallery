import React, { Component } from 'react';
import _ from 'lodash';
import Slider from 'react-slick';

export default class PhotoSlider extends Component {

  render() {
    const { photos, activePhoto } = this.props;
    const initialSlide = Number(activePhoto);

    const settings = {
      customPaging: function(i) {
        return <a><img src={photos[i].thumbnail} height='30' width='30' /></a>
      },
      dots: true,
      dotsClass: 'slick-dots slick-thumb',
      initialSlide: initialSlide,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: false
    };
    return (
      <div className="content">
        <Slider {...settings}>

          {photos.map(photo => {
            return (<div key={photo.slug}><img src={photo.original} /></div>)
          })}
          {/*
          <div><img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg'/></div>
          <div><img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg'/></div>
          <div><img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg'/></div>
          <div><img src='https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg'/></div>
          */}
        </Slider>
      </div>
    )
  }
}
