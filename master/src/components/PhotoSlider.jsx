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
      autoplay: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          dots: false
        }
      }]

    };
    return (
      <div>
        <a href="#" style={{
          position: "absolute",
          top: "10px",
          right: "10px"
        }}><span className="fa fa-2x fa-times-circle-o"></span></a>
        <div className="content">
          <div className="slide-container">
            <Slider {...settings}>
              {photos.map(photo => {
                return (
                  <div key={photo.slug}>
                    <img src={photo.original} />
                  </div>
                )
              })}
            </Slider>
            </div>
        </div>
      </div>
    )
  }
}
