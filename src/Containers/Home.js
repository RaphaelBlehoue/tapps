import React from 'react';
import { connect } from 'react-redux';
import { LinkButton } from '../Components';

const Home = () => (
    <div className="text-center">
       <h1>
         Page Home Inspired by
         {' '}<a href="https://www.yelp.fr"> Yelp Website</a>
       </h1>
        <LinkButton url="/selling/getting-start" className="btn btn-primary">
             Créer votre boutique
        </LinkButton>
    </div>
);

export default connect(null)(Home);
