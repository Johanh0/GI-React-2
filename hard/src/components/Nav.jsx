import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <p>Todo List</p>
        </Link>
      </div>

      <div></div>
    </nav>
  );
};

export default Nav;
