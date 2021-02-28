const HowTo = () => {
  return (
    <>
      <h1 className="titreTutorielPage">Tutoriel et Matériel</h1>

      <section className="materiel">
        <h2 className="titreMateriel">Matériel :</h2>
        <article className="elementsMateriel">
          <div className="materielCard">
            <h3>Shaker</h3>
            <p>L'indispensable : afin d'obtenir un mélange bien homogène.</p>
            <div className="imgShaker"></div>
          </div>
          <div className="materielCard">
            <h3>Bar Spoon</h3>
            <p>Pour mélanger directement dans le verre</p>
            <div className="imgSpoon"></div>
          </div>
          <div className="materielCard">
            <h3>Jigger</h3>
            <p>Il sert à mesurer les quantités qui doivent être précises.</p>
            <div className="imgJigger"></div>
          </div>
          <div className="materielCard">
            <h3>Strainer</h3>
            <p>
              À positionner sur le shaker pour filtrer le mélange sans les
              glaçons.
            </p>
            <div className="imgStrainer"></div>
          </div>
          <div className="materielCard">
            <h3>Fine Strainer</h3>
            <p>À positionner sur le shaker pour filtrer les petits résidus.</p>
            <div className="imgFineStrainer"></div>
          </div>
        </article>
      </section>
      <section className="tutoriel">
        <h2 className="titreTuto">Tutoriel pour le matériel :</h2>
        <article className="elementTuto1">
          <div className="tutoCardMateriel">
            <h3>Comment utiliser un shaker</h3>
            <iframe
              title="How to shake"
              className="video"
              src="https://www.youtube.com/embed/VRhQKnvli14?start=34"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="tutoCardMateriel">
            <h3>Comment mélanger à la cuillère</h3>
            <iframe
              title="How to use the spoon"
              className="video"
              src="https://www.youtube.com/embed/ZJ4JjS10FC8?start=9"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              TIPS : En l'absence d'un verre à mélange, utilisez la partie
              grande d'un shaker
            </p>
          </div>
          <div className="tutoCardMateriel">
            <h3>Comment utiliser un strainer</h3>
            <iframe
              title="How to use strainer"
              className="video"
              src="https://www.youtube.com/embed/NctwYmQSNHU"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="tutoCardMateriel">
            <h3>Comment utiliser un pilon</h3>
            <iframe
              title="How to grind"
              className="video"
              src="https://www.youtube.com/embed/FkLmMzkIHaE?start=12"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </article>
        <h2 className="titreTuto">Tutoriel pour les ingrédients :</h2>
        <article className="elementTuto2">
          <div className="tutoCardIngredient">
            <h3>Sirop de sucre maison</h3>
            <ul>
              <li>
                Etape 1 : Verser 200g de sucre pour 100g d'eau dans une
                casserole
              </li>
              <li>Etape 2 : Porter à ébulition sur feu doux</li>
              <li>Etape 3 : Laisser refroidir</li>
              <li>
                TIPS : Vous pouvez laisser infuser fruit/thé ou autres pendant
                plusieurs heures afin d'obtenir un sirop parfumé
              </li>
            </ul>
          </div>
          <div className="tutoCardIngredient">
            <h3>Réaliser ses infusions d'alcool</h3>
            <ul>
              <li>Etape 1 : Choisisser un aliment a infuser</li>
              <li>
                Etape 2 : Intégrer l'aliment choisi dans la bouteille d'alcool
                directement ou dans un récipient contenant l'alcool choisi au
                préalable
              </li>
              <li>
                Etape 3 : Laisser infuser plusieur jours en remuant au moins 1
                fois dans la journée
              </li>
              <li>
                TIPS 1 : Gouter tout les jours pour pouvoir contrôler le goût
                désiré
              </li>
              <li>
                TIPS 2 : Laisser l'infusion se faire dans un endroit a
                température ambiante et à l'abri de la lumière
              </li>
            </ul>
          </div>
        </article>
      </section>
    </>
  );
};
export default HowTo;
