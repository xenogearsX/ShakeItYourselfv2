const Form = () => {
  return (
    <form id="formulaire" action="#">
      <h2>Nous contacter</h2>
      <br />
      <label for="prenom"> Entrez votre prénom </label>
      <input type="text" id="prenom" name="prenom" />

      <label for="nom"> Entrez votre nom </label>
      <input type="text" id="nom" name="nom" />

      <label for="mail"> Votre email </label>
      <input type="text" id="mail" name="mail" />

      <label for="commentaire"> Votre message </label>
      <textarea id="commentaire" cols="30" rows="10"></textarea>

      <input type="submit" value="envoyer" />
    </form>
  );
};
 export default Form