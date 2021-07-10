import React, { useState, useEffect } from 'react'
import { Menu as MenuIcon } from '@transferwise/icons'
import { Cross as CrossIcon } from '@transferwise/icons'
import RichTextToHTML from '../contentful/richTextToHTML'

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = props => {

  const { headerMenu } = props;
  const { mobileNavOpen, toggleMobileNavOpen } = props;
  const { lang, toggleLang} = props;
  const [ mobileNavTransparent, toggleNavTransparent ] = useState(true);

  let {
    products,
    services,
    successStories,
    partners,
    team,
    contact
  } = headerMenu;

  products = products[lang];
  services = services[lang];
  successStories = successStories[lang];
  partners = partners[lang];
  team = team[lang];
  contact = contact[lang];

  useEffect(() => {
    const onScroll = e => {
      const windowTop = document.documentElement.scrollTop;
      const isMobileNavTransparent = windowTop === 0 ? true : false;
      toggleNavTransparent(isMobileNavTransparent);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileNavTransparent]);


  const scrollerPreferences = {smooth: true, offset: -20};

  const productsClick = () => {
    toggleMobileNavOpen(false)
    scroller.scrollTo('productsSection', scrollerPreferences);
  }
  const servicesClick = () => {
    toggleMobileNavOpen(false)
    scroller.scrollTo('servicesSection', scrollerPreferences);
  }
  const customerSuccessClick = () => {
    toggleMobileNavOpen(false)
    scroller.scrollTo('customerSuccessSection', scrollerPreferences);
  }
  const partnersClick = () => {
    toggleMobileNavOpen(false)
    scroller.scrollTo('partnersSection', scrollerPreferences);
  }
  const teamClick = () => {
    toggleMobileNavOpen(false)
    scroller.scrollTo('teamSection', scrollerPreferences);
  }
  const contactClick = () => {
    toggleMobileNavOpen(false)
    scroller.scrollTo('contactSection', scrollerPreferences);
  }

  const englishClick = () => {
    toggleLang('en-US');
  }
  const japaneseClick = () => {
    toggleLang('ja');
  }

  const menuItems = () => {
    return (
      <ul className="nav-items-list">
        <li><a className="" onClick={productsClick}>{products}</a></li>
        <li><a className="" onClick={servicesClick}>{services}</a></li>
        <li><a className="" onClick={customerSuccessClick}>{successStories}</a></li>
        <li><a className="" onClick={partnersClick}>{partners}</a></li>
        <li><a className="" onClick={teamClick}>{team}</a></li>
        <li><a onClick={contactClick}>{contact}</a></li>
      </ul>
    )
  }

  const langSwitcher = () => {
    return (
      <div className="lang-switcher">
        <span className={lang === 'en-US' && 'active'}><a onClick={englishClick}>EN</a></span>
        <span className={lang === 'ja' && 'active'}><a onClick={japaneseClick}>日本語</a></span>
      </div>
    )
  }

  testaesfs
  return (
    <>
      <nav id="header" className={
        `${mobileNavOpen ? 'show-mobile-nav' : 'hide-mobile-nav'} ${mobileNavTransparent ? 'transparent' : 'filled'}`
      }>
        <div className='header-inner'>
          <div className="header-logo-wrapper" onClick={() => scroll.scrollToTop({smooth: true})}>
            <img className='header-logo' src={mobileNavTransparent ? '/axiom-logo-dark.svg' : '/axiom-logo-light.svg'} />
          </div>
          <div className="desktop-nav-items hide-on-mobile">
            {menuItems()}
            {langSwitcher()}
          </div>
          <div className='icon-toggle-menu hide-on-desktop' onClick={() => !toggleMobileNavOpen(!mobileNavOpen)}>
            <MenuIcon size={24} />
          </div>
        </div>
      </nav>  
      <div className={`nav-items-mobile ${mobileNavOpen ? 'open' : 'closed'}`}>
        <div className='icon-close-menu' onClick={() => !toggleMobileNavOpen(!mobileNavOpen)}>
          <CrossIcon size={24} />
        </div>
        <div onClick={() => scroll.scrollToTop({smooth: true})}>
          <img className='header-logo' src="/axiom-logo-light-vertical.svg" />
        </div>
        {menuItems()}
        {langSwitcher()}
      </div>
    </>
  )
};

export default Header;
