import Image from "next/image";
import Link from "next/link";
import Card from "../../components/card";
import { useState } from "react";

export default function Feed() {
  const[posts, setPosts] = useState("texte aqui");

  const [name, setName] = useState([]);

  function addPost() {
    const newPost = {
      name: posts,
      time: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }),
      
    }
    setName( prevState =>[...prevState, newPost]);
  }
  return (
    <>
    
      <div className="h-screen bg-gradient-to-r from-gray-300 to-blue-200">

        <div className=" w-screen flex justify-between">
          <div className="flex flex-row ml-40 mt-12">
            <div>
              <Image src="/img/icons.png" width={40} height={40} alt="Logo" />
            </div>

            <div>
              <Link href="/">
                <h1 className="text-4xl text-gray-700 font-bold">
                  Find<span className="text-blue-400">.</span>y
                </h1>
              </Link>
            </div>
          </div>
          <button className="outline outline-blue-700 bg-blue-700 hover:bg-blue-800 hover:text-white px-4 py-1  rounded text-white shadow mr-60 mt-14">
            Achados&Perdidos
          </button>
        </div>
        {/* Inputs de dados */}
        <div className="flex justify-center flex-col w-44">
          
          <label>Posts</label>
          <h1>{posts}</h1>
          <input 
          type="text" 
          onChange={
            (e) => {
              setPosts(e.target.value);
            }
          }

           />
          <button onClick={addPost}>Adicionar</button>
        </div>
        {
          name.map((item) =>(
            <Card
             name={item.name} 
             time={item.time}/>
          ))
          
          
        }
      </div>
      
    </>
  );
}
