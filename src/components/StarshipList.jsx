import StarshipCard from "./StarshipCard"
const StarshipList = (props)=>{
    let display= ''
if(props.search){
    let filteredShips=props.Starships.filter((s)=>{
        return props.search === s.name
    })
    display = <div><StarshipCard starship={filteredShips[0]}/></div>
}else{
    display =  <div>
    <p>number of results: {props.Starships.length}</p>
        {props.Starships.map((starship) =>
        <StarshipCard starship={starship}/>
         )}
    </div>

}


    return (
        <>
        <h4>Starships</h4>

        {props.Starships ? (display) : ('loading..')

        }
        </>
    )
}

export default StarshipList