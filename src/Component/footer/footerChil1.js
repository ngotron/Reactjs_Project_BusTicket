import React from "react";
import { Link } from "react-router-dom";

const FooterChil1 = () => {
  return (
    <>
      <div className="col-lg-3 footer_column">
        <div className="footer_col">
          <div className="footer_content footer_about">
            <div className="logo_container footer_logo">
              <div className="logo">
                <Link to="/">
                  <img src="images/logo.png" alt="" />
                  travelix
                </Link>
              </div>
            </div>
            <p className="footer_about_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit
              urna. Integer eleme ntum orci eu vehicula pretium.
            </p>
            <ul className="footer_social_list">
              <li className="footer_social_item">
                <a href="#">
                  <i className="fa fa-pinterest" />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="#">
                  <i className="fa fa-facebook-f" />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="#">
                  <i className="fa fa-dribbble" />
                </a>
              </li>
              <li className="footer_social_item">
                <a href="#">
                  <i className="fa fa-behance" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterChil1;
