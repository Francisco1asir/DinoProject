import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc, deleteDoc, updateDoc, query, where } from "firebase/firestore";
import { IDinos } from "../interfaces/IDinos";
import { firebaseConfig } from "./common/firebaseConfig";
import { nanoid } from "nanoid";
import { useState } from "react";
import { IMasiva } from "../interfaces/IMasiva";
import dinosmasiva from '../data/dinosmasiva.json'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()

//LISTAR LOS DINOSARURIOS
export const getDinosaurios = async (): Promise<IDinos[]> => {
    let vardinos: IDinos[] = []; //array inicializado al vacio
    const dinosRef = collection(db, "Dinos"); //seleccionamos la coleccion categorias
    const dinosDocs = await getDocs(dinosRef) //obtengo todos los datos, es como un select *
    dinosDocs.forEach(doc => {
        const dino = { ...doc.data() }
        vardinos.push(dino as IDinos)
    });
    console.log(vardinos);
    return vardinos;
}

//LISTADO DE DINOS TERRESTRES
export const getDinosauriosTerrestres = async (): Promise<IDinos[]> => {
    let vardinos: IDinos[] = []; // array inicializado al vacío
    const dinosRef = collection(db, "Dinos"); // seleccionamos la colección "Dinos"
    const q = query(dinosRef, where("categoria", "==", "Terrestre")); // definimos la consulta con la condición de categoría igual a "Terrestre"
    const dinosDocs = await getDocs(q); // obtenemos los documentos que cumplen con la consulta

    dinosDocs.forEach((doc) => {
        const dino = doc.data() as IDinos; // aseguramos el tipo de datos
        vardinos.push(dino);
    });

    console.log(vardinos);
    return vardinos;
};

//LISTADO DE DINOS ACUATICOS
export const getDinosauriosAcuaticos = async (): Promise<IDinos[]> => {
    let vardinos: IDinos[] = []; // array inicializado al vacío
    const dinosRef = collection(db, "Dinos"); // seleccionamos la colección "Dinos"
    const q = query(dinosRef, where("categoria", "==", "Acuático")); // definimos la consulta con la condición de categoría igual a "Terrestre"
    const dinosDocs = await getDocs(q); // obtenemos los documentos que cumplen con la consulta

    dinosDocs.forEach((doc) => {
        const dino = doc.data() as IDinos; // aseguramos el tipo de datos
        vardinos.push(dino);
    });

    console.log(vardinos);
    return vardinos;
};

//LISTADO DE DINOS VOLADORES
export const getDinosauriosVoladores = async (): Promise<IDinos[]> => {
    let vardinos: IDinos[] = []; // array inicializado al vacío
    const dinosRef = collection(db, "Dinos"); // seleccionamos la colección "Dinos"
    const q = query(dinosRef, where("categoria", "==", "Volador")); // definimos la consulta con la condición de categoría igual a "Terrestre"
    const dinosDocs = await getDocs(q); // obtenemos los documentos que cumplen con la consulta

    dinosDocs.forEach((doc) => {
        const dino = doc.data() as IDinos; // aseguramos el tipo de datos
        vardinos.push(dino);
    });

    console.log(vardinos);
    return vardinos;
};
//AÑADIR DINOSAURIOS
export const newDino = async (data: IDinos) => {
    try {
        console.log('Insertando en FB el objeto', data)
        const newData = { codigo: nanoid(20), ...data }
        const docRef = doc(db, "Dinos", newData.codigo);
        await setDoc(docRef, newData);
    } catch (error) {
        console.log(error)
    }
}

//BORRAR DINOSAURIOS
export const deleteDino = async (codigo: string) => {
    await deleteDoc(doc(db, "Dinos", codigo))
    window.location.reload();
}

//CARGA MASIVA
export const masivadinos = async () => {
    try {
        console.log('carga de datos...');
        dinosmasiva.map(async (masive) => {
            const codigo = nanoid(20);
            const docRef = doc(db, "Dinos", codigo);
            await setDoc(docRef, { codigo: codigo, ...masive });
            window.location.reload();
        });
    } catch (error) {
        console.log(error);
    }
};


//INTENTO DE ACTUALIZACION 
// const dinosRef2 = doc(db, "Dinos", "fBT0JG733PoBXAO9rCEM");
// updateDoc(dinosRef2, {
//   daño: 10
// });
