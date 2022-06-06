import React from 'react'

export default function SearchComponent() {
  return (
    <div className="container fill_height no-padding">
    <div className="row fill_height no-margin">
      <div className="col fill_height no-padding">
        {/* Search Tabs */}
        <div className="search_tabs_container">
          <div className="search_tabs d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
            <div className="search_tab active d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/suitcase.png" alt="" /><span>hotels</span></div>
            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/bus.png" alt="" />car rentals</div>
            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/departure.png" alt="" />flights</div>
            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/island.png" alt="" />trips</div>
            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/cruise.png" alt="" />cruises</div>
            <div className="search_tab d-flex flex-row align-items-center justify-content-lg-center justify-content-start"><img src="images/diving.png" alt="" />activities</div>
          </div>		
        </div>
        {/* Search Panel */}

        <div className="search_panel active">
  <form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start">
    <div className="search_item">
      <div>destination</div>
      <input type="text" className="destination search_input" required="required" />
    </div>
    <div className="search_item">
      <div>check in</div>
      <input type="text" className="check_in search_input" placeholder="YYYY-MM-DD" />
    </div>
    <div className="search_item">
      <div>check out</div>
      <input type="text" className="check_out search_input" placeholder="YYYY-MM-DD" />
    </div>
    <div className="search_item">
      <div>adults</div>
      <select name="adults" id="adults_1" className="dropdown_item_select search_input">
        <option>01</option>
        <option>02</option>
        <option>03</option>
      </select>
    </div>
    <div className="search_item">
      <div>children</div>
      <select name="children" id="children_1" className="dropdown_item_select search_input">
        <option>0</option>
        <option>02</option>
        <option>03</option>
      </select>
    </div>
    <div className="extras">
      <ul className="search_extras clearfix">
        <li className="search_extras_item">
          <div className="clearfix">
            <input type="checkbox" id="search_extras_1" className="search_extras_cb" />
            <label htmlFor="search_extras_1">Pet Friendly</label>
          </div>	
        </li>
        <li className="search_extras_item">
          <div className="clearfix">
            <input type="checkbox" id="search_extras_2" className="search_extras_cb" />
            <label htmlFor="search_extras_2">Car Parking</label>
          </div>
        </li>
        <li className="search_extras_item">
          <div className="clearfix">
            <input type="checkbox" id="search_extras_3" className="search_extras_cb" />
            <label htmlFor="search_extras_3">Wireless Internet</label>
          </div>
        </li>
        <li className="search_extras_item">
          <div className="clearfix">
            <input type="checkbox" id="search_extras_4" className="search_extras_cb" />
            <label htmlFor="search_extras_4">Reservations</label>
          </div>
        </li>
        <li className="search_extras_item">
          <div className="clearfix">
            <input type="checkbox" id="search_extras_5" className="search_extras_cb" />
            <label htmlFor="search_extras_5">Private Parking</label>
          </div>
        </li>
        <li className="search_extras_item">
          <div className="clearfix">
            <input type="checkbox" id="search_extras_6" className="search_extras_cb" />
            <label htmlFor="search_extras_6">Smoking Area</label>
          </div>
        </li>
        <li className="search_extras_item">
          <div className="clearfix">
            <input type="checkbox" id="search_extras_7" className="search_extras_cb" />
            <label htmlFor="search_extras_7">Wheelchair Accessible</label>
          </div>
        </li>
        <li className="search_extras_item">
          <div className="clearfix">
            <input type="checkbox" id="search_extras_8" className="search_extras_cb" />
            <label htmlFor="search_extras_8">Pool</label>
          </div>
        </li>
      </ul>
    </div>
    <div className="more_options">
      <div className="more_options_trigger">
        <a href="#">load more options</a>
      </div>
      <ul className="more_options_list clearfix">
        <li className="more_options_item">
          <div className="clearfix">
            <input type="checkbox" id="more_options_1" className="search_extras_cb" />
            <label htmlFor="more_options_1">Pet Friendly</label>
          </div>	
        </li>
        <li className="more_options_item">
          <div className="clearfix">
            <input type="checkbox" id="more_options_2" className="search_extras_cb" />
            <label htmlFor="more_options_2">Car Parking</label>
          </div>
        </li>
      </ul>
    </div>
    <button className="button search_button">search<span /><span /><span /></button>
  </form>
</div>




        {/* Search Panel */}

      </div>
    </div>
  </div>
  
  )
}
