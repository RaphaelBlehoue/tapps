import React from 'react';
import  Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
	dots: true,
	infinite: true,
	speed: 1500,
	slidesToShow: 3,
	slidesToScroll: 3,
	initialSlide: 0,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: true,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: true,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 5000,
				pauseOnHover: true,
			},
		},
	],
};

const ContainerCarouselComponent = () => (
	<Slider {...settings}>
		<div>
			<img src="http://placekitten.com/g/211/109" alt="" width="auto"/>
		</div>
		<div>
			<img src="http://placekitten.com/g/211/109" alt="" width="auto"/>
		</div>
		<div>
			<img src="http://placekitten.com/g/211/109" alt="" width="auto"/>
		</div>
		<div>
			<img src="http://placekitten.com/g/211/109" alt="" width="auto"/>
		</div>
		<div>
			<img src="http://placekitten.com/g/211/109" alt="" width="auto"/>
		</div>
		<div>
			<img src="http://placekitten.com/g/211/109" alt="" width="auto"/>
		</div>
		<div>
			<img src="http://placekitten.com/g/211/109" alt="" width="auto"/>
		</div>
		<div>
			<img src="http://placekitten.com/g/211/109" alt="" width="auto"/>
		</div>
	</Slider>
);

export default ContainerCarouselComponent;
