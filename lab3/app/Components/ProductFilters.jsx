import { useState } from "react";
import "../styles/general.css";
import "../styles/products.css";
import { Link } from "react-router-dom";

export default function ProductFilters({ filters, setFilters, onSearch }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
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
      <span>Add your product</span>
      <Link to="/new">
        <button className="btn btn--add" to="/new">
          Add product
        </button>
      </Link>
    </form>
  );
}
