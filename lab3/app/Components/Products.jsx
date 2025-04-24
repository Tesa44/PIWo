import "../styles/general.css";
import "../styles/products.css";

export default function Products() {
  return (
    <section class="section-products">
      <div class="flex--center-v">
        <span class="subheading">Our products</span>
        <div class="grid container container--products">
          <div class="filters">
            <h3 class="heading-tertiary">Filters</h3>
            <ul class="filter-list">
              <li class="filter-link">
                <p>Genre</p>
                <select id="genre">
                  <option value="Fantasy">Fantasy</option>
                  <option value="Thiller">Thiller</option>
                  <option value="Horror">Horror</option>
                  <option value="Action">Action</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                </select>
              </li>
              <li class="filter-link">
                <p>Age group</p>
                <select id="age">
                  <option value="Kids">Kids</option>
                  <option value="Teenagers">Teenagers</option>
                  <option value="Adults">Adults</option>
                </select>
              </li>
              <li class="filter-link">
                <p>Key words</p>
                <input type="text" id="key-words" />
              </li>
              <li class="filter-link">
                <p>Author name</p>
                <input type="text" id="author-name" />
              </li>
            </ul>
            <span>Add your product</span>
            <button class="btn btn--add">+ Add product</button>
          </div>
          <div class="products">
            <div class="product-box">
              <img class="book-img" src="./img/book-1.jpg" alt="book" />
              <div class="book-content">
                <h3 class="heading-tertiary">Milk and Honey</h3>
                <ul class="features-list">
                  <li class="features-link">
                    <p>Genre</p>
                    <span>Thiller</span>
                  </li>

                  <li class="features-link">
                    <p>Age group</p>
                    <span>Adult</span>
                  </li>

                  <li class="features-link">
                    <p>Key words</p>
                    <span>Murderer Detective</span>
                  </li>

                  <li class="features-link">
                    <p>Author</p>
                    <span>Stephen King</span>
                  </li>
                </ul>
                <div class="book-price">
                  <span>10.99 €</span>
                  <button class="btn btn--shop">Add to cart</button>
                </div>
              </div>
            </div>
            <div class="product-box">
              <img class="book-img" src="./img/book-1.jpg" alt="book" />
              <div class="book-content">
                <h3 class="heading-tertiary">Milk and Honey</h3>
                <ul class="features-list">
                  <li class="features-link">
                    <p>Genre</p>
                    <span>Thiller</span>
                  </li>

                  <li class="features-link">
                    <p>Age group</p>
                    <span>Adult</span>
                  </li>

                  <li class="features-link">
                    <p>Key words</p>
                    <span>Murderer Detective</span>
                  </li>

                  <li class="features-link">
                    <p>Author</p>
                    <span>Stephen King</span>
                  </li>
                </ul>
                <div class="book-price">
                  <span>10.99 €</span>
                  <button class="btn btn--shop">Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
