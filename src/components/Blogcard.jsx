import { Link } from "react-router";

import { getImageUrl } from "../utils/api";


function Blogcard({ blog, index }) {
  const formattedDate = new Date(
    `${blog.date}T00:00:00`
  ).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );


  return (
    <article className="blog-card">

      {/* IMAGE */}

      <Link
        to={`/blogs/${blog.slug}`}
        className="blog-card-image"
      >
        <img
          src={getImageUrl(blog.bannerImage)}
          alt={blog.title}
          loading="lazy"
        />

        <div className="blog-card-image-overlay"></div>

        <span className="blog-card-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="blog-card-category">
          {blog.category}
        </span>
      </Link>


      {/* CONTENT */}

      <div className="blog-card-content">

        <div className="blog-card-meta">
          <span>{formattedDate}</span>

          <span className="blog-meta-line"></span>

          <span>
            VHA // STORY
          </span>
        </div>


        <h3>
          <Link to={`/blogs/${blog.slug}`}>
            {blog.title}
          </Link>
        </h3>


        <p>
          {blog.excerpt}
        </p>


        <Link
          to={`/blogs/${blog.slug}`}
          className="blog-read-link"
        >
          <span>Read Full Story</span>

          <span className="blog-read-arrow">
            →
          </span>
        </Link>

      </div>

    </article>
  );
}

export default Blogcard;