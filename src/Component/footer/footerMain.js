import React from "react";
import FooterChil1 from "./footerChil1";
import FooterChil2 from "./footerChil2";
import FooterChil3 from "./footerChil3";
import FooterChil4 from "./footerChil4";
const FooterMain = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          {/* colum 1 */}
          <FooterChil1 />
          {/* colum 2 */}
          <FooterChil2 />
          {/* colum 3 */}
          <FooterChil3 />
          {/* colum 4 */}
          <FooterChil4 />
        </div>
      </div>
    </footer>
  );
};
export default FooterMain;
