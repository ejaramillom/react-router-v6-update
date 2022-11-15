import { Link, Outlet } from "react-router-dom";
// you can define routes wherever you want to nest routes

const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>
      <Link to="new-user">New user </Link>
      <Outlet />
      {/* <Routes>
        <Route path="new-user" element={<p>Welcome new user!</p>} />
      </Routes> */}
    </section>
  );
};

export default Welcome;
