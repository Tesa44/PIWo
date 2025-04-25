import React from "react";

const ProductFilters = ({ filters, setFilters, onSearch }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form class="filters">
      <h3 class="heading-tertiary">Filters</h3>
      <ul class="filter-list">
        <li class="filter-link">
          <p>Title</p>
          <input type="text" id="title" name="title" value={filters.title} />
        </li>
        <li class="filter-link">
          <p>Genre</p>
          <select
            id="genre"
            name="genre"
            onChange={handleChange}
            value={filters.genre}
          >
            <option value="">All</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Thiller">Thiller</option>
            <option value="Horror">Horror</option>
            <option value="Action">Action</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </li>
        <li class="filter-link">
          <p>Age group</p>
          <select
            id="age"
            name="age"
            onChange={handleChange}
            value={filters.age}
          >
            <option value="">All</option>
            <option value="Kids">Kids</option>
            <option value="Teenagers">Teenagers</option>
            <option value="Adults">Adults</option>
          </select>
        </li>
        <li class="filter-link">
          <p>Key words</p>
          <input
            type="text"
            id="key-words"
            name="key-words"
            value={filters.keyWords}
          />
        </li>
        <li class="filter-link">
          <p>Author name</p>
          <input
            type="text"
            id="author-name"
            name="author-name"
            value={filters.author}
          />
        </li>
      </ul>
      <button type="submit" onClick={onSearch} class="btn btn--add">
        Search
      </button>
      <span>Add your product</span>
      <button class="btn btn--add">+ Add product</button>
    </form>
  );
};

export default ProductFilters;
