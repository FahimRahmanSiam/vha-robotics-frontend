import logo from "../assets/logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">

        {/* ==============================
            TOP TECH LINE
        =============================== */}

        <div className="footer-topline">
          <span>VHA // ROBOTICS & COMPUTER SCIENCE</span>

          <span className="footer-status">
            <i></i>
            HOUSTON, TEXAS
          </span>
        </div>


        {/* ==============================
            MAIN FOOTER
        =============================== */}

        <div className="footer-main">

          {/* BRAND */}

          <div className="footer-brand">
            <a
              href="/"
              className="footer-logo"
              aria-label="Van Houston Academy Home"
            >
              <img
                src={logo}
                alt="Van Houston Academy Logo"
              />
            </a>

            <div className="footer-brand-copy">
              <span>VAN HOUSTON ACADEMY</span>

              <h2>
                BUILD.
                <br />
                CODE.
                <br />
                <span className="gradient-text">
                  CREATE.
                </span>
              </h2>

              <p>
                Preparing students to understand, build and
                shape the technologies of tomorrow.
              </p>
            </div>
          </div>


          {/* CONTACT */}

          <div className="footer-column">
            <span className="footer-column-title">
              CONTACT
            </span>

            <a href="tel:+12812350521">
              +1 281 235 0521
            </a>

            <a href="mailto:admin@vanhoustonacademy.com">
              admin@vanhoustonacademy.com
            </a>

            <span className="footer-location">
            9531 Eldridge Pkwy, Houston, TX 77083
            </span>
          </div>


          {/* SOCIAL */}

          <div className="footer-column">
            <span className="footer-column-title">
              CONNECT
            </span>

            <a
              href="https://www.facebook.com/VanHoustonAcademy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Facebook</span>
              <span className="footer-arrow">↗</span>
            </a>

            <a
              href="https://www.instagram.com/vanhouston_academy?igsh=d3VtNXV3cXB0bm56"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Instagram</span>
              <span className="footer-arrow">↗</span>
            </a>

            <a
              href="https://vanhoustonacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Main School Website</span>
              <span className="footer-arrow">↗</span>
            </a>
          </div>


          {/* BACK TO TOP */}

          <div className="footer-back">
            <button
              onClick={scrollToTop}
              className="back-to-top"
              aria-label="Back to top"
            >
              <span>↑</span>

              <small>
                BACK
                <br />
                TO TOP
              </small>
            </button>
          </div>

        </div>


        {/* ==============================
            BOTTOM
        =============================== */}

        <div className="footer-bottom">

          <p>
            © {currentYear} Van Houston Academy.
            All Rights Reserved.
          </p>

          <div className="footer-bottom-tags">
            <span>ROBOTICS</span>
            <i></i>
            <span>COMPUTER SCIENCE</span>
            <i></i>
            <span>FUTURE SYSTEMS</span>
          </div>

        </div>

      </div>

      <div className="footer-glow"></div>
    </footer>
  );
}

export default Footer;