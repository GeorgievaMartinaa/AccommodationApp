import React from 'react';
import {useNavigate} from 'react-router-dom';

const AccommodationAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        hostId: 1,
        numRooms: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name
        const category = formData.category
        const hostId = formData.hostId
        const numRooms = formData.numRooms

        props.onAddAccommodation(name, category, hostId, numRooms);
        navigate("/accommodations");
    }

    return (
          <div className="row mt-5">
                <div className="col-md-5">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Accommodation name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   placeholder="Enter accommodation name"
                                   onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Categories</label>
                            <select name="category" id="category" className="form-control" onChange={handleChange}>
                                {props.categories.map((term, index) => {
                                    return <option key={index} value={term}>{term}</option>
                                })}
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Host</label>
                            <select name="hostId" id="hostId" className="form-control" onChange={handleChange}>
                                {props.hosts.map((term) => {
                                    {/* if(props.accommodation.host.id !== undefined &&
                                        props.accommodation.host.id === term.id)
                                        return <option selected={props.accommodation.host.id} value={term.id}>{term.name}</option>
                                    else */} return <option key={term.id} value={term.id}>{term.name}</option>
                                })}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="numRooms">NumRooms</label>
                            <input type="text"
                                   className="form-control"
                                   id="numRooms"
                                   name="numRooms"
                                   placeholder="Number of rooms"
                                   onChange={handleChange}
                            />
                        </div>
                        <button id="submit" type="submit" className="btn btn-primary m-3">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default AccommodationAdd;