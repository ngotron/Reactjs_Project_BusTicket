import React, { Component } from 'react'

export default class Navba extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            {/* Offers Sorting */}
            <div className="offers_sorting_container">
              <ul className="offers_sorting">
                <li>
                  <span className="sorting_text">price</span>
                  <i className="fa fa-chevron-down" />
                  <ul>
                    <li
                      className="sort_btn"
                      data-isotope-option='{ "sortBy": "original-order" }'
                      data-parent=".price_sorting"
                    >
                      <span>show all</span>
                    </li>
                    <li
                      className="sort_btn"
                      data-isotope-option='{ "sortBy": "price" }'
                      data-parent=".price_sorting"
                    >
                      <span>ascending</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="sorting_text">location</span>
                  <i className="fa fa-chevron-down" />
                  <ul>
                    <li
                      className="sort_btn"
                      data-isotope-option='{ "sortBy": "original-order" }'
                    >
                      <span>default</span>
                    </li>
                    <li
                      className="sort_btn"
                      data-isotope-option='{ "sortBy": "name" }'
                    >
                      <span>alphabetical</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="sorting_text">stars</span>
                  <i className="fa fa-chevron-down" />
                  <ul>
                    <li className="filter_btn" data-filter="*">
                      <span>show all</span>
                    </li>
                    <li
                      className="sort_btn"
                      data-isotope-option='{ "sortBy": "stars" }'
                    >
                      <span>ascending</span>
                    </li>
                    <li className="filter_btn" data-filter=".rating_3">
                      <span>3</span>
                    </li>
                    <li className="filter_btn" data-filter=".rating_4">
                      <span>4</span>
                    </li>
                    <li className="filter_btn" data-filter=".rating_5">
                      <span>5</span>
                    </li>
                  </ul>
                </li>
                <li className="distance_item">
                  <span className="sorting_text">distance from center</span>
                  <i className="fa fa-chevron-down" />
                  <ul>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>distance</span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="sorting_text">reviews</span>
                  <i className="fa fa-chevron-down" />
                  <ul>
                    <li className="num_sorting_btn">
                      <span>review</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>review</span>
                    </li>
                    <li className="num_sorting_btn">
                      <span>review</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
