import React from 'react'

export default function ProductComponent(props) {
  return (
    <>
         <div className="offers_item rating_5">
                  <div className="row">
                    <div className="col-lg-1 temp_col" />
                    <div className="col-lg-3 col-1680-4">
                      <div className="offers_image_container">
                        {/* Image by https://unsplash.com/@rktkn */}
                        <div
                          className="offers_image_background"
                          style={{ backgroundImage: `url(${props.car.anh || "https://i.pinimg.com/564x/f7/a5/48/f7a5489830eef765b2ba8bc77f66e25d.jpg"})` }}
                        />
                        <div className="offer_name">
                          <a href=" single_listing.html"></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="offers_content">
                        <div className="offers_price">
                          ${props.car.gia}<span>Một chiều</span>
                        </div>
                        <div
                          className="rating_r rating_r_4 offers_rating"
                          data-rating={4}
                        >
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                        <p className="offers_text">
                        {props.name || "Nha xe Chí Linh"}
                        </p>
                        <div className="offers_icons">
                            {props.car.tuyenDuong || props.car.moTa }
                        </div>
                        <div className="button book_button">
                          <a href=" #">
                          book
                          <span />
                          <span />
                          <span />
                          </a>
                        </div>
                        <div className="offer_reviews">
                          <div className="offer_reviews_content">
                            <div className="offer_reviews_title">very good</div>
                            <div className="offer_reviews_subtitle">
                              100 reviews
                            </div>
                          </div>
                          <div className="offer_reviews_rating text-center">
                            8.1
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                 
                </div>
    </>
  )
}
