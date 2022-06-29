import React from 'react'
import './FooterStyles.css'
import {
	FaHome,
	FaPhone,
	FaMailBulk,
	FaFacebook,
	FaTwitter,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						
						<FaHome size={20} style={{ marginRight: "2rem", color: "#fff" }} />
						<div>
							<p>05, Hawassa</p>
							<p>Ethiopia.</p>
						</div>
					</div>
					<div className="phone">
						<h4>
							<FaPhone
								size={20}
								style={{ marginRight: "2rem", color: "#fff" }}
							/>
							+251 927 664 232
						</h4>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk
								size={20}
								style={{ marginRight: "2rem", color: "#fff" }}
							/>
							atbusiness1221@gmail.com
						</h4>
					</div>
				</div>
				<div className="right">
					<h4>About Me</h4>
					<p>
						This me Abraham Tilahun. CEO and founder of my future company, and
						architect of my life. I enjoy discussing new projects and design
						challenges.
					</p>
					<div className="social">
						<FaFacebook
							size={30}
							style={{ marginRight: "1rem", color: "#fff" }}
						/>
						<FaTwitter
							size={30}
							style={{ marginRight: "1rem", color: "#fff" }}
						/>
						<FaLinkedin
							size={30}
							style={{ marginRight: "1rem", color: "#fff" }}
						/>
					</div>
				</div>
          </div>
          
		</div>
	);
}

export default Footer
