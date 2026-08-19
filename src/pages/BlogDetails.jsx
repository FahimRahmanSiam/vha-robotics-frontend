import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router";

import {
  API_URL,
  getImageUrl,
} from "../utils/api";


function BlogDetails() {
  const { slug } = useParams();

  const [blog, setBlog] =
    useState(null);

  const [allBlogs, setAllBlogs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");


  /* =====================================
     LOAD BLOG
  ====================================== */

  useEffect(() => {
    const controller =
      new AbortController();


    const loadBlog = async () => {
      try {
        setLoading(true);
        setError("");


        const [
          blogResponse,
          blogsResponse,
        ] = await Promise.all([
          fetch(
            `${API_URL}/api/blogs/${encodeURIComponent(slug)}`,
            {
              signal:
                controller.signal,
            }
          ),

          fetch(
            `${API_URL}/api/blogs`,
            {
              signal:
                controller.signal,
            }
          ),
        ]);


        if (!blogResponse.ok) {
          if (
            blogResponse.status === 404
          ) {
            throw new Error(
              "This story could not be found."
            );
          }

          throw new Error(
            "Unable to load this story."
          );
        }


        const blogData =
          await blogResponse.json();


        const blogsData =
          blogsResponse.ok
            ? await blogsResponse.json()
            : [];


        setBlog(blogData);

        setAllBlogs(
          [...blogsData].sort(
            (a, b) =>
              new Date(b.date) -
              new Date(a.date)
          )
        );


        window.scrollTo(0, 0);

      } catch (error) {
        if (
          error.name !==
          "AbortError"
        ) {
          console.error(error);

          setError(
            error.message ||
            "Unable to load this story."
          );
        }

      } finally {
        if (
          !controller.signal.aborted
        ) {
          setLoading(false);
        }
      }
    };


    loadBlog();


    return () => {
      controller.abort();
    };

  }, [slug]);


  /*
    React supports fetching external data
    from an Effect in client-side apps.
  */
  // https://react.dev/reference/react/useEffect


  /* =====================================
     ARTICLE HEADINGS
  ====================================== */

  const articleHeadings =
    useMemo(() => {
      if (!blog?.sections) {
        return [];
      }

      return blog.sections
        .map(
          (section, index) => ({
            ...section,
            originalIndex: index,
          })
        )
        .filter(
          (section) =>
            section.type ===
            "heading"
        );

    }, [blog]);


  /* =====================================
     READING TIME
  ====================================== */

  const readingTime =
    useMemo(() => {
      if (!blog?.sections) {
        return 1;
      }


      const words =
        blog.sections
          .filter(
            (section) =>
              section.type ===
                "paragraph" ||
              section.type ===
                "heading" ||
              section.type ===
                "quote"
          )
          .map(
            (section) =>
              section.text || ""
          )
          .join(" ")
          .trim()
          .split(/\s+/)
          .filter(Boolean)
          .length;


      return Math.max(
        1,
        Math.ceil(words / 220)
      );

    }, [blog]);


  /* =====================================
     PREVIOUS / NEXT BLOG
  ====================================== */

  const {
    newerBlog,
    olderBlog,
  } = useMemo(() => {
    if (
      !blog ||
      allBlogs.length === 0
    ) {
      return {
        newerBlog: null,
        olderBlog: null,
      };
    }


    const currentIndex =
      allBlogs.findIndex(
        (item) =>
          item.slug ===
          blog.slug
      );


    if (currentIndex === -1) {
      return {
        newerBlog: null,
        olderBlog: null,
      };
    }


    return {
      newerBlog:
        currentIndex > 0
          ? allBlogs[
              currentIndex - 1
            ]
          : null,

      olderBlog:
        currentIndex <
        allBlogs.length - 1
          ? allBlogs[
              currentIndex + 1
            ]
          : null,
    };

  }, [blog, allBlogs]);


  /* =====================================
     LOADING
  ====================================== */

  if (loading) {
    return (
      <main className="blog-details-page">

        <section className="blog-details-loading">

          <div className="blog-details-loader">
            <span></span>

            <p>
              LOADING STORY //
              VHA ARCHIVE
            </p>
          </div>

        </section>

      </main>
    );
  }


  /* =====================================
     ERROR
  ====================================== */

  if (error || !blog) {
    return (
      <main className="blog-details-page">

        <section className="blog-details-error">

          <div className="container">

            <span className="error-code">
              ARCHIVE // 404
            </span>

            <h1>
              Story unavailable.
            </h1>

            <p>
              {error ||
                "This story could not be found."}
            </p>

            <Link
              to="/blogs"
              className="btn btn-primary"
            >
              Return to Stories
            </Link>

          </div>

        </section>

      </main>
    );
  }


  /* =====================================
     DATE
  ====================================== */

  const formattedDate =
    new Date(
      `${blog.date}T00:00:00`
    ).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );


  /* =====================================
     SECTION RENDERER
  ====================================== */

  const renderSection = (
    section,
    index
  ) => {
    switch (section.type) {

      /* PARAGRAPH */

      case "paragraph":
        return (
          <p
            className="article-paragraph"
            key={index}
          >
            {section.text}
          </p>
        );


      /* HEADING */

      case "heading": {
        const headingId =
          `section-${index}`;

        return (
          <div
            className="article-heading-block"
            id={headingId}
            key={index}
          >

            <span className="article-heading-index">
              {String(
                index + 1
              ).padStart(
                2,
                "0"
              )}
            </span>

            <h2>
              {section.text}
            </h2>

          </div>
        );
      }

      case "secondary header":
        return (
          <h3
            className="article-secondary-heading"
            key={index}
          >
            {section.text}
          </h3>
        );
      /* IMAGE */

      case "image":
        return (
          <figure
            className="article-image"
            key={index}
          >

            <div className="article-image-frame">

              <img
                src={getImageUrl(
                  section.src
                )}
                alt={
                  section.alt ||
                  section.caption ||
                  blog.title
                }
                loading="lazy"
              />

              <span className="image-corner image-corner-top">
              </span>

              <span className="image-corner image-corner-bottom">
              </span>

            </div>


            {section.caption && (

              <figcaption>

                <span>
                  FIG //
                  {String(
                    index + 1
                  ).padStart(
                    2,
                    "0"
                  )}
                </span>

                <p>
                  {
                    section.caption
                  }
                </p>

              </figcaption>

            )}

          </figure>
        );


      /* QUOTE */

      case "quote":
        return (
          <blockquote
            className="article-quote"
            key={index}
          >

            <span>
              “
            </span>

            <p>
              {section.text}
            </p>

            {section.author && (
              <cite>
                {section.author}
              </cite>
            )}

          </blockquote>
        );


      /* LIST */

      case "list":
        return (
          <ul
            className="article-list"
            key={index}
          >

            {section.items?.map(
              (item, itemIndex) => (

                <li key={itemIndex}>
                  <span></span>
                  {item}
                </li>

              )
            )}

          </ul>
        );


      /* DIVIDER */

      case "divider":
        return (
          <div
            className="article-divider"
            key={index}
          >

            <span></span>
            <i></i>
            <span></span>

          </div>
        );


      default:
        return null;
    }
  };


  return (
    <main className="blog-details-page">

      {/* =================================
          ARTICLE HERO
      ================================== */}

<section className="article-hero">

<div className="article-reading-shell">

  <div className="article-system-bar">

    <Link
      to="/blogs"
      className="back-to-blogs"
    >
      ← BACK TO STORIES
    </Link>

    <span>
      VHA // STORY ARCHIVE
    </span>

  </div>


  <div className="article-category-row">

    <span className="article-category">
      {blog.category}
    </span>

    <span className="article-category-line">
    </span>

    <span>
      {formattedDate}
    </span>

  </div>


  <h1>
    {blog.title}
  </h1>


  {blog.subtitle && (

    <p className="article-subtitle">
      {blog.subtitle}
    </p>

  )}

</div>

</section>

      {/* =================================
          BANNER
      ================================== */}

<section className="article-banner-section">

  <div className="article-reading-shell">

    <figure className="article-banner" data-aos="fade-up">

      <img
        src={getImageUrl(
          blog.bannerImage
        )}
        alt={blog.title}
      />


      <div className="article-banner-overlay">
      </div>


      <div className="banner-tech-data" data-aos="fade-up">

        <span>
          VHA // FEATURE IMAGE
        </span>

        <span>
          {String(blog.id).padStart(3, "0")}
        </span>

      </div>

    </figure>


    {/* ARTICLE INFORMATION */}

    <div className="article-info-bar">

      <div>
        <span>AUTHOR</span>

        <strong>
          {blog.author}
        </strong>
      </div>


      <div>
        <span>DATE</span>

        <strong>
          {formattedDate}
        </strong>
      </div>


      <div>
        <span>READ TIME</span>

        <strong>
          {readingTime} MIN
        </strong>
      </div>


      <div>
        <span>CATEGORY</span>

        <strong>
          {blog.category}
        </strong>
      </div>

    </div>

  </div>

</section>


      {/* =================================
          ARTICLE
      ================================== */}

<section className="article-content-section">

  <div className="article-reading-shell">

    <article className="article-body" data-aos="fade-left">

      {blog.excerpt && (

        <p className="article-lead">
          {blog.excerpt}
        </p>

      )}


      <div className="article-opening-line">

        <span>
          STORY // BEGIN
        </span>

        <i></i>

      </div>


      {blog.sections?.map(
        (section, index) =>
          renderSection(
            section,
            index
          )
      )}


      <div className="article-end">

        <span className="article-end-code">
          STORY // COMPLETE
        </span>


        <div className="article-end-mark">

          <span>VHA</span>

          <strong>//</strong>

          <span>FUTURE</span>

        </div>

      </div>

    </article>

  </div>

</section>


      {/* =================================
          NEXT / PREVIOUS
      ================================== */}

      {(newerBlog ||
        olderBlog) && (

        <section className="story-navigation">

          <div className="container">

            <div className="story-nav-header">

              <span>
                CONTINUE EXPLORING
              </span>

              <span>
                VHA // ARCHIVE
              </span>

            </div>


            <div className="story-nav-grid">

              {/* NEWER */}

              {newerBlog ? (

                <Link
                  to={
                    `/blogs/${newerBlog.slug}`
                  }
                  className="story-nav-card"
                >

                  <span className="story-nav-direction">
                    ← NEWER STORY
                  </span>

                  <strong>
                    {
                      newerBlog.title
                    }
                  </strong>

                  <span className="story-nav-category">
                    {
                      newerBlog.category
                    }
                  </span>

                </Link>

              ) : (

                <div className="story-nav-card story-nav-empty">
                  <span>
                    YOU ARE VIEWING THE
                    NEWEST STORY
                  </span>
                </div>

              )}


              {/* OLDER */}

              {olderBlog ? (

                <Link
                  to={
                    `/blogs/${olderBlog.slug}`
                  }
                  className="story-nav-card story-nav-card-next"
                >

                  <span className="story-nav-direction">
                    OLDER STORY →
                  </span>

                  <strong>
                    {
                      olderBlog.title
                    }
                  </strong>

                  <span className="story-nav-category">
                    {
                      olderBlog.category
                    }
                  </span>

                </Link>

              ) : (

                <div className="story-nav-card story-nav-empty">
                  <span>
                    END OF CURRENT
                    ARCHIVE
                  </span>
                </div>

              )}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}

export default BlogDetails;