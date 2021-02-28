import abdou from "../data/images/abdou.png"
const About = () => {
  return (
    <section className="about">
      <h2>À propos</h2>
      <div className="about-text">
        <p>
          Shake It Yourself est le site de cocktails qui vous permet de trouver
          plusieurs recettes en fonction des ingrédients que vous avez chez
          vous. Je souhaite rendre accesible la réalisation et la consommation
          de grands classiques.
        </p>
        <p>
          Ainsi, vous pourrez trouver votre cocktail idéal selon vos envies et à
          petit prix.
        </p>
      </div>

      <div className="abdou">
        <img
          className="photoAbdou"
          src={abdou}
          alt="abdou"
          width="200"
        />
        <div className="descriptionAbdou">
          <h2>Qui suis-je ?</h2>
          <p>
            Mon nom est Abdou Kerkeb, je suis mixologue qualifié en tant que
            meilleur ouvrier de France. En 2018, j'ai gagné le Golden Shaker.
          </p>
          <p>
            Depuis plusieurs années, je souhaite démocratiser la consommation
            des cocktails en France. C'est pour cela que j'ai eu l'idée de ce
            site afin de partager avec vous ma passion.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
