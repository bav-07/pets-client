import Pet from "./Pet"

const PetList = ({pets, deletePet}) => {

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet}/>
    })

    return (
        <>
            <h2>Pets</h2>
            <hr/>
            {petComponents}    
        </>
    )

}

export default PetList;