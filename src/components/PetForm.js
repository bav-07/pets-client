import { useState } from "react";

const PetForm = ({postPet}) => {

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [breed, setBreed] = useState("");
    const [age, setAge] = useState(0);

    const [error, setError] = useState("");

    const handleValidation = () => {
        if (name === "") {
            setError("Please enter a name");
            return false;
        }

        if (type === "") {
            setError("Please enter a type");
            return false;
        }

        if (breed === "") {
            setError("Please select a breed");
            return false;
        }

        return true;
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const postBody = {
                name,
                type,
                breed,
                age
            };
            postPet(postBody);
            setName("");
            setType("");
            setBreed("");
            setAge(0);
        }
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Type"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />
            <input
                type="text"
                placeholder="Breed"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />

            <button type="submit">Ok</button>
            <p>{error}</p>
            
        </form>
    )

}

export default PetForm;
