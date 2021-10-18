import logo from './logo.svg';
import './App.css';
import TextAndButtonComponent from "./Components/TextAndButton"
import { useState, useEffect } from "react";
import axios from 'axios';




function App() {
 const [images, setImages ] = useState([]) ;         // synthaxe de la déconstruction de l'object useState
 useEffect (()=> {                                   // appellation de la function use effect
   const fetchData = async () => {                    // déclaration de la fonction asyncrome 
     try{                                             // en cas de reponse positive
       const result = await axios.get("https://picsum.photos/v2/list")  // recupération de la reponse axios
       setImages(result.data);                            // recherche de l'attribut data dans l'obect axios
       console.log(result.data)                           //j'affiche les data dans la console
     } catch (err) {
       console.log(err)                                 //message d'érreur
     }
   };
   fetchData();                             // utilisation de la methode que l'on vien de construire
 }, [])                                    // si le tableau est vide la fonction qui est passer a use effect ne se passe qu'une fois


  return images.map(({ author , id}) => <p>{author}, {id}</p>);                      // retourne une image map pour itéré chaque data contenu dans le use state

}
export default App;

