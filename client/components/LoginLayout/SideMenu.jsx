import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return (
      <div className="left side-menu">
        <div className="slimScrollDiv">
          <div className="sidebar-inner slimscrollleft">
            <div id="sidebar-menu">
              <ul>
                <li className="menu-title">Main</li>
                <li className="active">
                  <a href="index.html" className="waves-effect waves-primary active"><i className="md md-dashboard" /><span> Dashboard </span></a>
                </li>
                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-palette" /> <span> UI Kit </span>
                    <span className="menu-arrow" /></a>
                  <ul className="list-unstyled">
                    <li><a href="ui-buttons.html">Buttons</a></li>
                    <li><a href="ui-panels.html">Panels</a></li>
                    <li><a href="ui-portlets.html">Portlets</a></li>
                    <li><a href="ui-checkbox-radio.html">Checkboxs-Radios</a></li>
                    <li><a href="ui-tabs.html">Tabs &amp; Accordions</a></li>
                    <li><a href="ui-modals.html">Modals</a></li>
                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                    <li><a href="ui-notification.html">Notification</a></li>
                    <li><a href="ui-bootstrap.html">BS Elements</a></li>
                    <li><a href="ui-typography.html">Typography</a></li>
                  </ul>
                </li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-invert-colors-on" /><span> Components </span> <span className="label label-success pull-right">6</span> </a>
                  <ul className="list-unstyled">
                    <li><a href="components-grid.html">Grid</a></li>
                    <li><a href="components-carousel.html">Carousel</a></li>
                    <li><a href="components-widgets.html">Widgets</a></li>
                    <li><a href="components-nestable-list.html">Nesteble</a></li>
                    <li><a href="components-range-sliders.html">Range Sliders </a></li>
                    <li><a href="components-sweet-alert.html">Sweet Alerts </a></li>
                  </ul>
                </li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-redeem" />
                    <span> Icons </span> <span className="menu-arrow" /> </a>
                  <ul className="list-unstyled">
                    <li><a href="icons-glyphicons.html">Glyphicons</a></li>
                    <li><a href="icons-materialdesign.html">Material Design</a></li>
                    <li><a href="icons-themifyicon.html">Themify Icons</a></li>
                    <li><a href="icons-ionicons.html">Ion Icons</a></li>
                    <li><a href="icons-fontawesome.html">Font awesome</a></li>
                    <li><a href="icons-weather.html">Weather Icons</a></li>
                  </ul>
                </li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-now-widgets" /><span> Forms </span> <span className="menu-arrow" /></a>
                  <ul className="list-unstyled">
                    <li><a href="form-elements.html">General Elements</a></li>
                    <li><a href="form-advanced.html">Advanced Form</a></li>
                    <li><a href="form-validation.html">Form Validation</a></li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                    <li><a href="form-wysiwig.html">WYSIWYG Editor</a></li>
                    <li><a href="form-summernote.html">Summernote</a></li>
                    <li><a href="form-uploads.html">Multiple File Upload</a></li>
                    <li><a href="form-xeditable.html">X-editable</a></li>
                  </ul>
                </li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-view-list" /><span> Tables </span> <span className="menu-arrow" /></a>
                  <ul className="list-unstyled">
                    <li><a href="tables-basic.html">Basic Tables</a></li>
                    <li><a href="tables-datatable.html">Data Table</a></li>
                    <li><a href="tables-editable.html">Editable Table</a></li>
                    <li><a href="tables-responsive.html">Responsive Table</a></li>
                    <li><a href="tables-tablesaw.html">Tablesaw Table</a></li>
                    <li><a href="tables-foo-tables.html">Foo Table</a></li>
                  </ul>
                </li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-poll" /><span> Charts </span> <span className="menu-arrow" /> </a>
                  <ul className="list-unstyled">
                    <li><a href="chart-flot.html">Flot Chart</a></li>
                    <li><a href="chart-morris.html">Morris Chart</a></li>
                    <li><a href="chart-chartist.html">Chartist chart</a></li>
                    <li><a href="chart-nvd3.html">Nvd3 charts</a></li>
                    <li><a href="chart-chartjs.html">Chartjs charts</a></li>
                    <li><a href="chart-peity.html">Peity Charts</a></li>
                    <li><a href="chart-sparkline.html">Sparkline Charts</a></li>
                    <li><a href="chart-other.html">Other Chart</a></li>
                  </ul>
                </li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-place" /><span> Maps </span><span className="label label-primary pull-right">2</span></a>
                  <ul className="list-unstyled">
                    <li><a href="map-google.html"> Google Map</a></li>
                    <li><a href="map-vector.html"> Vector Map</a></li>
                  </ul>
                </li>

                <li className="menu-title">More</li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-mail" /><span> Mail </span> <span className="menu-arrow" /></a>
                  <ul className="list-unstyled">
                    <li><a href="mail-inbox.html">Inbox</a></li>
                    <li><a href="mail-compose.html">Compose Mail</a></li>
                    <li><a href="mail-read.html">View Mail</a></li>
                  </ul>
                </li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-pages" /><span> Pages </span> <span className="menu-arrow" /></a>
                  <ul className="list-unstyled">
                    <li><a href="pages-blank.html">Blank Page</a></li>
                    <li><a href="pages-login.html">Login</a></li>
                    <li><a href="pages-register.html">Register</a></li>
                    <li><a href="pages-recoverpw.html">Recover Password</a></li>
                    <li><a href="pages-lock-screen.html">Lock Screen</a></li>
                    <li><a href="pages-confirmmail.html">Confirm Mail</a></li>
                    <li><a href="pages-404.html">404 Error</a></li>
                    <li><a href="pages-500.html">500 Error</a></li>
                  </ul>
                </li>

                <li className="has_sub">
                  <a href="javascript:void(0);" className="waves-effect waves-primary"><i className="md md-layers" /><span> Extras </span> <span className="menu-arrow" /></a>
                  <ul className="list-unstyled">
                    <li><a href="extras-profile.html">Profile</a></li>
                    <li><a href="extras-team.html">Team Members</a></li>
                    <li><a href="extras-timeline.html">Timeline</a></li>
                    <li><a href="extras-invoice.html">Invoice</a></li>
                    <li><a href="extras-calendar.html">Calendar</a></li>
                    <li><a href="extras-email-template.html">Email template</a></li>
                    <li><a href="extras-maintenance.html">Maintenance</a></li>
                    <li><a href="extras-coming-soon.html">Coming-soon</a></li>
                    <li><a href="extras-gallery.html">Gallery</a></li>
                    <li><a href="extras-pricing.html">Pricing</a></li>
                    <li><a href="extras-faq.html">FAQ</a></li>
                    <li><a href="extras-treeview.html">Treeview</a></li>
                  </ul>
                </li>

              </ul>
              <div className="clearfix" />
            </div>

            <div className="clearfix" />
          </div>
        </div>

        <div className="user-detail">
          <div className="dropup">
            <a href="" className="dropdown-toggle profile" data-toggle="dropdown" aria-expanded="true">
              <img src="assets/images/users/avatar-2.jpg" alt="user-img" className="img-circle" />
              <span className="user-info-span">
                <h5 className="m-t-0 m-b-0">John Deo</h5>
                <p className="text-muted m-b-0">
                  <small><i className="fa fa-circle text-success" /> <span>Online</span></small>
                </p>
              </span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="javascript:void(0)"><i className="md md-face-unlock" /> Profile</a></li>
              <li><a href="javascript:void(0)"><i className="md md-settings" /> Settings</a></li>
              <li><a href="javascript:void(0)"><i className="md md-lock" /> Lock screen</a></li>
              <li><a href="javascript:void(0)"><i className="md md-settings-power" /> Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
