import { useState } from "react";
import "../styles/general.css";
import "../styles/products.css";
import { Link } from "react-router-dom";
import { useUser } from "../Services/UserService";

export default function ProductFilters({ filters, setFilters, onSearch }) {
  const user = useUser();
  const [myProd, setMyProd] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  function handleMyProducts() {
    if (!user) {
      alert("You have to log in to see your products");
      return;
    }
    setFilters((prev) => ({ ...prev, userID: myProd ? "" : user.uid }));
    setMyProd((prev) => !prev);
  }

  return (
    <div className="container--left-panel">
      <form className="filters" onSubmit={onSearch}>
        <h3 className="heading-tertiary">Filters</h3>
        <ul className="filter-list">
          <li className="filter-link">
            <p>Title</p>
            <input
              type="text"
              name="title"
              value={filters.title}
              onChange={handleChange}
            />
          </li>
          <li className="filter-link">
            <p>Genre</p>
            <select name="genre" value={filters.genre} onChange={handleChange}>
              <option value="">All</option>
              <option value="Fantasy">Fantasy</option>
              <option value="Thriller">Thriller</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </li>
          <li className="filter-link">
            <p>Age group</p>
            <select
              name="ageGroup"
              value={filters.ageGroup}
              onChange={handleChange}
            >
              <option value="">All</option>
              <option value="Kids">Kids</option>
              <option value="Teenagers">Teenagers</option>
              <option value="Adults">Adults</option>
            </select>
          </li>
          <li className="filter-link">
            <p>Key words</p>
            <input
              type="text"
              name="keyWords"
              value={filters.keyWords}
              onChange={handleChange}
            />
          </li>
          <li className="filter-link">
            <p>Author name</p>
            <input
              type="text"
              name="author"
              value={filters.author}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button type="submit" className="btn btn--add" onClick={handleChange}>
          Search
        </button>
      </form>
      <h3 className="heading-tertiary">Add your product</h3>
      <Link to="/new">
        <button className="btn btn--add">Add product</button>
      </Link>
      <h3 className="heading-tertiary">Show your products</h3>
      <button className="btn btn--add" onClick={handleMyProducts}>
        My Products
      </button>
    </div>
  );
}
