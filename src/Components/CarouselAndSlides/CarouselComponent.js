import React from 'react';
import  Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
	dots: true,
	infinite: true,
	speed: 1500,
	slidesToShow: 2,
	slidesToScroll: 2,
	initialSlide: 0,
	autoplay: true,
	autoplaySpeed: 5000,
	pauseOnHover: true,
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2	,
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

const CarouselComponent = () => (
        <div className="row">
            <div className="col-md-12">	
				<div className="panel panel-flat">
					<div className="panel-body">
						<Slider {...settings}>
							<div>
								<img src="http://placekitten.com/g/300/150" alt="" />
							</div>
							<div>
								<img src="http://placekitten.com/g/300/150" alt="" />
							</div>
							<div>
								<img src="http://placekitten.com/g/300/150" alt="" />
							</div>
							<div>
								<img src="http://placekitten.com/g/300/150" alt="" />
							</div>
							<div>
								<img src="http://placekitten.com/g/300/150" alt="" />
							</div>
							<div>
								<img src="http://placekitten.com/g/300/150" alt="" />
							</div>
							<div>
								<img src="http://placekitten.com/g/300/150" alt="" />
							</div>
							<div>
								<img src="http://placekitten.com/g/300/150" alt="" />
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>		
);

export default CarouselComponent;
