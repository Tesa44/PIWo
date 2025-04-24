import "../styles/hero.css";
import "../styles/general.css";

export default function Hero() {
  return (
    <section className="section-hero">
      <div className="hero-text-box">
        <h1 className="heading-primary">
          Where Every Book is a Brew-tiful Journey
        </h1>
        <p className="hero-subheading">
          Explore the perfect blend of stories and brews in a cozy, book-filled
          atmosphere.
        </p>
        <a href="#" className="btn btn--hero">
          Shop now
        </a>
      </div>
    </section>
  );
}
