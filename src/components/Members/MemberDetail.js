import React, { Component, PropTypes } from 'react';

class MembersDetail extends Component {

  createMarkup(html) {
    return {
      __html: html,
    };
  }

  render() {
    const {displayName, image, bio} = this.props;

    return (
      <div>
        {/* SLIDE TOP */}
        <div id="slidetop">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h6><i className="icon-heart" /> WHY SMARTY?</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa. </p>
              </div>
              <div className="col-md-4">
                <h6><i className="icon-attachment" /> RECENTLY VISITED</h6>
                <ul className="list-unstyled">
                  <li><a href="#"><i className="fa fa-angle-right" /> Consectetur adipiscing elit amet</a></li>
                  <li><a href="#"><i className="fa fa-angle-right" /> This is a very long text, very very very very very very very very very very very very </a></li>
                  <li><a href="#"><i className="fa fa-angle-right" /> Lorem ipsum dolor sit amet</a></li>
                  <li><a href="#"><i className="fa fa-angle-right" /> Dolor sit amet,consectetur adipiscing elit amet</a></li>
                  <li><a href="#"><i className="fa fa-angle-right" /> Consectetur adipiscing elit amet,consectetur adipiscing elit</a></li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6><i className="icon-envelope" /> CONTACT INFO</h6>
                <ul className="list-unstyled">
                  <li><b>Address:</b> PO Box 21132, Here Weare St, <br /> Melbourne, Vivas 2355 Australia</li>
                  <li><b>Phone:</b> 1-800-565-2390</li>
                  <li><b>Email:</b> <a href="mailto:support@yourname.com">support@yourname.com</a></li>
                </ul>
              </div>
            </div>
          </div>
          <a className="slidetop-toggle" href="#">{/* toggle button */}</a>
        </div>
        {/* /SLIDE TOP */}
        {/* wrapper */}
        <div id="wrapper">
          <div id="header" className="sticky clearfix">
            {/* TOP NAV */}
            <header id="topNav">
              <div className="container">
                {/* Mobile Menu Button */}
                <button className="btn btn-mobile" data-toggle="collapse" data-target=".nav-main-collapse">
                  <i className="fa fa-bars" />
                </button>
                {/* BUTTONS */}
                <ul className="pull-right nav nav-pills nav-second-main">
                  {/* SEARCH */}
                  <li className="search">
                    <a href="#">
                      <i className="fa fa-search" />
                    </a>
                    <div className="search-box">
                      <form action="page-search-result-1.html" method="get">
                        <div className="input-group">
                          <input type="text" name="src" placeholder="Search" className="form-control" />
                          <span className="input-group-btn">
                            <button className="btn btn-primary" type="submit">Search</button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </li>
                  {/* /SEARCH */}
                </ul>
                {/* /BUTTONS */}
                {/* Logo */}
                <a className="logo pull-left" href="index.html">
                  <img src="https://composersforum.org/sites/all/themes/acfzen/acfzen/logo.png" alt />
                </a>
                {/*
							Top Nav

							AVAILABLE CLASSES:
							submenu-dark = dark sub menu
						*/}
                <div className="navbar-collapse pull-right nav-main-collapse collapse">
                  <nav className="nav-main">
                    {/*
									NOTE

									For a regular link, remove "dropdown" class from LI tag and "dropdown-toggle" class from the href.
									Direct Link Example:

									<li>
										<a href="#">HOME</a>
									</li>
								*/}
                    <ul id="topMain" className="nav nav-pills nav-main">
                      <li className="dropdown">{/* HOME */}
                        <a className="dropdown-toggle" href="#">
                          HOME
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME CORPORATE
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-corporate-1.html">CORPORATE LAYOUT 1</a></li>
                              <li><a href="index-corporate-2.html">CORPORATE LAYOUT 2</a></li>
                              <li><a href="index-corporate-3.html">CORPORATE LAYOUT 3</a></li>
                              <li><a href="index-corporate-4.html">CORPORATE LAYOUT 4</a></li>
                              <li><a href="index-corporate-5.html">CORPORATE LAYOUT 5</a></li>
                              <li><a href="index-corporate-6.html">CORPORATE LAYOUT 6</a></li>
                              <li><a href="index-corporate-7.html">CORPORATE LAYOUT 7</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME PORTFOLIO
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-portfolio-1.html">PORTFOLIO LAYOUT 1</a></li>
                              <li><a href="index-portfolio-2.html">PORTFOLIO LAYOUT 2</a></li>
                              <li><a href="index-portfolio-masonry.html">PORTFOLIO MASONRY</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME BLOG
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-blog-1.html">BLOG LAYOUT 1</a></li>
                              <li><a href="index-blog-2.html">BLOG LAYOUT 2</a></li>
                              <li><a href="index-blog-3.html">BLOG LAYOUT 3</a></li>
                              <li><a href="index-blog-4.html">BLOG LAYOUT 4</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME SHOP
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-shop-1.html">SHOP LAYOUT 1</a></li>
                              <li><a href="index-shop-2.html">SHOP LAYOUT 2</a></li>
                              <li><a href="index-shop-3.html">SHOP LAYOUT 3</a></li>
                              <li><a href="index-shop-4.html">SHOP LAYOUT 4</a></li>
                              <li><a href="index-shop-5.html">SHOP LAYOUT 5</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME MAGAZINE
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-magazine-1.html">MAGAZINE LAYOUT 1</a></li>
                              <li><a href="index-magazine-2.html">MAGAZINE LAYOUT 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME LANDING PAGE
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-landing-1.html">LANDING PAGE LAYOUT 1</a></li>
                              <li><a href="index-landing-2.html">LANDING PAGE LAYOUT 2</a></li>
                              <li><a href="index-landing-3.html">LANDING PAGE LAYOUT 3</a></li>
                              <li><a href="index-landing-4.html">LANDING PAGE LAYOUT 4</a></li>
                              <li><a href="index-landing-5.html">LANDING PAGE LAYOUT 5</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME FULLSCREEN
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-fullscreen-revolution.html">FULLSCREEN - REVOLUTION</a></li>
                              <li><a href="index-fullscreen-youtube.html">FULLSCREEN - YOUTUBE</a></li>
                              <li><a href="index-fullscreen-local-video.html">FULLSCREEN - LOCAL VIDEO</a></li>
                              <li><a href="index-fullscreen-image.html">FULLSCREEN - IMAGE</a></li>
                              <li><a href="index-fullscreen-txt-rotator.html">FULLSCREEN - TEXT ROTATOR</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME ONE PAGE
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-onepage-default.html">ONE PAGE - DEFAULT</a></li>
                              <li><a href="index-onepage-revolution.html">ONE PAGE - REVOLUTION</a></li>
                              <li><a href="index-onepage-image.html">ONE PAGE - IMAGE</a></li>
                              <li><a href="index-onepage-parallax.html">ONE PAGE - PARALLAX</a></li>
                              <li><a href="index-onepage-youtube.html">ONE PAGE - YOUTUBE</a></li>
                              <li><a href="index-onepage-text-rotator.html">ONE PAGE - TEXT ROTATOR</a></li>
                              <li><a href="start.html#onepage"><span className="label label-success pull-right">new</span> MORE LAYOUTS</a></li>
                            </ul>
                          </li>
                          <li className="divider" />
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              HOME - THEMATICS <i className="fa fa-heart margin-left-10" />
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="index-thematics-restaurant.html">HOME - RESTAURANT</a></li>
                              <li><a href="index-thematics-education.html">HOME - EDUCATION</a></li>
                              <li><a href="index-thematics-construction.html">HOME - CONSTRUCTION</a></li>
                              <li><a href="index-thematics-medical.html">HOME - MEDICAL</a></li>
                              <li><a href="index-thematics-church.html">HOME - CHURCH</a></li>
                              <li><a href="index-thematics-fashion.html">HOME - FASHION</a></li>
                              <li><a href="index-thematics-wedding.html">HOME - WEDDING</a></li>
                              <li><a href="index-thematics-events.html">HOME - EVENTS</a></li>
                              <li><a href="http://www.stepofweb.com/propose-design.html" data-toggle="tooltip" data-placement="top" title="Do you need a specific home design? We can include it in the next update!" target="_blank"><span className="label label-danger pull-right">hot</span> PROPOSE THEMATIC</a></li>
                            </ul>
                          </li>
                          <li className="divider" />
                          <li><a href="start.html#newrevslider" data-toggle="tooltip" data-placement="top" title="32 More Revolution Slider V5"><span className="label label-danger pull-right">new</span> 32 MORE LAYOUTS</a></li>
                          <li className="divider" />
                          <li><a href="index-simple-revolution.html">HOME SIMPLE - REVOLUTION</a></li>
                          <li><a href="index-simple-layerslider.html">HOME SIMPLE - LAYERSLIDER</a></li>
                          <li><a href="index-simple-parallax.html">HOME SIMPLE - PARALLAX</a></li>
                          <li><a href="index-simple-youtube.html">HOME SIMPLE - YOUTUBE</a></li>
                        </ul>
                      </li>
                      <li className="dropdown active">{/* PAGES */}
                        <a className="dropdown-toggle" href="#">
                          PAGES
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              ABOUT
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-about-us-1.html">ABOUT US - LAYOUT 1</a></li>
                              <li><a href="page-about-us-2.html">ABOUT US - LAYOUT 2</a></li>
                              <li><a href="page-about-us-3.html">ABOUT US - LAYOUT 3</a></li>
                              <li><a href="page-about-us-4.html">ABOUT US - LAYOUT 4</a></li>
                              <li><a href="page-about-us-5.html">ABOUT US - LAYOUT 5</a></li>
                              <li><a href="page-about-me-1.html">ABOUT ME - LAYOUT 1</a></li>
                              <li><a href="page-about-me-2.html">ABOUT ME - LAYOUT 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              TEAM
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-team-1.html">TEAM - LAYOUT 1</a></li>
                              <li><a href="page-team-2.html">TEAM - LAYOUT 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              SERVICES
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-services-1.html">SERVICES - LAYOUT 1</a></li>
                              <li><a href="page-services-2.html">SERVICES - LAYOUT 2</a></li>
                              <li><a href="page-services-3.html">SERVICES - LAYOUT 3</a></li>
                              <li><a href="page-services-4.html">SERVICES - LAYOUT 4</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              FAQ
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-faq-1.html">FAQ - LAYOUT 1</a></li>
                              <li><a href="page-faq-2.html">FAQ - LAYOUT 2</a></li>
                              <li><a href="page-faq-3.html">FAQ - LAYOUT 3</a></li>
                              <li><a href="page-faq-4.html">FAQ - LAYOUT 4</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              CONTACT
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-contact-1.html">CONTACT - LAYOUT 1</a></li>
                              <li><a href="page-contact-2.html">CONTACT - LAYOUT 2</a></li>
                              <li><a href="page-contact-3.html">CONTACT - LAYOUT 3</a></li>
                              <li><a href="page-contact-4.html">CONTACT - LAYOUT 4</a></li>
                              <li><a href="page-contact-5.html">CONTACT - LAYOUT 5</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              ERROR
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-404-1.html">ERROR 404 - LAYOUT 1</a></li>
                              <li><a href="page-404-2.html">ERROR 404 - LAYOUT 2</a></li>
                              <li><a href="page-404-3.html">ERROR 404 - LAYOUT 3</a></li>
                              <li><a href="page-404-4.html">ERROR 404 - LAYOUT 4</a></li>
                              <li><a href="page-404-5.html">ERROR 404 - LAYOUT 5</a></li>
                              <li><a href="page-404-6.html">ERROR 404 - LAYOUT 6</a></li>
                              <li><a href="page-404-7.html">ERROR 404 - LAYOUT 7</a></li>
                              <li><a href="page-404-8.html">ERROR 404 - LAYOUT 8</a></li>
                              <li className="divider" />
                              <li><a href="page-500-1.html">ERROR 500 - LAYOUT 1</a></li>
                              <li><a href="page-500-2.html">ERROR 500 - LAYOUT 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              SIDEBAR
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-sidebar-left.html">SIDEBAR LEFT</a></li>
                              <li><a href="page-sidebar-right.html">SIDEBAR RIGHT</a></li>
                              <li><a href="page-sidebar-both.html">SIDEBAR BOTH</a></li>
                              <li><a href="page-sidebar-no.html">NO SIDEBAR</a></li>
                              <li className="divider" />
                              <li><a href="page-sidebar-dark-left.html">SIDEBAR LEFT - DARK</a></li>
                              <li><a href="page-sidebar-dark-right.html">SIDEBAR RIGHT - DARK</a></li>
                              <li><a href="page-sidebar-dark-both.html">SIDEBAR BOTH - DARK</a></li>
                              <li><a href="page-sidebar-dark-no.html">NO SIDEBAR - DARK</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              LOGIN/REGISTER
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-login-1.html">LOGIN - LAYOUT 1</a></li>
                              <li><a href="page-login-2.html">LOGIN - LAYOUT 2</a></li>
                              <li><a href="page-login-3.html">LOGIN - LAYOUT 3</a></li>
                              <li><a href="page-login-4.html">LOGIN - LAYOUT 4</a></li>
                              <li><a href="page-login-5.html">LOGIN - LAYOUT 5</a></li>
                              <li><a href="page-login-register-1.html">LOGIN + REGISTER 1</a></li>
                              <li><a href="page-login-register-2.html">LOGIN + REGISTER 2</a></li>
                              <li><a href="page-login-register-3.html">LOGIN + REGISTER 3</a></li>
                              <li><a href="page-register-1.html">REGISTER - LAYOUT 1</a></li>
                              <li><a href="page-register-2.html">REGISTER - LAYOUT 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              CLIENTS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-clients-1.html">CLIENTS 1 - SIDEBAR RIGHT</a></li>
                              <li><a href="page-clients-2.html">CLIENTS 1 - SIDEBAR LEFT</a></li>
                              <li><a href="page-clients-3.html">CLIENTS 1 - FULLWIDTH</a></li>
                              <li className="divider" />
                              <li><a href="page-clients-4.html">CLIENTS 2 - SIDEBAR RIGHT</a></li>
                              <li><a href="page-clients-5.html">CLIENTS 2 - SIDEBAR LEFT</a></li>
                              <li><a href="page-clients-6.html">CLIENTS 2 - FULLWIDTH</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              SEARCH RESULT
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-search-result-1.html">LAYOUT 1 - LEFT SIDEBAR</a></li>
                              <li><a href="page-search-result-2.html">LAYOUT 1 - RIGHT SIDEBAR</a></li>
                              <li><a href="page-search-result-3.html">LAYOUT 1 - FULLWIDTH</a></li>
                              <li className="divider" />
                              <li><a href="page-search-result-4.html">LAYOUT 2 - LEFT SIDEBAR</a></li>
                              <li><a href="page-search-result-5.html">LAYOUT 2 - RIGHT SIDEBAR</a></li>
                              <li className="divider" />
                              <li><a href="page-search-result-6.html">LAYOUT 3 - TABLE SEARCH</a></li>
                            </ul>
                          </li>
                          <li className="dropdown active">
                            <a className="dropdown-toggle" href="#">
                              PROFILE
                            </a>
                            <ul className="dropdown-menu">
                              <li className="active"><a href="page-profile.html">USER PROFILE</a></li>
                              <li><a href="page-profile-projects.html">USER PROJECTS</a></li>
                              <li><a href="page-profile-comments.html">USER COMMENTS</a></li>
                              <li><a href="page-profile-history.html">USER HISTORY</a></li>
                              <li><a href="page-profile-settings.html">USER SETTINGS</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              MAINTENANCE
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-maintenance-1.html">MAINTENANCE - LAYOUT 1</a></li>
                              <li><a href="page-maintenance-2.html">MAINTENANCE - LAYOUT 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              COMING SOON
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-coming-soon-1.html">COMING SOON - LAYOUT 1</a></li>
                              <li><a href="page-coming-soon-2.html">COMING SOON - LAYOUT 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              FORUM
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="page-forum-home.html">FORUM - HOME</a></li>
                              <li><a href="page-forum-topic.html">FORUM - TOPIC</a></li>
                              <li><a href="page-forum-post.html">FORUM - POST</a></li>
                            </ul>
                          </li>
                          <li><a href="page-careers.html">CAREERS</a></li>
                          <li><a href="page-sitemap.html">SITEMAP</a></li>
                          <li><a href="page-blank.html">BLANK PAGE</a></li>
                        </ul>
                      </li>
                      <li className="dropdown">{/* FEATURES */}
                        <a className="dropdown-toggle" href="#">
                          FEATURES
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-browser" /> SLIDERS
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-toggle" href="#">REVOLUTION SLIDER 4.x</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-slider-revolution-fullscreen.html">FULLSCREEN</a></li>
                                  <li><a href="feature-slider-revolution-fullwidth.html">FULL WIDTH</a></li>
                                  <li><a href="feature-slider-revolution-fixedwidth.html">FIXED WIDTH</a></li>
                                  <li><a href="feature-slider-revolution-kenburns.html">KENBURNS EFFECT</a></li>
                                  <li><a href="feature-slider-revolution-videobg.html">HTML5 VIDEO</a></li>
                                  <li><a href="feature-slider-revolution-captions.html">CAPTIONS</a></li>
                                  <li><a href="feature-slider-revolution-smthumb.html">THUMB SMALL</a></li>
                                  <li><a href="feature-slider-revolution-lgthumb.html">THUMB LARGE</a></li>
                                  <li className="divider" />
                                  <li><a href="feature-slider-revolution-prev1.html">NAV PREVIEW 1</a></li>
                                  <li><a href="feature-slider-revolution-prev2.html">NAV PREVIEW 2</a></li>
                                  <li><a href="feature-slider-revolution-prev3.html">NAV PREVIEW 3</a></li>
                                  <li><a href="feature-slider-revolution-prev4.html">NAV PREVIEW 4</a></li>
                                  <li><a href="feature-slider-revolution-prev0.html">NAV THEME DEFAULT</a></li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-toggle" href="#">LAYER SLIDER</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-slider-layer-fullwidth.html">FULLWIDTH</a></li>
                                  <li><a href="feature-slider-layer-fixed.html">FIXED WIDTH</a></li>
                                  <li><a href="feature-slider-layer-captions.html">CAPTIONS</a></li>
                                  <li><a href="feature-slider-layer-carousel.html">CAROUSEL</a></li>
                                  <li><a href="feature-slider-layer-2d3d.html">2D &amp; 3D TRANSITIONS</a></li>
                                  <li><a href="feature-slider-layer-thumb.html">THUMB NAV</a></li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-toggle" href="#">FLEX SLIDER</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-slider-flexslider-fullwidth.html">FULL WIDTH</a></li>
                                  <li><a href="feature-slider-flexslider-content.html">CONTENT</a></li>
                                  <li><a href="feature-slider-flexslider-thumbs.html">WITH THUMBS</a></li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-toggle" href="#">OWL SLIDER</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-slider-owl-fullwidth.html">FULL WIDTH</a></li>
                                  <li><a href="feature-slider-owl-fixed.html">FIXED WIDTH</a></li>
                                  <li><a href="feature-slider-owl-fixed+progress.html">FIXED + PROGRESS</a></li>
                                  <li><a href="feature-slider-owl-carousel.html">BASIC CAROUSEL</a></li>
                                  <li><a href="feature-slider-owl-fade.html">EFFECT - FADE</a></li>
                                  <li><a href="feature-slider-owl-backslide.html">EFFECT - BACKSLIDE</a></li>
                                  <li><a href="feature-slider-owl-godown.html">EFFECT - GODOWN</a></li>
                                  <li><a href="feature-slider-owl-fadeup.html">EFFECT - FADE UP</a></li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-toggle" href="#">SWIPE SLIDER</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-slider-swipe-full.html">FULLSCREEN</a></li>
                                  <li><a href="feature-slider-swipe-fixed-height.html">FIXED HEIGHT</a></li>
                                  <li><a href="feature-slider-swipe-autoplay.html">AUTOPLAY</a></li>
                                  <li><a href="feature-slider-swipe-fade.html">FADE TRANSITION</a></li>
                                  <li><a href="feature-slider-swipe-slide.html">SLIDE TRANSITION</a></li>
                                  <li><a href="feature-slider-swipe-coverflow.html">COVERFLOW TRANSITION</a></li>
                                  <li><a href="feature-slider-swipe-html5-video.html">HTML5 VIDEO</a></li>
                                  <li><a href="feature-slider-swipe-3columns.html">3 COLUMNS</a></li>
                                  <li><a href="feature-slider-swipe-4columns.html">4 COLUMNS</a></li>
                                </ul>
                              </li>
                              <li><a href="feature-slider-nivo.html">NIVO SLIDER</a></li>
                              <li><a href="feature-slider-camera.html">CAMERA SLIDER</a></li>
                              <li><a href="feature-slider-elastic.html">ELASTIC SLIDER</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-hotairballoon" /> HEADERS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-header-light.html">HEADER - LIGHT</a></li>
                              <li><a href="feature-header-dark.html">HEADER - DARK</a></li>
                              <li>
                                <a className="dropdown-toggle" href="#">HEADER - HEIGHT</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-header-large.html">LARGE (96px)</a></li>
                                  <li><a href="feature-header-medium.html">MEDIUM (70px)</a></li>
                                  <li><a href="feature-header-small.html">SMALL (60px)</a></li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-toggle" href="#">HEADER - SHADOW</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-header-shadow-after-1.html">SHADOW 1 - AFTER</a></li>
                                  <li><a href="feature-header-shadow-before-1.html">SHADOW 1 - BEFORE</a></li>
                                  <li className="divider" />
                                  <li><a href="feature-header-shadow-after-2.html">SHADOW 2 - AFTER</a></li>
                                  <li><a href="feature-header-shadow-before-2.html">SHADOW 2 - BEFORE</a></li>
                                  <li className="divider" />
                                  <li><a href="feature-header-shadow-after-3.html">SHADOW 3 - AFTER</a></li>
                                  <li><a href="feature-header-shadow-before-3.html">SHADOW 3 - BEFORE</a></li>
                                  <li className="divider" />
                                  <li><a href="feature-header-shadow-dark-1.html">SHADOW - DARK PAGE EXAMPLE</a></li>
                                </ul>
                              </li>
                              <li><a href="feature-header-transparent.html">HEADER - TRANSPARENT</a></li>
                              <li><a href="feature-header-transparent-line.html">HEADER - TRANSP+LINE</a></li>
                              <li><a href="feature-header-translucent.html">HEADER - TRANSLUCENT</a></li>
                              <li>
                                <a className="dropdown-toggle" href="#">HEADER - BOTTOM</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-header-bottom-light.html">BOTTOM LIGHT</a></li>
                                  <li><a href="feature-header-bottom-dark.html">BOTTOM DARK</a></li>
                                  <li><a href="feature-header-bottom-transp.html">BOTTOM TRANSPARENT</a></li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-toggle" href="#">HEADER - LEFT SIDE</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-header-side-left-1.html">FIXED</a></li>
                                  <li><a href="feature-header-side-left-2.html">OPEN ON CLICK</a></li>
                                  <li><a href="feature-header-side-left-3.html">DARK</a></li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-toggle" href="#">HEADER - RIGHT SIDE</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-header-side-right-1.html">FIXED</a></li>
                                  <li><a href="feature-header-side-right-2.html">OPEN ON CLICK</a></li>
                                  <li><a href="feature-header-side-right-3.html">DARK</a></li>
                                </ul>
                              </li>
                              <li>
                                <a className="dropdown-toggle" href="#">HEADER - STATIC</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-header-static-top-light.html">STATIC TOP - LIGHT</a></li>
                                  <li><a href="feature-header-static-top-dark.html">STATIC TOP - DARK</a></li>
                                  <li className="divider" />
                                  <li><a href="feature-header-static-bottom-light.html">STATIC BOTTOM - LIGHT</a></li>
                                  <li><a href="feature-header-static-bottom-dark.html">STATIC BOTTOM - DARK</a></li>
                                </ul>
                              </li>
                              <li><a href="feature-header-nosticky.html">HEADER - NO STICKY</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-anchor" /> FOOTERS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-footer-1.html#footer">FOOTER - LAYOUT 1</a></li>
                              <li><a href="feature-footer-2.html#footer">FOOTER - LAYOUT 2</a></li>
                              <li><a href="feature-footer-3.html#footer">FOOTER - LAYOUT 3</a></li>
                              <li><a href="feature-footer-4.html#footer">FOOTER - LAYOUT 4</a></li>
                              <li><a href="feature-footer-5.html#footer">FOOTER - LAYOUT 5</a></li>
                              <li><a href="feature-footer-6.html#footer">FOOTER - LAYOUT 6</a></li>
                              <li><a href="feature-footer-7.html#footer">FOOTER - LAYOUT 7</a></li>
                              <li><a href="feature-footer-8.html#footer">FOOTER - LAYOUT 8 (light)</a></li>
                              <li><a href="feature-footer-0.html#footer">FOOTER - STICKY</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-circle-compass" /> MENU STYLES
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-menu-0.html">MENU - OVERLAY</a></li>
                              <li><a href="feature-menu-1.html">MENU - STYLE 1</a></li>
                              <li><a href="feature-menu-2.html">MENU - STYLE 2</a></li>
                              <li><a href="feature-menu-3.html">MENU - STYLE 3</a></li>
                              <li><a href="feature-menu-4.html">MENU - STYLE 4</a></li>
                              <li><a href="feature-menu-5.html">MENU - STYLE 5</a></li>
                              <li><a href="feature-menu-6.html">MENU - STYLE 6</a></li>
                              <li><a href="feature-menu-7.html">MENU - STYLE 7</a></li>
                              <li><a href="feature-menu-8.html">MENU - STYLE 8</a></li>
                              <li><a href="feature-menu-9.html">MENU - STYLE 9</a></li>
                              <li><a href="feature-menu-10.html">MENU - STYLE 10</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-genius" /> MENU DROPDOWN
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-menu-dd-light.html">DROPDOWN - LIGHT</a></li>
                              <li><a href="feature-menu-dd-dark.html">DROPDOWN - DARK</a></li>
                              <li><a href="feature-menu-dd-color.html">DROPDOWN - COLOR</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-beaker" /> PAGE TITLES
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-title-left.html">ALIGN LEFT</a></li>
                              <li><a href="feature-title-right.html">ALIGN RIGHT</a></li>
                              <li><a href="feature-title-center.html">ALIGN CENTER</a></li>
                              <li><a href="feature-title-light.html">LIGHT</a></li>
                              <li><a href="feature-title-dark.html">DARK</a></li>
                              <li><a href="feature-title-tabs.html">WITH TABS</a></li>
                              <li><a href="feature-title-breadcrumbs.html">BREADCRUMBS ONLY</a></li>
                              <li>
                                <a className="dropdown-toggle" href="#">PARALLAX</a>
                                <ul className="dropdown-menu">
                                  <li><a href="feature-title-parallax-small.html">PARALLAX SMALL</a></li>
                                  <li><a href="feature-title-parallax-medium.html">PARALLAX MEDIUM</a></li>
                                  <li><a href="feature-title-parallax-large.html">PARALLAX LARGE</a></li>
                                  <li><a href="feature-title-parallax-2xlarge.html">PARALLAX 2x LARGE</a></li>
                                  <li><a href="feature-title-parallax-transp.html">TRANSPARENT HEADER</a></li>
                                  <li><a href="feature-title-parallax-transp-large.html">TRANSPARENT HEADER - LARGE</a></li>
                                </ul>
                              </li>
                              <li><a href="feature-title-short-height.html">SHORT HEIGHT</a></li>
                              <li><a href="feature-title-rotative-text.html">ROTATIVE TEXT</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-layers" /> PAGE SUBMENU
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-page-submenu-light.html">PAGE SUBMENU - LIGHT</a></li>
                              <li><a href="feature-page-submenu-dark.html">PAGE SUBMENU - DARK</a></li>
                              <li><a href="feature-page-submenu-color.html">PAGE SUBMENU - COLOR</a></li>
                              <li><a href="feature-page-submenu-transparent.html">PAGE SUBMENU - TRANSPARENT</a></li>
                              <li><a href="feature-page-submenu-below-title.html">PAGE SUBMENU - BELOW PAGE TITLE</a></li>
                              <li><a href="feature-page-submenu-scrollto.html">PAGE SUBMENU - SCROLLTO</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-trophy" /> ICONS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-icons-fontawesome.html">FONTAWESOME</a></li>
                              <li><a href="feature-icons-glyphicons.html">GLYPHICONS</a></li>
                              <li><a href="feature-icons-etline.html">ET LINE</a></li>
                              <li><a href="feature-icons-flags.html">FLAGS</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-flag" /> BACKGROUNDS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-content-bg-grey.html">CONTENT - SIMPLE GREY</a></li>
                              <li><a href="feature-content-bg-ggrey.html">CONTENT - GRAIN GREY</a></li>
                              <li><a href="feature-content-bg-gblue.html">CONTENT - GRAIN BLUE</a></li>
                              <li><a href="feature-content-bg-ggreen.html">CONTENT - GRAIN GREEN</a></li>
                              <li><a href="feature-content-bg-gorange.html">CONTENT - GRAIN ORANGE</a></li>
                              <li><a href="feature-content-bg-gyellow.html">CONTENT - GRAIN YELLOW</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-magnifying-glass" /> SEARCH LAYOUTS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-search-default.html">SEARCH - DEFAULT</a></li>
                              <li><a href="feature-search-fullscreen-light.html">SEARCH - FULLSCREEN LIGHT</a></li>
                              <li><a href="feature-search-fullscreen-dark.html">SEARCH - FULLSCREEN DARK</a></li>
                              <li><a href="feature-search-header-light.html">SEARCH - HEADER LIGHT</a></li>
                              <li><a href="feature-search-header-dark.html">SEARCH - HEADER DARK</a></li>
                            </ul>
                          </li>
                          <li><a href="shortcode-animations.html"><i className="et-expand" /> ANIMATIONS</a></li>
                          <li><a href="feature-grid.html"><i className="et-grid" /> GRID</a></li>
                          <li><a href="feature-essentials.html"><i className="et-heart" /> ESSENTIALS</a></li>
                          <li><a href="page-changelog.html"><i className="et-alarmclock" /> CHANGELOG</a></li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              <i className="et-newspaper" /> SIDE PANEL
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="feature-sidepanel-dark-right.html">SIDE PANEL - DARK - RIGHT</a></li>
                              <li><a href="feature-sidepanel-dark-left.html">SIDE PANEL - DARK - LEFT</a></li>
                              <li className="divider" />
                              <li><a href="feature-sidepanel-light-right.html">SIDE PANEL - LIGHT - RIGHT</a></li>
                              <li><a href="feature-sidepanel-light-left.html">SIDE PANEL - LIGHT - LEFT</a></li>
                              <li className="divider" />
                              <li><a href="feature-sidepanel-color-right.html">SIDE PANEL - COLOR - RIGHT</a></li>
                              <li><a href="feature-sidepanel-color-left.html">SIDE PANEL - COLOR - LEFT</a></li>
                            </ul>
                          </li>
                          <li><a target="_blank" href="../Admin/HTML/"><span className="label label-success pull-right">BONUS</span><i className="et-gears" /> ADMIN PANEL</a></li>
                        </ul>
                      </li>
                      <li className="dropdown mega-menu">{/* PORTFOLIO */}
                        <a className="dropdown-toggle" href="#">
                          PORTFOLIO
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="row">
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><span>GRID</span></li>
                                  <li><a href="portfolio-grid-1-columns.html">1 COLUMN</a></li>
                                  <li><a href="portfolio-grid-2-columns.html">2 COLUMNS</a></li>
                                  <li><a href="portfolio-grid-3-columns.html">3 COLUMNS</a></li>
                                  <li><a href="portfolio-grid-4-columns.html">4 COLUMNS</a></li>
                                  <li><a href="portfolio-grid-5-columns.html">5 COLUMNS</a></li>
                                  <li><a href="portfolio-grid-6-columns.html">6 COLUMNS</a></li>
                                </ul>
                              </div>
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><span>MASONRY</span></li>
                                  <li><a href="portfolio-masonry-2-columns.html">2 COLUMNS</a></li>
                                  <li><a href="portfolio-masonry-3-columns.html">3 COLUMNS</a></li>
                                  <li><a href="portfolio-masonry-4-columns.html">4 COLUMNS</a></li>
                                  <li><a href="portfolio-masonry-5-columns.html">5 COLUMNS</a></li>
                                  <li><a href="portfolio-masonry-6-columns.html">6 COLUMNS</a></li>
                                </ul>
                              </div>
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><span>SINGLE</span></li>
                                  <li><a href="portfolio-single-extended.html">EXTENDED ITEM</a></li>
                                  <li><a href="portfolio-single-parallax.html">PARALLAX IMAGE</a></li>
                                  <li><a href="portfolio-single-slider.html">SLIDER GALLERY</a></li>
                                  <li><a href="portfolio-single-html5-video.html">HTML5 VIDEO</a></li>
                                  <li><a href="portfolio-single-masonry-thumbs.html">MASONRY THUMBS</a></li>
                                  <li><a href="portfolio-single-embed-video.html">EMBED VIDEO</a></li>
                                </ul>
                              </div>
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><span>LAYOUT</span></li>
                                  <li><a href="portfolio-layout-default.html">DEFAULT</a></li>
                                  <li><a href="portfolio-layout-aside-left.html">LEFT SIDEBAR</a></li>
                                  <li><a href="portfolio-layout-aside-right.html">RIGHT SIDEBAR</a></li>
                                  <li><a href="portfolio-layout-aside-both.html">BOTH SIDEBAR</a></li>
                                  <li><a href="portfolio-layout-fullwidth.html">FULL WIDTH (100%)</a></li>
                                  <li><a href="portfolio-layout-tabfilter.html">TAB FILTER &amp; PAGINATION</a></li>
                                </ul>
                              </div>
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><span>LOADING</span></li>
                                  <li><a href="portfolio-loading-pagination.html">PAGINATION</a></li>
                                  <li><a href="portfolio-loading-jpagination.html">JQUERY PAGINATION</a></li>
                                  <li><a href="portfolio-loading-infinite-scroll.html">INFINITE SCROLL</a></li>
                                  <li><a href="portfolio-loading-ajax-page.html">AJAX IN PAGE</a></li>
                                  <li><a href="portfolio-loading-ajax-modal.html">AJAX IN MODAL</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">{/* BLOG */}
                        <a className="dropdown-toggle" href="#">
                          BLOG
                        </a>
                        <ul className="dropdown-menu">
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              DEFAULT
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="blog-default-aside-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="blog-default-aside-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="blog-default-aside-both.html">BOTH SIDEBAR</a></li>
                              <li><a href="blog-default-fullwidth.html">FULL WIDTH</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              GRID
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="blog-column-2colums.html">2 COLUMNS</a></li>
                              <li><a href="blog-column-3colums.html">3 COLUMNS</a></li>
                              <li><a href="blog-column-4colums.html">4 COLUMNS</a></li>
                              <li className="divider" />
                              <li><a href="blog-column-aside-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="blog-column-aside-right.html">RIGHT SIDEBAR</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              MASONRY
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="blog-masonry-2colums.html">2 COLUMNS</a></li>
                              <li><a href="blog-masonry-3colums.html">3 COLUMNS</a></li>
                              <li><a href="blog-masonry-4colums.html">4 COLUMNS</a></li>
                              <li><a href="blog-masonry-fullwidth.html">FULLWIDTH</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              TIMELINE
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="blog-timeline-aside-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="blog-timeline-aside-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="blog-timeline-right-aside-right.html">RIGHT + TIMELINE RIGHT</a></li>
                              <li><a href="blog-timeline-right-aside-left.html">LEFT + TIMELINE RIGHT</a></li>
                              <li><a href="blog-timeline-fullwidth-left.html">FULL WIDTH - LEFT</a></li>
                              <li><a href="blog-timeline-fullwidth-right.html">FULL WIDTH - RIGHT</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              SMALL IMAGE
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="blog-smallimg-aside-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="blog-smallimg-aside-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="blog-smallimg-aside-both.html">BOTH SIDEBAR</a></li>
                              <li><a href="blog-smallimg-fullwidth.html">FULL WIDTH</a></li>
                              <li className="divider" />
                              <li><a href="blog-smallimg-alternate-1.html">ALTERNATE 1</a></li>
                              <li><a href="blog-smallimg-alternate-2.html">ALTERNATE 2</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              SINGLE
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="blog-single-default.html">DEFAULT</a></li>
                              <li><a href="blog-single-aside-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="blog-single-aside-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="blog-single-fullwidth.html">FULL WIDTH</a></li>
                              <li><a href="blog-single-small-image-left.html">SMALL IMAGE - LEFT</a></li>
                              <li><a href="blog-single-small-image-right.html">SMALL IMAGE - RIGHT</a></li>
                              <li><a href="blog-single-big-image.html">BIG IMAGE</a></li>
                              <li><a href="blog-single-fullwidth-image.html">FULLWIDTH IMAGE</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              COMMENTS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="blog-comments-bordered.html#comments">BORDERED COMMENTS</a></li>
                              <li><a href="blog-comments-default.html#comments">DEFAULT COMMENTS</a></li>
                              <li><a href="blog-comments-facebook.html#comments">FACEBOOK COMMENTS</a></li>
                              <li><a href="blog-comments-disqus.html#comments">DISQUS COMMENTS</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">{/* SHOP */}
                        <a className="dropdown-toggle" href="#">
                          SHOP
                        </a>
                        <ul className="dropdown-menu pull-right">
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              1 COLUMN
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="shop-1col-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="shop-1col-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="shop-1col-both.html">BOTH SIDEBAR</a></li>
                              <li><a href="shop-1col-full.html">FULL WIDTH</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              2 COLUMNS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="shop-2col-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="shop-2col-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="shop-2col-both.html">BOTH SIDEBAR</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              3 COLUMNS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="shop-3col-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="shop-3col-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="shop-3col-full.html">FULL WIDTH</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              4 COLUMNS
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="shop-4col-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="shop-4col-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="shop-4col-full.html">FULL WIDTH</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              SINGLE PRODUCT
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="shop-single-left.html">LEFT SIDEBAR</a></li>
                              <li><a href="shop-single-right.html">RIGHT SIDEBAR</a></li>
                              <li><a href="shop-single-both.html">BOTH SIDEBAR</a></li>
                              <li><a href="shop-single-full.html">FULL WIDTH</a></li>
                            </ul>
                          </li>
                          <li><a href="shop-compare.html">COMPARE</a></li>
                          <li><a href="shop-cart.html">CART</a></li>
                          <li><a href="shop-checkout.html">CHECKOUT</a></li>
                          <li><a href="shop-checkout-final.html">ORDER PLACED</a></li>
                        </ul>
                      </li>
                      <li className="dropdown mega-menu">{/* SHORTCODES */}
                        <a className="dropdown-toggle" href="#">
                          SHORTCODES
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <div className="row">
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><a href="shortcode-animations.html">ANIMATIONS</a></li>
                                  <li><a href="shortcode-buttons.html">BUTTONS</a></li>
                                  <li><a href="shortcode-carousel.html">CAROUSEL</a></li>
                                  <li><a href="shortcode-charts.html">GRAPHS</a></li>
                                  <li><a href="shortcode-clients.html">CLIENTS</a></li>
                                  <li><a href="shortcode-columns.html">GRID &amp; COLUMNS</a></li>
                                  <li><a href="shortcode-counters.html">COUNTERS</a></li>
                                  <li><a href="shortcode-forms.html">FORM ELEMENTS</a></li>
                                </ul>
                              </div>
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><a href="shortcode-dividers.html">DIVIDERS</a></li>
                                  <li><a href="shortcode-icon-boxes.html">BOXES &amp; ICONS</a></li>
                                  <li><a href="shortcode-galleries.html">GALLERIES</a></li>
                                  <li><a href="shortcode-headings.html">HEADING STYLES</a></li>
                                  <li><a href="shortcode-icon-lists.html">ICON LISTS</a></li>
                                  <li><a href="shortcode-labels.html">LABELS &amp; BADGES</a></li>
                                  <li><a href="shortcode-lightbox.html">LIGHTBOX</a></li>
                                  <li><a href="shortcode-forms-editors.html">HTML EDITORS</a></li>
                                </ul>
                              </div>
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><a href="shortcode-list-pannels.html">LIST &amp; PANNELS</a></li>
                                  <li><a href="shortcode-maps.html">MAPS</a></li>
                                  <li><a href="shortcode-media-embeds.html">MEDIA EMBEDS</a></li>
                                  <li><a href="shortcode-modals.html">MODAL / POPOVER / NOTIF</a></li>
                                  <li><a href="shortcode-navigations.html">NAVIGATIONS</a></li>
                                  <li><a href="shortcode-paginations.html">PAGINATIONS</a></li>
                                  <li><a href="shortcode-progress-bar.html">PROGRESS BARS</a></li>
                                  <li><a href="shortcode-widgets.html">WIDGETS</a></li>
                                </ul>
                              </div>
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><a href="shortcode-pricing.html">PRICING BOXES</a></li>
                                  <li><a href="shortcode-process-steps.html">PROCESS STEPS</a></li>
                                  <li><a href="shortcode-callouts.html">CALLOUTS</a></li>
                                  <li><a href="shortcode-info-bars.html">INFO BARS</a></li>
                                  <li><a href="shortcode-blockquotes.html">BLOCKQUOTES</a></li>
                                  <li><a href="shortcode-responsive.html">RESPONSIVE</a></li>
                                  <li><a href="shortcode-sections.html">SECTIONS</a></li>
                                  <li><a href="shortcode-social-icons.html">SOCIAL ICONS</a></li>
                                </ul>
                              </div>
                              <div className="col-md-5th">
                                <ul className="list-unstyled">
                                  <li><a href="shortcode-alerts.html">ALERTS</a></li>
                                  <li><a href="shortcode-styled-icons.html">STYLED ICONS</a></li>
                                  <li><a href="shortcode-tables.html">TABLES</a></li>
                                  <li><a href="shortcode-tabs.html">TABS</a></li>
                                  <li><a href="shortcode-testimonials.html">TESTIMONIALS</a></li>
                                  <li><a href="shortcode-thumbnails.html">THUMBNAILS</a></li>
                                  <li><a href="shortcode-toggles.html">TOGGLES</a></li>
                                </ul>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
            {/* /Top Nav */}
          </div>
          <section className="page-header page-header-xs">
            <div className="container">
              {/* breadcrumbs */}
              <ol className="breadcrumb breadcrumb-inverse">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pages</a></li>
                <li className="active">{displayName}</li>
              </ol>{/* /breadcrumbs */}
            </div>
          </section>
          {/* /PAGE HEADER */}
          {/* */}
          <section>
            <div className="container">
              {/* LEFT */}
              <div className="col-lg-3 col-md-3 col-sm-4">
                <div className="thumbnail text-center">
                  <img src={image.uri} alt />
                  <h2 className="size-18 margin-top-10 margin-bottom-0">{displayName}</h2>
                  <h3 className="size-11 margin-top-0 margin-bottom-10 text-muted">DEVELOPER</h3>
                </div>
                {/* completed */}
                <div className="margin-bottom-30">
                  <label>88% completed profile</label>
                  <div className="progress progress-xxs">
                    <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{width: '88%', minWidth: '2em'}} />
                  </div>
                </div>
                {/* /completed */}
                {/* SIDE NAV */}
                <ul className="side-nav list-group margin-bottom-60" id="sidebar-nav">
                  <li className="list-group-item active"><a href="page-profile.html"><i className="fa fa-eye" /> PROFILE</a></li>
                  <li className="list-group-item"><a href="page-profile-projects.html"><i className="fa fa-tasks" /> PROJECTS</a></li>
                  <li className="list-group-item"><a href="page-profile-comments.html"><i className="fa fa-comments-o" /> COMMENTS</a></li>
                  <li className="list-group-item"><a href="page-profile-history.html"><i className="fa fa-history" /> HISTORY</a></li>
                  <li className="list-group-item"><a href="page-profile-settings.html"><i className="fa fa-gears" /> SETTINGS</a></li>
                  <li className="list-group-item list-toggle">
                    <a data-toggle="collapse" data-parent="#sidebar-nav" href="#collapse-1">DROPDOWN EXAMPLE</a>
                    <ul id="collapse-1" className="collapse">{/* NOTE: "collapse in" to be open on page load */}
                      <li><a href="#"><i className="fa fa-angle-right" /> SUMBENU 1</a></li>
                      <li>
                        <span className="badge badge-red">New</span>
                        <a href="#"><i className="fa fa-angle-right" /> SUMBENU 2</a>
                      </li>
                      <li className="active"><a href="#"><i className="fa fa-angle-right" /> SUMBENU 3</a></li>
                      <li><a href="#"><i className="fa fa-angle-right" /> SUMBENU 4</a></li>
                    </ul>
                  </li>
                </ul>
                {/* /SIDE NAV */}
                {/* info */}
                <div className="box-light margin-bottom-30">{/* .box-light OR .box-light */}
                  <div className="row margin-bottom-20">
                    <div className="col-md-4 col-sm-4 col-xs-4 text-center bold">
                      <h2 className="size-30 margin-top-10 margin-bottom-0 font-raleway">12</h2>
                      <h3 className="size-11 margin-top-0 margin-bottom-10 text-info">PROJECTS</h3>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4 text-center bold">
                      <h2 className="size-30 margin-top-10 margin-bottom-0 font-raleway">34</h2>
                      <h3 className="size-11 margin-top-0 margin-bottom-10 text-info">TASKS</h3>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-4 text-center bold">
                      <h2 className="size-30 margin-top-10 margin-bottom-0 font-raleway">32</h2>
                      <h3 className="size-11 margin-top-0 margin-bottom-10 text-info">UPLOADS</h3>
                    </div>
                  </div>
                  {/* /info */}
                  <div className="text-muted">
                    <h2 className="size-18 text-muted margin-bottom-6"><b>About</b> {displayName}</h2>
                    <p>Lorem ipsum dolor sit amet diam nonummy nibh dolore.</p>
                    <ul className="list-unstyled nomargin">
                      <li className="margin-bottom-10"><i className="fa fa-globe width-20 hidden-xs hidden-sm" /> <a href="http://www.stepofweb.com">www.stepofweb.com</a></li>
                      <li className="margin-bottom-10"><i className="fa fa-facebook width-20 hidden-xs hidden-sm" /> <a href="http://www.facebook.com/stepofweb">stepofweb</a></li>
                      <li className="margin-bottom-10"><i className="fa fa-twitter width-20 hidden-xs hidden-sm" /> <a href="http://www.twitter.com/stepofweb">@stepofweb</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="col-lg-9 col-md-9 col-sm-8">
                {/* FLIP BOX */}
                <div className="box-flip box-icon box-icon-center box-icon-round box-icon-large text-center nomargin">
                  <div className="front">
                    <div className="box1 noradius">
                      <div className="box-icon-title">
                        <i className="fa fa-user" />
                        <h2>{displayName} – Profile</h2>
                      </div>
                      <div dangerouslySetInnerHTML={this.createMarkup(bio)} />
                    </div>
                  </div>
                  <div className="back">
                    <div className="box2 noradius">
                      <h4>WHO AM I?</h4>
                      <hr />
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque. Ut enim massa, sodales tempor convallis et, iaculis ac massa. Maecenas metus nulla, commodo a sodales sed, dignissim pretium nunc. Nam et lacus neque.</p>
                    </div>
                  </div>
                </div>
                {/* /FLIP BOX */}
                <div className="box-light">{/* .box-light OR .box-dark */}
                  <div className="row">
                    {/* POPULAR POSTS */}
                    <div className="col-md-6 col-sm-6">
                      <div className="box-inner">
                        <h3>
                          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                          POPULAR POSTS
                        </h3>
                        <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/b-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/6-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/d-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/a-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                          <div className="clearfix margin-bottom-10">{/* post item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/5-min.jpg" width={60} height={60} alt />
                            <h4 className="size-13 nomargin noborder nopadding"><a href="blog-single-default.html">Nullam Vitae Nibh Un Odiosters</a></h4>
                            <span className="size-11 text-muted">June 29, 2015</span>
                          </div>{/* /post item */}
                        </div>
                      </div>
                      <div className="box-footer">
                        {/* INLINE SEARCH */}
                        <div className="inline-search clearfix">
                          <form action="#" method="get" className="widget_search nomargin">
                            <input type="search" placeholder="Search Post..." name="s" className="serch-input" />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                            <div className="clear" />
                          </form>
                        </div>
                        {/* /INLINE SEARCH */}
                      </div>
                    </div>
                    {/* /POPULAR POSTS */}
                    {/* FRIENDS */}
                    <div className="col-md-6 col-sm-6">
                      <div className="box-inner">
                        <h3>
                          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                          FRIENDS
                        </h3>
                        <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                          <div className="clearfix margin-bottom-10">{/* squared item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/1-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Joana Doe</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /squared item */}
                          <div className="clearfix margin-bottom-10">{/* rounded item */}
                            <img className="thumbnail pull-left rounded" src="/images/demo/people/300x300/2-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Melissa Doe</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /rounded item */}
                          <div className="clearfix margin-bottom-10">{/* squared item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/3-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">{displayName}</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /squared item */}
                          <div className="clearfix margin-bottom-10">{/* rounded item */}
                            <img className="thumbnail pull-left rounded" src="/images/demo/people/300x300/4-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Suzana Doe</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /rounded item */}
                          <div className="clearfix margin-bottom-10">{/* squared item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/5-min.jpg" width={40} height={40} alt />
                            <h4 className="size-14 nomargin noborder nopadding bold"><a href="#">Jolie Doe</a></h4>
                            <span className="size-12 text-muted">Lorem ipsum dolor sit amet.</span>
                          </div>{/* /squared item */}
                        </div>
                      </div>
                      <div className="box-footer">
                        {/* INLINE SEARCH */}
                        <div className="inline-search clearfix">
                          <form action="#" method="get" className="widget_search nomargin">
                            <input type="search" placeholder="Search Friend..." name="s" className="serch-input" />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                            <div className="clear" />
                          </form>
                        </div>
                        {/* /INLINE SEARCH */}
                      </div>
                    </div>
                    {/* /FRIENDS */}
                  </div>
                  <div className="row margin-top-30">
                    {/* DISCUSSIONS */}
                    <div className="col-md-6 col-sm-6">
                      <div className="box-inner">
                        <h3>
                          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                          DISCUSSIONS
                        </h3>
                        <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/3-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Joana Doe</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">12 min. ago</span>
                            </span>
                          </div>{/* /discussion item */}
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/4-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Melissa Doe</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">54 min. ago</span>
                            </span>
                          </div>{/* /discussion item */}
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/5-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">juliet Doe</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">8 days ago</span>
                            </span>
                          </div>{/* /discussion item */}
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/6-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">Suanna Doe</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">12 day ago</span>
                            </span>
                          </div>{/* /discussion item */}
                          <div className="clearfix margin-bottom-20">{/* discussion item */}
                            <img className="thumbnail pull-left" src="/images/demo/people/300x300/7-min.jpg" width={60} height={60} alt />
                            <h4 className="size-15 nomargin noborder nopadding bold"><a href="#">{displayName}</a></h4>
                            <span className="size-13 text-muted">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              <span className="text-success size-11">1 month ago</span>
                            </span>
                          </div>{/* /discussion item */}
                        </div>
                      </div>
                      <div className="box-footer">
                        {/* INLINE SEARCH */}
                        <div className="inline-search clearfix">
                          <form action="#" method="get" className="widget_search nomargin">
                            <input type="search" placeholder="Search Discussion..." name="s" className="serch-input" />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                            <div className="clear" />
                          </form>
                        </div>
                        {/* /INLINE SEARCH */}
                      </div>
                    </div>
                    {/* /DISCUSSIONS */}
                    {/* NOTIFICATIONS */}
                    <div className="col-md-6 col-sm-6">
                      <div className="box-inner">
                        <h3>
                          <a className="pull-right size-11 text-warning" href="#">VIEW ALL</a>
                          NOTIFICATIONS
                        </h3>
                        <div className="height-250 slimscroll" data-always-visible="true" data-size="5px" data-position="right" data-opacity="0.4" disable-body-scroll="true">
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-success label-square pull-left">
                              <i className="fa fa-comment" />
                            </span>
                            <span className="size-14 text-muted"><b>New Comment</b>: <a href="blog-single-default.html">Lorem ipsum Dolor</a></span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-danger label-square pull-left">
                              <i className="glyphicon glyphicon-remove" />
                            </span>
                            <span className="size-14 text-muted"><b>Rejected</b>: <a href="#">Joana Doe</a> rejected friendship</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-warning label-square pull-left">
                              <i className="fa fa-warning" />
                            </span>
                            <span className="size-14 text-muted"><b>Warning</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-info label-square pull-left">
                              <i className="fa fa-info-circle" />
                            </span>
                            <span className="size-14 text-muted"><b>Info</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-primary label-square pull-left">
                              <i className="fa fa-check" />
                            </span>
                            <span className="size-14 text-muted"><b>Primary</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-default label-square pull-left">
                              <i className="fa fa-heart-o" />
                            </span>
                            <span className="size-14 text-muted"><b>Default</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                          <div className="clearfix margin-bottom-20">{/* notification item */}
                            <span className="label label-purple label-square pull-left">
                              <i className="fa fa-clock-o" />
                            </span>
                            <span className="size-14 text-muted"><b>Various</b>: Lorem ipsum Dolor</span>
                          </div>{/* /notification item */}
                        </div>
                      </div>
                      <div className="box-footer">
                        {/* INLINE SEARCH */}
                        <div className="inline-search clearfix">
                          <form action="#" method="get" className="widget_search nomargin">
                            <input type="search" placeholder="Search notification..." name="s" className="serch-input" />
                            <button type="submit">
                              <i className="fa fa-search" />
                            </button>
                            <div className="clear" />
                          </form>
                        </div>
                        {/* /INLINE SEARCH */}
                      </div>
                    </div>
                    {/* /NOTIFICATIONS */}
                  </div>
                </div>
                <form method="post" action="#" className="box-light margin-top-20">{/* .box-light OR .box-dark */}
                  <div className="box-inner">
                    <h4 className="uppercase">LEAVE A MESSAGE TO <strong>{displayName}</strong></h4>
                    <textarea required className="form-control word-count" data-maxlength={100} rows={5} placeholder="Type your message here..." />
                    <div className="text-muted text-right margin-top-3 size-12 margin-bottom-10">
                      <span>0/100</span> Words
                    </div>
                    <button type="submit" className="btn btn-primary"><i className="fa fa-check" /> SEND MESSAGE</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          {/* / */}
          {/* FOOTER */}
          <footer id="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  {/* Footer Logo */}
                  <img className="footer-logo" src="/images/logo-footer.png" alt />
                  {/* Small Description */}
                  <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                  {/* Contact Address */}
                  <address>
                    <ul className="list-unstyled">
                      <li className="footer-sprite address">
                        PO Box 21132<br />
                        Here Weare St, Melbourne<br />
                        Vivas 2355 Australia<br />
                      </li>
                      <li className="footer-sprite phone">
                        Phone: 1-800-565-2390
                      </li>
                      <li className="footer-sprite email">
                        <a href="mailto:support@yourname.com">support@yourname.com</a>
                      </li>
                    </ul>
                  </address>
                  {/* /Contact Address */}
                </div>
                <div className="col-md-3">
                  {/* Latest Blog Post */}
                  <h4 className="letter-spacing-1">LATEST NEWS</h4>
                  <ul className="footer-posts list-unstyled">
                    <li>
                      <a href="#">Donec sed odio dui. Nulla vitae elit libero, a pharetra augue</a>
                      <small>29 June 2015</small>
                    </li>
                    <li>
                      <a href="#">Nullam id dolor id nibh ultricies</a>
                      <small>29 June 2015</small>
                    </li>
                    <li>
                      <a href="#">Duis mollis, est non commodo luctus</a>
                      <small>29 June 2015</small>
                    </li>
                  </ul>
                  {/* /Latest Blog Post */}
                </div>
                <div className="col-md-2">
                  {/* Links */}
                  <h4 className="letter-spacing-1">EXPLORE SMARTY</h4>
                  <ul className="footer-links list-unstyled">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Our Clients</a></li>
                    <li><a href="#">Our Pricing</a></li>
                    <li><a href="#">Smarty Tour</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                  {/* /Links */}
                </div>
                <div className="col-md-4">
                  {/* Newsletter Form */}
                  <h4 className="letter-spacing-1">KEEP IN TOUCH</h4>
                  <p>Subscribe to Our Newsletter to get Important News &amp; Offers</p>
                  <form className="validate" action="php/newsletter.php" method="post" data-success="Subscribed! Thank you!" data-toastr-position="bottom-right">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                      <input type="email" id="email" name="email" className="form-control required" placeholder="Enter your Email" />
                      <span className="input-group-btn">
                        <button className="btn btn-success" type="submit">Subscribe</button>
                      </span>
                    </div>
                  </form>
                  {/* /Newsletter Form */}
                  {/* Social Icons */}
                  <div className="margin-top-20">
                    <a href="#" className="social-icon social-icon-border social-facebook pull-left" data-toggle="tooltip" data-placement="top" title="Facebook">
                      <i className="icon-facebook" />
                      <i className="icon-facebook" />
                    </a>
                    <a href="#" className="social-icon social-icon-border social-twitter pull-left" data-toggle="tooltip" data-placement="top" title="Twitter">
                      <i className="icon-twitter" />
                      <i className="icon-twitter" />
                    </a>
                    <a href="#" className="social-icon social-icon-border social-gplus pull-left" data-toggle="tooltip" data-placement="top" title="Google plus">
                      <i className="icon-gplus" />
                      <i className="icon-gplus" />
                    </a>
                    <a href="#" className="social-icon social-icon-border social-linkedin pull-left" data-toggle="tooltip" data-placement="top" title="Linkedin">
                      <i className="icon-linkedin" />
                      <i className="icon-linkedin" />
                    </a>
                    <a href="#" className="social-icon social-icon-border social-rss pull-left" data-toggle="tooltip" data-placement="top" title="Rss">
                      <i className="icon-rss" />
                      <i className="icon-rss" />
                    </a>
                  </div>
                  {/* /Social Icons */}
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <ul className="pull-right nomargin list-inline mobile-block">
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li>•</li>
                  <li><a href="#">Privacy</a></li>
                </ul>
                © All Rights Reserved, Company LTD
              </div>
            </div>
          </footer>
          {/* /FOOTER */}
        </div>
      </div>
    );
  }
}

MembersDetail.propTypes = {
  bio: PropTypes.string,
  displayName: PropTypes.string.isRequired,
  image: PropTypes.shape({
    uri: PropTypes.string.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  intro: PropTypes.string,
  slug: PropTypes.string.isRequired,
  usState: PropTypes.string,
};

export default MembersDetail;
