import React from 'react';
import ProductListFil from '../Pages/ProductList'

const ContainerProductFil = () => (
	<div className="row">
		<div className="col-md-12">
			<div className="panel panel-white border-top-lg border-top-blue">
				<div className="panel-heading">
					<h4 className="panel-title text-semibold text-blue-700">Store Name</h4>
				</div>
				<div className="panel-body">
					<ProductListFil />
				</div>
			</div>
		</div>
	</div>
);

export default ContainerProductFil;