import "../styles/general.css";
import "../styles/add-book.css";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useUser } from "../Services/UserService";
import { db } from "../Services/init";
import { useNavigate, Link } from "react-router-dom";

export default function ProductNew() {
  const user = useUser();
  const navigate = useNavigate();

  const [bookData, setBookData] = useState({
    title: "",
    genre: "",
    ageGroup: "",
    keyWords: "",
    author: "",
    price: "",
  });

  const handleChange = (e) => {
    setBookData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("You have to log in to send a form");
      return;
    }

    try {
      await addDoc(collection(db, "books"), {
        ...bookData,
        userID: user.uid, // UID zalogowanego użytkownika
      });
      setBookData({
        title: "",
        genre: "",
        author: "",
        ageGroup: "",
        keyWords: "",
      });
    } catch (err) {
      console.error(err);
    }
    navigate("/");
  };

  if (!user) {
    return (
      <div className="container--center">
        <p className="message-login">Log in to add a book</p>
        <Link to="/">
          <button className="btn btn--back">Go back</button>
        </Link>
      </div>
    );
  }

  return (
    <section className="section-add-book">
      <div className="container--add-book">
        <form className="upload" onSubmit={handleSubmit}>
          <h2 className="upload__heading">Add your book to the store</h2>
          <label>Title</label>
          <input
            placeholder="Harry Potter"
            required
            name="title"
            onChange={handleChange}
            value={bookData.title}
          />
          <label>Author</label>
          <input
            placeholder="J.K. Rowling"
            required
            name="author"
            onChange={handleChange}
            value={bookData.name}
          />
          <label>Genre</label>
          <input
            placeholder="Fantasy"
            required
            name="genre"
            onChange={handleChange}
            value={bookData.genre}
          />
          <label>Age group</label>
          <input
            placeholder="Teenagers"
            required
            name="ageGroup"
            onChange={handleChange}
            value={bookData.ageGroup}
          />
          <label>Key words</label>
          <input
            placeholder="Magic, Hogwart, School, Wizard"
            name="keyWords"
            onChange={handleChange}
            value={bookData.keyWords}
          />
          <label>Book price EUR</label>
          <input
            placeholder="9.99"
            required
            name="price"
            type="number"
            onChange={handleChange}
            value={bookData.price}
          />
          <div className="container--form-buttons">
            <button type="submit" className="btn btn--upload">
              Upload
            </button>
            <Link to="/">
              <button className="btn btn--upload">Back</button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
