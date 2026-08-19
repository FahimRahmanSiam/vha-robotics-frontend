import principalImg from "../assets/principal.png";
import assistantPrincipalImg from "../assets/ap.png";
import csTeacherImg from "../assets/csteacher.jpg";
import cartoon from "../assets/cartoon.png";

function Journey() {
  const timelineData = [
    {
      year: "2016",
      title: "School established",
      side: "right",
    },
    {
      year: "2018",
      title: "First robotics club was formed",
      side: "left",
    },
    {
      year: "2019",
      title: "Texas VEX IQ State Championship - Qualified",
      side: "right",
    },
    {
      year: "2020",
      title: "Texas VEX IQ State Championship - Runner up  ||  Project on Artificial Intelligence for facial pattern recognition",
      side: "left",
    },
    {
      year: "2022",
      title: "Integration between the Robotics club and a prospective Computer Science club",
      side: "right",
    },
    {
      year: "2025",
      title: "Houston VEX Robotics Competition - 5th Place  ||  Qualifying for First Lego League regional and state round (FLL explore)  ||  Qualifying for the FLL World Championship 2026",
      side: "left",
    },
    {
      year: "2026",
      title: "First Lego League World Championship - Model Award",
      side: "right",
    },
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Vỹ Văn",
      title: "Principal",
      image: principalImg,
    },
    {
      id: 2,
      name: "Raghdah Baha",
      title: "Assistant Principal",
      image: assistantPrincipalImg,
    },
    {
      id: 3,
      name: "Fahim Rahman",
      title: "CS & Robotics Teacher",
      image: csTeacherImg,
    },
  ];

  return (
    <main className="journey-page">

      {/* =====================================
          HERO
      ====================================== */}

      <section className="journey-hero" data-aos="fade-up">
        <div className="container">
          <div className="right">
            <div className="journey-system-bar">
              <span>VHA // OUR JOURNEY</span>

              <span className="journey-status">
                <i></i>
                TIMELINE ACTIVE
              </span>
            </div>

            <div className="journey-hero-copy">
              <span className="eyebrow">
                How It Started. How It Grew.
              </span>

              <h1>
                OUR
                <br />
                <span className="gradient-text">
                  JOURNEY.
                </span>
              </h1>

              <p>
                The robotics and computer science journey at Van Houston Academy
                has grown step by step through curiosity, experimentation,
                participation and vision for what comes next.
              </p>
            </div>
          </div>
          <div className="left" data-aos="zoom-in">
            <img src={cartoon} alt="" srcset="" />
          </div>
        </div>

      </section>


      {/* =====================================
          TIMELINE
      ====================================== */}

      <section className="journey-timeline-section">
        <div className="container">

        <div className="timeline-shell" data-aos="fade-right">

{/* CENTRAL TRUNK */}
<div className="timeline-core-line"></div>


{timelineData.map((item, index) => (

  <article
    key={`${item.year}-${index}`}
    className={`timeline-row ${item.side}`}
  >

    {/* =================================
        LEFT EVENT
    ================================== */}

    <div className="timeline-half timeline-half-left">

      {item.side === "left" && (

        <div className="timeline-card timeline-card-left">

          <span className="timeline-year">
            {item.year}
          </span>


          <div className="timeline-connector">

            <span className="timeline-node"></span>

            <span className="timeline-branch"></span>

          </div>


          <p className="timeline-text">
            {item.title}
          </p>

        </div>

      )}

    </div>


    {/* =================================
        RIGHT EVENT
    ================================== */}

    <div className="timeline-half timeline-half-right">

      {item.side === "right" && (

        <div className="timeline-card timeline-card-right">

          <span className="timeline-year">
            {item.year}
          </span>


          <div className="timeline-connector">

            <span className="timeline-branch"></span>

            <span className="timeline-node"></span>

          </div>


          <p className="timeline-text">
            {item.title}
          </p>

        </div>

      )}

    </div>

  </article>

))}

</div>

        </div>
      </section>


      {/* =====================================
          OUR STORY / TEAM
      ====================================== */}

      <section className="journey-story-section">
        <div className="container">

        <div className="story-section-label">

          <span></span>

          <h2>
            OUR STORY
          </h2>

          </div>

          <div className="story-people-grid" data-aos="fade-up">
            {teamMembers.map((person) => (
              <article
                key={person.id}
                className="story-person-card"
              >
                <div className="story-person-image-wrap">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="story-person-image"
                  />
                </div>

                <div className="story-person-meta">
                  <h3>{person.name}</h3>
                  <span>{person.title}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="story-text-block" data-aos="fade-up">
            <p>
            The Van Houston Academy Robotics Team was established in <span>2019</span> with the goal of providing students with hands-on STEM experiences in engineering, programming, teamwork, and problem-solving. At the time, <span>Mrs. Raghdah Baha </span>served as the school's STEM teacher and Robotics Coach, leading the development of the program from its inception. <br /> <br />

Students learned to design, build, and program their own VEX IQ robots while developing critical thinking, collaboration, and engineering skills. Through months of dedication, practice, and competition, the team advanced through qualifying events and ultimately earned a place at the <span>Texas VEX IQ State Championship</span>.

Upon reaching the state championship, the team chose to expand its participation by competing in the STEM Research Project category in addition to the robotics competition. Under the guidance of <span>Principal Mr. Van</span>, the students conducted research on Artificial Intelligence (AI) and explored the potential use of facial recognition technology in medical diagnosis. Their project examined how AI-powered facial recognition systems could assist healthcare professionals by identifying facial characteristics associated with certain genetic disorders and medical conditions, demonstrating how emerging technologies could contribute to earlier detection and improved patient care. <br /><br />

Their innovative research, combined with a professional presentation and strong teamwork, earned the team the prestigious <span>VEX IQ STEM Research Project Award</span> at the Texas State Championship, qualifying Van Houston Academy to compete at the VEX IQ World Championship—a remarkable achievement for a first-year robotics program.

Unfortunately, shortly after qualifying for the World Championship, the COVID-19 pandemic forced schools across the country to close. Van Houston Academy temporarily shut down, and the robotics program was placed on hold, preventing the team from participating in the World Championship and bringing the program to an unexpected pause.

Although the program was interrupted, the accomplishments of the 2019 robotics team remain an important milestone in Van Houston Academy's history. The team's success demonstrated the talent, dedication, innovation, and perseverance of its students while laying a strong foundation for the continued growth of STEM education, robotics, and engineering at Van Houston Academy. <br /><br />

After a long break and a transition to a new school building, the school resumed its robotics and computer science programs with renewed enthusiasm. <span>Mr Rahman</span> joined the school as the new Computer Science and Robotics teacher, bringing fresh energy and direction to the program.

The year 2025 marked a significant period of growth and success for the school. With the support of the principal, assistant principal, and dedicated students, the Robotics and Computer Science Club quickly regained momentum and began operating at full pace. The senior squad focused on <span>VEX</span> robotics competitions, while the elementary group began preparing for the <span>First Lego League (FLL)</span> regional championship.

New materials were purchased, new plans were developed, and, most importantly, the students demonstrated an impressive ability to learn and adapt to new concepts and technologies. Their hard work quickly translated into remarkable results. The elementary team won the regional round and received both the <span>best poster</span> and <span>coding</span> awards. Although the journey was not without challenges, the students continued to move forward through determination, teamwork, and sheer dedication. Step by step, they successfully advanced through each stage of the competition.  <br /> <br />

Following their successful qualifying round and presentation of the team model, the elementary team achieved an even greater milestone in 2026, an invitation to the <span>FLL World Championship</span>, held in Houston in April. The four-day event provided an extraordinary opportunity for the students to experience robotics on an international stage. For our team, this was their first exposure to a competition of such remarkable scale. Nearly 300 teams representing 58 countries came together to showcase their projects, models, creativity, and technical skills. The experience was both exciting and educational, giving our students the opportunity to learn from teams around the world while gaining valuable experience that will continue to inspire their robotics journey. Despite everything, our team gained the prestigious <span>team model award</span>. This was, by far, our biggest achievement since the inception of our robotics and computer science club. <br /><br />
As we look toward the future, we are excited to continue building on these achievements and creating even greater opportunities for our students to explore robotics, computer science, innovation, and teamwork. We look forward to reaching new milestones, competing at an even higher level, and inspiring the next generation of young innovators. We also warmly welcome individuals, organizations, and community members who are willing to <span>support</span> our program. Whether through mentorship, resources, or sponsorship, your support can make a meaningful difference in helping our school’s robotics and computer science team grow, thrive, and achieve even greater success in the years ahead.


            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Journey;