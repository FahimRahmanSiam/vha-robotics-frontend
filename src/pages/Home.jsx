import { Link } from "react-router";
import PartnerModal from "../components/PartnerModal";
import { useState } from "react";

function Home() {
  const [
    partnerModalOpen,
    setPartnerModalOpen,
  ] = useState(false);


  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-copy" data-aos="fade-up">
            <span className="eyebrow">
              Robotics • Computer Science • Innovation
            </span>

            <h1>
              BUILDING THE
              <span className="gradient-text">
                {" "}
                FUTURE.
              </span>
            </h1>

            <p className="hero-description">
              Our students at VHA design, build, code, experiment and explore
              technologies that transform ideas into real-world
              innovation.
            </p>

            <div className="hero-actions">
              <Link
                to="/blogs"
                className="btn btn-primary"
              >
                Explore Our Work
              </Link>

              <Link
                to="/journey"
                className="btn btn-secondary"
              >
                Our Journey →
              </Link>
            </div>
          </div>

          <div className="hero-visual" data-aos="fade-right">
            <div className="hero-orbit orbit-one"></div>

            <div className="hero-orbit orbit-two"></div>

            <div className="hero-core">
              <span>01</span>
            </div>

            <span className="hud-label hud-one">
              ROBOTICS
            </span>

            <span className="hud-label hud-two">
              AI SYSTEMS
            </span>

            <span className="hud-label hud-three">
              ENGINEERING
            </span>
          </div>
        </div>
      </section>

            {/* =====================================
          ABOUT / VISION
      ====================================== */}

<section className="school-vision-section">
        <div className="container">

          {/* TOP TECH LABEL */}

          <div className="vision-topbar" data-aos="fade-up">
            <span>VHA // EDUCATION FOR THE NEXT ERA</span>

            <span className="system-status">
              <i></i>
              FUTURE READY
            </span>
          </div>


          <div className="vision-layout" data-aos="fade-right">

            {/* ===============================
                LEFT SIDE
            ================================ */}

            <div className="vision-main">

              <span className="eyebrow">
                About Van Houston Academy
              </span>

              <h2>
                Education should prepare students for the world
                <span className="gradient-text">
                  {" "}
                  they will actually live in.
                </span>
              </h2>

              <p className="vision-intro">
                Van Houston Academy is a Cognia-accredited private K–12
                school in Houston, Texas, serving both local and
                international students through personalized education,
                rigorous academics and future-focused learning.
              </p>

              <p className="vision-intro">
                Founded in 2016 by Principal Vy Van, a Stanford-educated
                educator, VHA is expanding its vision beyond traditional
                academics. As artificial intelligence, automation and
                computing reshape nearly every industry, our goal is to
                give students more than technological literacy.
              </p>


              <div className="vision-statement" data-aos="fade-left">
                <span className="vision-index">V.01</span>

                <div>
                  <span className="vision-label">
                    OUR TECHNOLOGY VISION
                  </span>

                  <p>
                    Students should learn how technology works, how to
                    build with it, how to question it and how to use it
                    creatively to solve real problems.
                  </p>
                </div>
              </div>


              <a
                href="https://vanhoustonacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="school-link"
              >
                <span>Visit Van Houston Academy</span>
                <span className="school-link-arrow">↗</span>
              </a>

            </div>


            {/* ===============================
                RIGHT SIDE - FUTURE PANEL
            ================================ */}

            <div className="future-panel">

              <div className="future-panel-header">
                <span>VHA // FUTURE SYSTEMS</span>
                <span>02 / 04</span>
              </div>


              <div className="future-core">

                <div className="future-ring ring-a"></div>
                <div className="future-ring ring-b"></div>
                <div className="future-ring ring-c"></div>

                <div className="future-center">
                  <span className="future-center-small">
                    VHA
                  </span>

                  <strong>
                    NEXT
                    <br />
                    GEN
                  </strong>

                  <span className="future-center-status">
                    LEARNING
                  </span>
                </div>

              </div>


              <div className="future-fields">

                <div className="future-field">
                  <span className="field-number">01</span>

                  <div>
                    <strong>ROBOTICS</strong>
                    <span>Design • Build • Control</span>
                  </div>
                </div>


                <div className="future-field">
                  <span className="field-number">02</span>

                  <div>
                    <strong>COMPUTER SCIENCE</strong>
                    <span>Logic • Code • Systems</span>
                  </div>
                </div>


                <div className="future-field">
                  <span className="field-number">03</span>

                  <div>
                    <strong>AI & MACHINE LEARNING</strong>
                    <span>Data • Models • Intelligence</span>
                  </div>
                </div>


                <div className="future-field">
                  <span className="field-number">04</span>

                  <div>
                    <strong>ENGINEERING</strong>
                    <span>Prototype • Test • Improve</span>
                  </div>
                </div>

              </div>

            </div>

          </div>


          {/* =================================
              SCHOOL STATS
          ================================== */}

          <div className="school-stats" data-aos="zoom-in">

            <div className="school-stat">
              <span className="stat-code">VHA.01</span>
              <strong>300+</strong>
              <span>Current Students</span>
            </div>

            <div className="school-stat">
              <span className="stat-code">VHA.02</span>
              <strong>1:10</strong>
              <span>Faculty : Student</span>
            </div>

            <div className="school-stat">
              <span className="stat-code">VHA.03</span>
              <strong>1350</strong>
              <span>Average SAT Score</span>
            </div>

            <div className="school-stat">
              <span className="stat-code">VHA.04</span>
              <strong>K–12</strong>
              <span>Future-Focused Education</span>
            </div>

          </div>

        </div>
      </section>

{/* =====================================
    TECHNOLOGY JOURNEY
====================================== */}

<section className="technology-section" >
  <div className="container" data-aos="fade-up">

    {/* TOP SYSTEM BAR */}

    <div className="technology-topbar">
      <span>
        VHA // ROBOTICS & COMPUTER SCIENCE PATHWAY
      </span>

      <span className="technology-phase">
        <i></i>
        LAB DEVELOPMENT // PHASE 01
      </span>
    </div>


    {/* SECTION INTRO */}

    <div className="technology-heading" data-aos="fade-up">

      <div>
        <span className="eyebrow">
          Inside Our Technology Journey
        </span>

        <h2>
          STARTING WITH THE
          <br />
          <span className="gradient-text">
            FUNDAMENTALS.
          </span>
        </h2>
      </div>

      <div className="technology-heading-copy">
        <p>
          Our robotics and computer science program is still
          growing. We are building it step by step, beginning
          with accessible tools that allow students to explore,
          experiment and understand how technology works.
        </p>

        <p>
          We do not believe students need the largest lab to
          begin creating. They need curiosity, strong
          fundamentals, meaningful challenges and the
          opportunity to build.
        </p>
      </div>

    </div>


    {/* =====================================
        LEARNING LEVELS
    ====================================== */}

    <div className="learning-pathways">

      {/* ELEMENTARY */}

      <article className="pathway-card elementary-pathway">

        <div className="pathway-number">
          01
        </div>

        <div className="pathway-header">
          <div>
            <span className="pathway-code">
              FOUNDATION SYSTEM
            </span>

            <h3>Elementary</h3>
          </div>

          <span className="pathway-status">
            ACTIVE
          </span>
        </div>


        <p className="pathway-description">
          Young students begin by learning how structures,
          mechanisms, instructions and simple machines work
          through hands-on construction and visual programming.
        </p>


        <div className="technology-list">

          <div className="technology-item">
            <span className="technology-index">
              01.01
            </span>

            <div>
              <strong>
                LEGO Education SPIKE Essential
              </strong>

              <span>
                Introductory robotics and engineering
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              01.02
            </span>

            <div>
              <strong>
                LEGO Block Building
              </strong>

              <span>
                Structure, creativity and construction
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              01.03
            </span>

            <div>
              <strong>
                Block Coding
              </strong>

              <span>
                Logic, sequence and computational thinking
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              01.04
            </span>

            <div>
              <strong>
                Basic Breadboards
              </strong>

              <span>
                Introduction to simple electronic circuits
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              01.05
            </span>

            <div>
              <strong>
                Basic Gear Systems
              </strong>

              <span>
                Motion, mechanisms and mechanical thinking
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              01.06
            </span>

            <div>
              <strong>
                Dash &amp; Dot Robots
              </strong>

              <span>
                Interactive robotics and problem solving
              </span>
            </div>
          </div>

        </div>


        <div className="pathway-footer">
          <span>
            BUILD
          </span>

          <i></i>

          <span>
            EXPLORE
          </span>

          <i></i>

          <span>
            UNDERSTAND
          </span>
        </div>

      </article>


      {/* =====================================
          MIDDLE + HIGH SCHOOL
      ====================================== */}

      <article className="pathway-card advanced-pathway">

        <div className="pathway-number">
          02
        </div>

        <div className="pathway-header">

          <div>
            <span className="pathway-code">
              ADVANCED LEARNING SYSTEM
            </span>

            <h3>
              Middle &amp; High School
            </h3>
          </div>

          <span className="pathway-status">
            EXPANDING
          </span>

        </div>


        <p className="pathway-description">
          Older students move from visual learning into
          programming, electronics, physical computing,
          robotics and digital design, connecting software
          with real-world systems.
        </p>


        <div className="technology-list advanced-list">

          <div className="technology-item">
            <span className="technology-index">
              02.01
            </span>

            <div>
              <strong>Python Programming</strong>

              <span>
                Programming fundamentals and problem solving
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              02.02
            </span>

            <div>
              <strong>VEX Robotics</strong>

              <span>
                Robot design, control and engineering
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              02.03
            </span>

            <div>
              <strong>
                Arduino &amp; Raspberry Pi
              </strong>

              <span>
                Physical computing and embedded systems
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              02.04
            </span>

            <div>
              <strong>
                Sensors &amp; Electronics
              </strong>

              <span>
                Connecting computation with the physical world
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              02.05
            </span>

            <div>
              <strong>
                Motors &amp; Motor Drivers
              </strong>

              <span>
                Motion systems and robotic actuation
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              02.06
            </span>

            <div>
              <strong>
                Web Development
              </strong>

              <span>
                Building interactive digital experiences
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              02.07
            </span>

            <div>
              <strong>
                3D Design with Tinkercad
              </strong>

              <span>
                Digital modeling and design thinking
              </span>
            </div>
          </div>


          <div className="technology-item">
            <span className="technology-index">
              02.08
            </span>

            <div>
              <strong>
                Game Development
              </strong>

              <span>
                Programming through interactive creation
              </span>
            </div>
          </div>

        </div>


        <div className="pathway-footer">
          <span>
            CODE
          </span>

          <i></i>

          <span>
            ENGINEER
          </span>

          <i></i>

          <span>
            CREATE
          </span>
        </div>

      </article>

    </div>


    {/* =====================================
        JOURNEY STATEMENT
    ====================================== */}

    <div className="journey-manifesto" data-aos="fade-up">

      <div className="manifesto-marker">
        <span>VHA</span>
        <strong>∞</strong>
      </div>

      <div className="manifesto-copy">

        <span className="manifesto-label">
          THIS IS ONLY THE BEGINNING
        </span>

        <h3>
          We are building the program
          <span className="gradient-text">
            {" "}
            one step at a time.
          </span>
        </h3>

        <p>
          Our current resources represent the beginning of
          VHA's long-term robotics and computer science
          journey. There is much more for us to learn, build
          and introduce to our students.
        </p>

        <p>
          Our ambition is to continuously expand access to
          modern robotics, engineering, computer science,
          artificial intelligence and emerging technologies
          as our program develops.
        </p>

      </div>

    </div>


    {/* =====================================
        SUPPORT / SPONSOR SECTION
    ====================================== */}

    <div className="support-panel" data-aos="zoom-in">

      <div className="support-grid"></div>

      <div className="support-content">

        <div className="support-left">

          <span className="support-code">
            VHA // NEXT CHAPTER
          </span>

          <h3>
            HELP US BUILD
            <br />
            <span className="gradient-text">
              WHAT COMES NEXT.
            </span>
          </h3>

        </div>


        <div className="support-right">

          <p>
            Expanding a meaningful technology program takes
            more than equipment. It takes educators, mentors,
            partners and a community that believes students
            should have access to the tools shaping their
            future.
          </p>

          <p>
            VHA welcomes sponsors, technology partners,
            donors and supporters interested in helping us
            expand our robotics and computer science
            opportunities for students.
          </p>


          <div className="support-actions">

          <button
              type="button"

              className="btn btn-primary"

              onClick={() =>
                setPartnerModalOpen(true)
              }
            >
              Partner With VHA
            </button>

            <a
              href="https://vanhoustonacademy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Learn About VHA ↗
            </a>

          </div>

        </div>

      </div>


      <div className="support-bottom">

        <span>ROBOTICS</span>
        <span>01</span>

        <i></i>

        <span>COMPUTER SCIENCE</span>
        <span>02</span>

        <i></i>

        <span>ENGINEERING</span>
        <span>03</span>

        <i></i>

        <span>EMERGING TECHNOLOGY</span>
        <span>04</span>

      </div>

    </div>

  </div>
</section>

    <PartnerModal
      isOpen={partnerModalOpen}

      onClose={() =>
        setPartnerModalOpen(false)
      }
    />
    </main>
  );
}

export default Home;