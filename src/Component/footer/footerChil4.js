import React from "react";

const FooterChil4 = () => {
  return (
    <>
      <div class="col-lg-3 footer_column">
        <div class="footer_col">
          <div class="footer_title">contact info</div>
          <div class="footer_content footer_contact">
            <ul class="contact_info_list">
              <li class="contact_info_item d-flex flex-row">
                <div>
                  <div class="contact_info_icon">
                    <img src="images/placeholder.svg" alt="" />
                  </div>
                </div>
                <div class="contact_info_text">
                  4127 Raoul Wallenber 45b-c Gibraltar
                </div>
              </li>
              <li class="contact_info_item d-flex flex-row">
                <div>
                  <div class="contact_info_icon">
                    <img src="images/phone-call.svg" alt="" />
                  </div>
                </div>
                <div class="contact_info_text">2556-808-8613</div>
              </li>
              <li class="contact_info_item d-flex flex-row">
                <div>
                  <div class="contact_info_icon">
                    <img src="images/message.svg" alt="" />
                  </div>
                </div>
                <div class="contact_info_text">
                  <a
                    href="mailto:contactme@gmail.com?Subject=Hello"
                    target="_top"
                  >
                    contactme@gmail.com
                  </a>
                </div>
              </li>
              <li class="contact_info_item d-flex flex-row">
                <div>
                  <div class="contact_info_icon">
                    <img src="images/planet-earth.svg" alt="" />
                  </div>
                </div>
                <div class="contact_info_text">
                  <a href="https://colorlib.com">www.colorlib.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterChil4;
