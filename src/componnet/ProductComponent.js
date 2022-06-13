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
                          style={{ backgroundImage: `url(https://media.baodautu.vn/Images/viethuong/2021/05/12/bx.jpg` }}
                        />
                        <div className="offer_name">
                          <a href=" single_listing.html"></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <div className="offers_content">
                        <div className="offers_price">
                          ${props.car.price}<span>Một chiều</span>
                        </div>
                        <div
                          className="rating_r rating_r_4 offers_rating"
                          data-rating={4}
                        >
                        </div>
                        <p className="offers_text">
                        {props.car.homeCar || "Nha xe Phương Trang"}
                        </p>
                        <div className="offers_icons">
                          Thông tin: {(props.car.note & props.car.timeStart )  || props.car.phone || "Đang được cập nhật" }
                        </div>
                        <div className="button book_button">
                          <a href="https://vexere.com/">
                          book
                          <span />
                          <span />
                          <span />
                          </a>
                        </div>
                        <div className="offer_reviews">
                          <div className="offer_reviews_content">
                            <div className="offer_reviews_title">Tuyến đường: {props.car.route}</div>
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
