import React from 'react';
import {Link} from 'react-router-dom';

const AccommodationTerm = (props) => {
    return (
        <tr>
            <tr>
                <td>{props.term.name}</td>
                <td>{props.term.category}</td>
                <td>{props.term.host.id}</td>
                <td>{props.term.numRooms}</td>
            </tr>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/accommodations/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    )
}

export default AccommodationTerm;
