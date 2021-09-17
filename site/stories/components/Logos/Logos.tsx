import React, { ReactNode } from "react"
import logo from './Assets/Logo.png'
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const Logos = (props: {}) => {

  const { } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    nextArrow: <FontAwesomeIcon  icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon  icon={faChevronLeft} />
  };

  return (
    <div className={`Logos`}>
      <Slider {...settings} >

        <div >
          <img src={logo as any} title="Rainforest Concern" />
        </div>
        <div >
          <img src={logo as any} title="Rainforest Concern" />
        </div>
        <div >
          <img src={logo as any} title="Rainforest Concern" />
        </div>
        <div >
          <img src={logo as any} title="Rainforest Concern" />
        </div>

      </Slider >
    </div>
  )
}