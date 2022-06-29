
import React from 'react'
import { Link } from 'react-router-dom';
import "./pricingCardStyles.css";
const PricingCard = () => {
  return (
		<div className="pricing">
			<div className="card-container">
				<div className="card">
					<h3>-Basic-</h3>
					<span className="bar"></span>
					<p className="btc">ETB 5,000</p>
					<p>- 3 Days -</p>
					<p>- 3 pages -</p>
					<p>- Featured -</p>
					<p>- Responsive Design -</p>
					<Link to="/contact" className="btn">
						PURCHASE NOW
					</Link>
				</div>
				<div className="card">
					<h3>-Premuim-</h3>
					<span className="bar"></span>
					<p className="btc">ETB 10,000</p>
					<p>- 2 Days -</p>
					<p>- 5 pages -</p>
					<p>- Featured -</p>
					<p>- Responsive Design -</p>
					<Link to="/contact" className="btn">
						PURCHASE NOW
					</Link>
				</div>
				<div className="card">
					<h3>-Business-</h3>
					<span className="bar"></span>
					<p className="btc">ETB 15,000</p>
					<p>- 5 Days -</p>
					<p>- 8 pages -</p>
					<p>- Featured -</p>
					<p>- Responsive Design -</p>
					<Link to="/contact" className="btn">
						PURCHASE NOW
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PricingCard
