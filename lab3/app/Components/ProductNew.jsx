import "../styles/general.css";
import "../styles/add-book.css";

export default function ProductNew() {
  return (
    <section className="section-add-book">
      <div className="container--add-book">
        <form className="upload">
          <h2 className="upload__heading">Add your book to the store</h2>
          <label>Title</label>
          <input placeholder="Harry Potter" required name="title" type="text" />
          <label>Author</label>
          <input
            placeholder="J.K. Rowling"
            required
            name="author"
            type="text"
          />
          <label>Genre</label>
          <input placeholder="Fantasy" required name="genre" type="text" />
          <label>Age group</label>
          <input placeholder="Teenagers" required name="group" type="text" />
          <label>Key words</label>
          <input
            placeholder="Magic, Hogwart, School, Wizard"
            name="keyWords"
            type="text"
          />
          <label>Book price EUR</label>
          <input placeholder="9.99" required name="price" type="number" />

          <button className="btn btn--upload">Upload</button>
        </form>
      </div>
    </section>
  );
}
