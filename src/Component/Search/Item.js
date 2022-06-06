import React from 'react'

export default function Item() {
  return (
    <>
        <div className="col-lg-3 col-sm-6">
            <div className="trending_item clearfix">
                <div className="trending_image">
                    <img src="images/trend_1.png" alt="https://unsplash.com/@fransaraco" />
                </div>
                    <div className="trending_content">
                        <div className="trending_title"><a href="#">grand hotel</a></div>
                        <div className="trending_price">From $182</div>
                        <div className="trending_location">madrid, spain</div>
                    </div>
            </div>
        </div>
    </>
  )
}
