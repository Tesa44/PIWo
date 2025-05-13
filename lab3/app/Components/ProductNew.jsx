import "../styles/general.css";
import "../styles/add-book.css";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useUser } from "../Services/UserService";
import { db } from "../Services/init";
export default function ProductNew() {
  const user = useUser();

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
      alert("Musisz być zalogowany, aby wysłać formularz.");
      return;
    }

    try {
      await addDoc(collection(db, "books"), {
        ...bookData,
        userID: user.uid, // UID zalogowanego użytkownika
      });

      alert("Dane wysłane!");
      setBookData({ name: "", email: "" });
    } catch (error) {
      console.error("Błąd:", error);
    }
  };

  if (!user) {
    return (
      <p className="heading-tertiary">Zaloguj się, aby wypełnić formularz.</p>
    );
  }

  return (
    <section className="section-add-book">
      <div className="container--add-book">
        <form className="upload">
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

          <button className="btn btn--upload" onClick={handleSubmit}>
            Upload
          </button>
        </form>
      </div>
    </section>
  );
}
