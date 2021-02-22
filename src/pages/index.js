import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Andy Birosak'
  const siteDescription = 'Portfolio'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="two">
          <header className="major">
            <h2>Projects</h2>
          </header>
          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>
        <section id="one">
          <h2>
            About Me
            {/* <br />
              magna sed accumsan arcu neque. */}
          </h2>
          <p>
            I am a full stack software developer with experience in React,
            Django, Node, Express and Shopify. I have a passion for building
            ecommerce sites and apps that inform people.
            <br />
            <br />
            I co-founded the childrens' clothing brand Birdie Lou with my wife
            and am currently the co-owner and web developer.
            <br />
            <br />
            Previously I was an ecommerce sales executive for seven years.
            During that time I focused on bridging the gap between business and
            technical teams in order to solve client problems.
            <br />
            <br />I live in Brooklyn, NY with my wife Laura, my daughter Birdie
            and my standard poodle Greta. I am also a proud Boston University
            alum.
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>

        <section id="two">
          <h2>Music</h2>
          <p>
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/986909095&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div>
              <a
                href="https://soundcloud.com/user-138151681/black-purple"
                title="Black &amp; Purple"
                target="_blank"
              >
                Black &amp; Purple
              </a>
            </div>
          </p>
          <p>
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/983943604&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div>
              <a
                href="https://soundcloud.com/user-138151681/oh-happy-day-1"
                title="Oh Happy Day"
                target="_blank"
              >
                Oh Happy Day
              </a>
            </div>
          </p>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Please feel free to reach out with any questions about me or my
            work.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form
                method="post"
                // action="#"
                name="contact"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input
                      className="button"
                      type="submit"
                      value="Send Message"
                    />
                  </li>
                </ul>
              </form>
            </div>

            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                {/* <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Brooklyn, NY
                  <br />
                  United States
                </li> */}

                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a
                    href="mailto:andy.birosak@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    abirosak@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
