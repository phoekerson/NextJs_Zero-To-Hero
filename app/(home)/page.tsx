"use client"
import React from "react";
import Button from "@/components/button";
const page = async() => {
  // Récupeartion de l'api pour afficher les données aléatoires
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  // const data = await response.text()

  // const response = await fetch (`http://localhost:3000/api/items/${slug}`)
  // const data = await response.json()


  // Récuperation d'une API endpoint statique depuis la route .../api/hello/
  const response = await fetch('http://localhost:3000/api/hello')
  //Conversion des données récupérées par l'API en texte
  const data = await response.text()
 return (
  <h1>
    <Button/>
    {/* Boucle pour parcourir les données par id et afficher les titles*/}
    {/* {data.map((post: any)=>(
        <li key={post.id}>{post.title} {post.body} </li>
    ))} */}

    {/* Affichage des données sur la page */}
    {data}
    
    
    
  </h1>
  
 )
}
export default page