import { useState } from "react"

const StarshipSearch = (props)=>{
    const [formData, setFormData] = useState('')

    const handleChange = (e)=>{
        setFormData(e.target.value)
    }
//------
    const handleSubmit = (e)=>{
        e.preventDefault(e)
        props.handleSearch(formData)
          setFormData('')
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="">Search for starship: </label>
        <input type="text"
        onChange={handleChange}
        />
       <button type="submit">Search</button>


        </form>
        </>
    )
}

export default StarshipSearch