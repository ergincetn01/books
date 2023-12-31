import React, { useState } from "react";

function BookCreate ({onCreate}) {

    const [title, setTitle]= useState("")

    const handleChange=(e)=> {
        setTitle(e.target.value)
    }
    const handleSubmit=(e)=> {
        e.preventDefault()
        onCreate(title)
        setTitle("")
    }

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <input className="input" value={title} onChange={handleChange} placeholder="Add book..."/>
                <label>Title</label>
            <button className="button" >Add Book</button>
            </form>            
        </div>
    )


}

export default BookCreate;