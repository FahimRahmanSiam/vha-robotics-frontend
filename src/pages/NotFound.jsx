import { Link } from "react-router";

function NotFound() {
  return (
    <main className="page">
      <h1>404</h1>

      <p>The page you are looking for does not exist.</p>

      <Link to="/">Return Home</Link>
    </main>
  );
}

export default NotFound;