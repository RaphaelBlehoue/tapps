import React from 'react';
import ProductTopStore from './ProductTopStore';

const ProductListFil = () => (
	<div className="content-group-lg">
		<div className="col-sm-8">
			<div className="thumbnail">
				<div className="thumb">
					<a>
						<img src="http://placehold.it/624x327" className="img-responsive img-rounded" alt="" />
					</a>
				</div>
			</div>
		</div>
		<div className="col-sm-4">
			<div className="thumbnail">
				<div className="thumb">
					<a>
						<img src="http://placehold.it/312x327" className="img-responsive img-rounded" alt="" />
					</a>
				</div>
			</div>
        </div>
        <div className="clearfix"/>
        <ProductTopStore/>
	</div>
);

export default ProductListFil;