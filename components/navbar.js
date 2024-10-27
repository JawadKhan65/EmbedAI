'use client';
import logo from '../public/embed-ai.png';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = (props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showReg, setShowReg] = useState(true);
  const [isLogged, setLogged] = useState(false);
  const [disabled, setDisabled] = useState(true);


  //google translate
  useEffect(() => {
    const googleTranslateElementId = 'google_translate_element';

    const WindowGoogleTranslateElementInit = () => {
      if (document.getElementById(googleTranslateElementId) && window.google && window.google.translate) {
        return;
      }

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
          autoDisplay: false,
        }, googleTranslateElementId);
      };
      let locale = window.navigator.language.split('-')[0] || 'en';
      setTimeout(() => {
        const translation_btn = document.querySelector(`select.goog-te-combo`)
        if (translation_btn) {
          translation_btn.value = locale
          translation_btn.dispatchEvent(new Event('change'))
        }
      }, 3000)

      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    WindowGoogleTranslateElementInit();

    return () => {
      const existingScript = document.querySelector(`script[src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]`);

      // Only try to remove the script if it exists
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }

      // Clean up global variable if it exists
      if (window.googleTranslateElementInit) {
        delete window.googleTranslateElementInit;
        window.location.reload();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once






  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRegister = () => {
    router.push('/register');
  };

  const handleScrollPricing = () => {
    const pricing = document.getElementsByClassName('pricing-pricing23')[0];
    if (pricing) {
      pricing.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollContact = () => {
    const contact = document.getElementsByClassName('contact-contact20')[0];
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollServices = () => {
    const services = document.getElementsByClassName('carousel-container')[0];
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollAbout = () => {
    const about = document.getElementsByClassName('about')[0];
    if (about) {
      about.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Set `disabled` state based on pathname
    setDisabled(pathname.includes('/dashboard'));
    setShowReg(pathname !== '/register');
  }, [pathname]);

  useEffect(() => {
    const fetchAuthToken = async () => {
      try {
        const response = await fetch('/api/validate');
        const data = await response.json();

        if (response.ok && data.success) {
          setLogged(true);
        } else {
          setLogged(false);
        }
      } catch (err) {
        console.error('Error fetching auth token:', err);
        setLogged(false);
      }
    };

    fetchAuthToken();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setLogged(false);
        router.push('/register');
      } else {
        console.error('Logout failed:', data.response || 'Logout failed');
      }
    } catch (err) {
      console.error('Error during logout:', err);
    }
  };

  // Render nothing if `disabled` is true
  if (disabled) {
    return null;
  }

  return (
    <header className="navbar-container">
      <header data-thq="thq-navbar" className="navbar-navbar-interactive">
        <Image
          onClick={() => router.push('/')}
          height={60}
          width={60}
          alt={props.logoAlt}
          src={logo}
          className="navbar-image1"
        />
        {showReg && (
          <>
            <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
              <nav className="navbar-links1">
                {pathname !== '/' && (
                  <span onClick={() => router.push('/')} className="thq-link thq-body-small">{props.link1}</span>
                )}
                <span onClick={handleScrollAbout} className="thq-link thq-body-small">{props.link2}</span>
                <span onClick={handleScrollServices} className="thq-link thq-body-small">{props.link3}</span>
                <span onClick={handleScrollContact} className="thq-link thq-body-small">{props.link4}</span>
                {/* <span onClick={handleScrollPricing} className="thq-link thq-body-small">{props.link5}</span> */}
                {isLogged && <span onClick={() => router.push('/dashboard')} className="thq-link thq-body-small">Dashboard</span>}
              </nav>
              <div className="navbar-buttons1">
                <div id="google_translate_element"></div>
              </div>
              {/* <div className="navbar-buttons1">
                {isLogged ? (
                  <button onClick={handleLogout} className="navbar-action21 thq-button-outline thq-button-animated">
                    <span className="thq-body-small">Logout</span>
                  </button>
                ) : (
                  <>
                    <button onClick={handleRegister} className="navbar-action11 thq-button-animated thq-button-filled">
                      <span className="thq-body-small">{props.action1}</span>
                    </button>
                    <button onClick={handleRegister} className="navbar-action21 thq-button-outline thq-button-animated">
                      <span className="thq-body-small">{props.action2}</span>
                    </button>
                  </>
                )}
              </div> */}
            </div>
            <div data-thq="thq-burger-menu" className="navbar-burger-menu" onClick={toggleMenu}>
              <svg viewBox="0 0 1024 1024" className="navbar-icon1">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className={`navbar-mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <div className="navbar-nav">
                <div className="navbar-top">
                  <Image
                    height={60}
                    width={60}
                    alt={props.logoAlt}
                    src={logo}
                    className="navbar-logo"
                  />
                  <div data-thq="thq-close-menu" className="navbar-close-menu" onClick={toggleMenu}>
                    <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav className="navbar-links2">
                  {pathname !== '/' && (
                    <span className="thq-link thq-body-small">{props.link1}</span>
                  )}
                  <span onClick={handleScrollAbout} className="thq-link thq-body-small">{props.link2}</span>
                  <span onClick={handleScrollServices} className="thq-link thq-body-small">{props.link3}</span>
                  <span onClick={handleScrollContact} className="thq-link thq-body-small">{props.link4}</span>
                  {/* <span onClick={handleScrollPricing} className="thq-link thq-body-small">{props.link5}</span> */}
                  {isLogged && (
                    <span onClick={() => router.push('/dashboard')} className="thq-link thq-body-small">Dashboard</span>
                  )}
                </nav>
              </div>
              <div className="navbar-buttons2">
                <div id="google_translate_element"></div>

              </div>
              {/* <div className="navbar-buttons2">
                {isLogged ? (
                  <button onClick={handleLogout} className="thq-button-filled">Logout</button>
                ) : (
                  <>
                    <button onClick={handleRegister} className="thq-button-filled">{props.action1}</button>
                    <button onClick={handleRegister} className="thq-button-outline">{props.action2}</button>
                  </>
                )}
              </div> */}
            </div>
          </>
        )}
      </header>
    </header>
  );
};

Navbar.defaultProps = {
  logoAlt: 'logo',
  link1: 'Home',
  link2: 'About',
  link3: 'Services',
  link4: 'Contact',
  link5: 'Pricing',
  action1: 'Register',
  action2: 'Login',
};

Navbar.propTypes = {
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
};

export default Navbar;
