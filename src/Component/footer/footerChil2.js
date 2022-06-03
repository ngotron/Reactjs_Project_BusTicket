import React from "react";

const FooterChil2 = () => {
  return (
    <>
      <div className="col-lg-3 footer_column">
        <div className="footer_col">
          <div className="footer_title">blog posts</div>
          <div className="footer_content footer_blog">
            {"{"}/* {/* Footer blog item */} */{"}"}
            <div className="footer_blog_item clearfix">
              <div className="footer_blog_image">
                <img
                  src="images/footer_blog_1.jpg"
                  alt="https://unsplash.com/@avidenov"
                />
              </div>
              <div className="footer_blog_content">
                <div className="footer_blog_title">
                  <a href="blog.html">Travel with us this year</a>
                </div>
                <div className="footer_blog_date">Nov 29, 2017</div>
              </div>
            </div>
            {"{"}/* {/* Footer blog item */} */{"}"}
            <div className="footer_blog_item clearfix">
              <div className="footer_blog_image">
                <img
                  src="images/footer_blog_2.jpg"
                  alt="https://unsplash.com/@deannaritchie"
                />
              </div>
              <div className="footer_blog_content">
                <div className="footer_blog_title">
                  <a href="blog.html">New destinations for you</a>
                </div>
                <div className="footer_blog_date">Nov 29, 2017</div>
              </div>
            </div>
            {"{"}/* {/* Footer blog item */} */{"}"}
            <div className="footer_blog_item clearfix">
              <div className="footer_blog_image">
                <img
                  src="images/footer_blog_3.jpg"
                  alt="https://unsplash.com/@bergeryap87"
                />
              </div>
              <div className="footer_blog_content">
                <div className="footer_blog_title">
                  <a href="blog.html">Travel with us this year</a>
                </div>
                <div className="footer_blog_date">Nov 29, 2017</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FooterChil2;
