import { useEffect, useState } from "react"
import Pet from "../components/Pet";
import PetList from "../components/PetList";
import PetForm from "../components/PetForm";
const SERVER_URL = "http://localhost:8080";

const PetContainer = () => {

    const [pets, setPets] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(`${SERVER_URL}/pets`)
        .then(response => response.json())
        .then(response => setPets(response))
        .catch(error => setError(error.message));

    }, [])

    const postPet = (newPet) => {
        // create in database
        fetch(`${SERVER_URL}/pets`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPet)
        })
        .then(response => response.json())
        .then(response => {
            setPets([...pets, response])
        });
    }

    const deletePet = (id) => {
        // delete from database
        fetch(`${SERVER_URL}/pets/${id}`, {
            method: "DELETE",
            headers: {'Content-Type': 'application/json'}
        });

        const newPets = pets.filter(pet => pet.id !== id);
        setPets(newPets);
    }

    return (
        <>
            <h1>Pets!</h1>
            <PetForm postPet={postPet}/>
            <PetList pets={pets} deletePet={deletePet}/>
        </>
    )

}

export default PetContainer;