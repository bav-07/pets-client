const Pet = ({pet, deletePet}) => {
    return (
        <div className="pet">
            <h3>{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <div className="pet-buttons">
                <button onClick={() => deletePet(pet.id)}>Delete</button>
            </div>
        </div>
    )
}

export default Pet;