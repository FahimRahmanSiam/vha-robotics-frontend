import {
  useEffect,
  useMemo,
  useState,
} from "react";

import { Link } from "react-router";

import BlogCard from "../components/Blogcard";

import {
  API_URL,
  getImageUrl,
} from "../utils/api";


function Blogs() {

  const [blogs, setBlogs] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [searchTerm, setSearchTerm] =
    useState("");


  /* =====================================
     FETCH BLOGS
  ====================================== */

  useEffect(() => {

    const controller =
      new AbortController();


    const loadBlogs = async () => {

      try {

        setLoading(true);
        setError("");


        const response =
          await fetch(
            `${API_URL}/api/blogs`,
            {
              signal:
                controller.signal,
            }
          );


        if (!response.ok) {
          throw new Error(
            "Unable to load stories."
          );
        }


        const data =
          await response.json();


        const sortedBlogs = [
          ...data,
        ].sort(
          (a, b) =>
            new Date(b.date) -
            new Date(a.date)
        );


        setBlogs(sortedBlogs);


      } catch (error) {

        if (
          error.name !==
          "AbortError"
        ) {
          console.error(error);

          setError(
            "We could not load the stories. Please try again."
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


    loadBlogs();


    return () => {
      controller.abort();
    };

  }, []);


  /* =====================================
     CATEGORIES
  ====================================== */

  const categories =
    useMemo(() => {

      const uniqueCategories =
        [
          ...new Set(
            blogs
              .map(
                (blog) =>
                  blog.category
              )
              .filter(Boolean)
          ),
        ];


      return [
        "All",
        ...uniqueCategories,
      ];

    }, [blogs]);


  /* =====================================
     FEATURED BLOG
  ====================================== */

  const featuredBlog =
    useMemo(() => {

      return (
        blogs.find(
          (blog) =>
            blog.featured
        ) ||
        blogs[0] ||
        null
      );

    }, [blogs]);


  /* =====================================
     FILTERED BLOGS
  ====================================== */

  const filteredBlogs =
    useMemo(() => {

      const normalizedSearch =
        searchTerm
          .trim()
          .toLowerCase();


      return blogs.filter(
        (blog) => {

          const categoryMatch =
            selectedCategory ===
              "All" ||
            blog.category ===
              selectedCategory;


          const searchMatch =
            !normalizedSearch ||
            blog.title
              .toLowerCase()
              .includes(
                normalizedSearch
              ) ||
            blog.excerpt
              ?.toLowerCase()
              .includes(
                normalizedSearch
              ) ||
            blog.category
              ?.toLowerCase()
              .includes(
                normalizedSearch
              );


          return (
            categoryMatch &&
            searchMatch
          );

        }
      );

    }, [
      blogs,
      selectedCategory,
      searchTerm,
    ]);


  const formattedFeaturedDate =
    featuredBlog
      ? new Date(
          `${featuredBlog.date}T00:00:00`
        ).toLocaleDateString(
          "en-US",
          {
            month: "long",
            day: "numeric",
            year: "numeric",
          }
        )
      : "";


  return (
    <main className="blogs-page">

      {/* ===================================
          BLOG HERO
      ==================================== */}

      <section className="blogs-hero">

        <div className="container">

          <div className="blogs-system-bar">

            <span>
              VHA // STORIES &amp; FIELD NOTES
            </span>

            <span className="blogs-status">
              <i></i>

              ARCHIVE ONLINE
            </span>

          </div>


          <div className="blogs-hero-layout" data-aos="fade-right">

            <div>

              <span className="eyebrow">
                Ideas. Experiments. Progress.
              </span>


              <h1>
                READ OUR
                <br />

                <span className="gradient-text">
                  STORIES.
                </span>
              </h1>

            </div>


            <div className="blogs-hero-copy" data-aos="fade-up">

              <p>
                Read about the events, classroom activities,
                competitions, lessons and discoveries
                shaping robotics and computer science
                at Van Houston Academy.
              </p>


              <div className="blog-archive-data">

                <div>
                  <strong>
                    {String(
                      blogs.length
                    ).padStart(
                      2,
                      "0"
                    )}
                  </strong>

                  <span>
                    STORIES
                  </span>
                </div>


                <div className="archive-separator">
                </div>


                <div>
                  <strong>
                    {String(
                      Math.max(
                        categories.length -
                          1,
                        0
                      )
                    ).padStart(
                      2,
                      "0"
                    )}
                  </strong>

                  <span>
                    CATEGORIES
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ===================================
          LOADING
      ==================================== */}

      {loading && (

        <section className="blog-loading">

          <div className="container">

            <div className="blog-loading-core">

              <span></span>

              <p>
                ACCESSING VHA STORY
                ARCHIVE...
              </p>

            </div>

          </div>

        </section>

      )}


      {/* ===================================
          ERROR
      ==================================== */}

      {!loading && error && (

        <section className="blog-error">

          <div className="container">

            <div className="blog-error-panel">

              <span>
                SYSTEM // ERROR
              </span>

              <h2>
                Stories unavailable.
              </h2>

              <p>
                {error}
              </p>

            </div>

          </div>

        </section>

      )}


      {/* ===================================
          BLOG CONTENT
      ==================================== */}

      {!loading &&
        !error &&
        blogs.length > 0 && (
        <>

          {/* ===============================
              FEATURED STORY
          ================================ */}

          {featuredBlog && (

            <section className="featured-blog-section">

              <div className="container" data-aos="fade-left">

                <div className="section-micro-header">

                  <span>
                    01 // FEATURED STORY
                  </span>

                  <span>
                    SELECTED FROM THE
                    ARCHIVE
                  </span>

                </div>


                <article className="featured-blog">

                  {/* IMAGE */}

                  <Link
                    to={`/blogs/${featuredBlog.slug}`}
                    className="featured-blog-image"
                  >

                    <img
                      src={getImageUrl(
                        featuredBlog.bannerImage
                      )}
                      alt={
                        featuredBlog.title
                      }
                    />


                    <div className="featured-image-overlay">
                    </div>


                    <span className="featured-corner-code">
                      VHA // 001
                    </span>


                    <span className="featured-category">
                      {
                        featuredBlog.category
                      }
                    </span>

                  </Link>


                  {/* CONTENT */}

                  <div className="featured-blog-content">

                    <span className="featured-label">
                      FEATURED //
                      CURRENT
                    </span>


                    <div className="featured-meta">

                      <span>
                        {
                          formattedFeaturedDate
                        }
                      </span>

                      <i></i>

                      <span>
                        {
                          featuredBlog.author
                        }
                      </span>

                    </div>


                    <h2>
                      {
                        featuredBlog.title
                      }
                    </h2>


                    {featuredBlog.subtitle && (

                      <h3>
                        {
                          featuredBlog.subtitle
                        }
                      </h3>

                    )}


                    <p>
                      {
                        featuredBlog.excerpt
                      }
                    </p>


                    <Link
                      to={`/blogs/${featuredBlog.slug}`}
                      className="btn btn-primary"
                    >
                      Read Full Story
                      <span>→</span>
                    </Link>

                  </div>

                </article>

              </div>

            </section>

          )}


          {/* ===============================
              ARCHIVE
          ================================ */}

          <section className="blog-archive-section">

            <div className="container" data-aos="fade-right">

              <div className="section-micro-header">

                <span>
                  02 // STORY ARCHIVE
                </span>

                <span>
                  {
                    filteredBlogs.length
                  } RESULTS
                </span>

              </div>


              <div className="archive-heading">

                <div>

                  <span className="eyebrow">
                    Explore Our Stories
                  </span>

                  <h2>
                    THE
                    <span className="gradient-text">
                      {" "}
                      ARCHIVE.
                    </span>
                  </h2>

                </div>


                {/* SEARCH */}

                <div className="blog-search">

                  <span>
                    SEARCH //
                  </span>

                  <input
                    type="search"
                    value={
                      searchTerm
                    }
                    onChange={
                      (event) =>
                        setSearchTerm(
                          event.target
                            .value
                        )
                    }
                    placeholder="Search stories..."
                    aria-label="Search stories"
                  />

                </div>

              </div>


              {/* CATEGORY FILTER */}

              <div className="blog-categories">

                {categories.map(
                  (category) => (

                    <button
                      key={
                        category
                      }
                      type="button"
                      className={
                        selectedCategory ===
                        category
                          ? "blog-category-filter active"
                          : "blog-category-filter"
                      }
                      onClick={() =>
                        setSelectedCategory(
                          category
                        )
                      }
                    >
                      <span>
                        {
                          category
                        }
                      </span>

                    </button>

                  )
                )}

              </div>


              {/* BLOG GRID */}

              {filteredBlogs.length >
              0 ? (

                <div className="blog-grid">

                  {filteredBlogs.map(
                    (
                      blog,
                      index
                    ) => (

                      <BlogCard
                        key={
                          blog.id ||
                          blog.slug
                        }
                        blog={
                          blog
                        }
                        index={
                          index
                        }
                      />

                    )
                  )}

                </div>

              ) : (

                <div className="no-blog-results">

                  <span>
                    00 // NO MATCH
                  </span>

                  <h3>
                    No stories found.
                  </h3>

                  <p>
                    Try another search
                    term or category.
                  </p>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory(
                        "All"
                      );
                    }}
                  >
                    Clear Filters
                  </button>

                </div>

              )}

            </div>

          </section>

        </>
      )}


      {/* EMPTY DATABASE */}

      {!loading &&
        !error &&
        blogs.length === 0 && (

        <section className="empty-blog-state">

          <div className="container">

            <span>
              VHA // ARCHIVE 000
            </span>

            <h2>
              Our first stories are
              being written.
            </h2>

            <p>
              Check back as our
              robotics and computer
              science journey develops.
            </p>

          </div>

        </section>

      )}

    </main>
  );
}

export default Blogs;