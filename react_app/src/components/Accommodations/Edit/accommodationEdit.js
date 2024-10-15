import React from 'react';
import {useNavigate} from 'react-router-dom';

const AccommodationEdit = (props) => {


    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        hostId: 1,
        numRooms: 0
    })

    const hostId = props.accommodation && props.accommodation.host ? props.accommodation.host.id : 0;


    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.accommodation.name;
        const category = formData.category !== 0 ? formData.category : props.accommodation.category;
        const hostId = formData.hostId !== 0 ? formData.hostId : props.accommodation.host.id;
        const numRooms = formData.numRooms !== 0 ? formData.numRooms : props.accommodation.numRooms;

        props.onEditAccommodation(props.accommodation.id, name, category, hostId, numRooms);
        navigate("/accommodations");
    }

    return (
        console.log(props.accommodation),
            console.log(props.accommodation.host),
            <div className="row mt-5">
                <div className="col-md-5">
                    <form onSubmit={onFormSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Accommodation name</label>
                            <input type="text"
                                   className="form-control"
                                   id="name"
                                   name="name"
                                   placeholder={props.accommodation.name}
                                   onChange={handleChange}
                            />
                        </div>
                        {/*  <div className="form-group">
                            <label htmlFor="category">Category</label>
                            <input type="text"
                                   className="form-control"
                                   id="category"
                                   name="category"
                                   placeholder={props.accommodation.category}
                                   onChange={handleChange}
                            />
                        </div> */}

                        <div className="form-group">
                            <label>Categories</label>
                            <select name="category" className="form-control" onChange={handleChange}>
                                {props.categories.map((term, index) => {
                                    if (props.accommodation.category !== undefined &&
                                        props.accommodation.category === term)
                                        return <option selected={props.accommodation.category}
                                                       value={term}>{term}</option>
                                    else return <option key={index} value={term}>{term}</option>
                                })}
                            </select>
                        </div>

                        {/* <div className="form-group">
                            <label htmlFor="hostId">HostId</label>
                            <input type="text"
                                   className="form-control"
                                   id="hostId"
                                   name="hostId"
                                   placeholder={props.accommodation.host}
                                   onChange={handleChange}
                            />
                        </div> */}

                        <div className="form-group">
                            <label>Host</label>
                            <select name="hostId" className="form-control" onChange={handleChange}>
                                {props.hosts.map((term) => {
                                    if (hostId === term.id)
                                        return <option selected={hostId}
                                                       value={term.id}>{term.name}</option>
                                    else return <option key={term.id} value={term.id}>{term.name}</option>
                                })}
                            </select>
                        </div>


                        <div className="form-group">
                            <label htmlFor="numRooms">NumRooms</label>
                            <input type="text"
                                   className="form-control"
                                   id="numRooms"
                                   name="numRooms"
                                   placeholder={props.accommodation.numRooms}
                                   onChange={handleChange}
                            />
                        </div>


                        <button id="submit" type="submit" className="btn btn-primary m-3">Submit</button>
                    </form>
                </div>
            </div>
    )
}

export default AccommodationEdit;