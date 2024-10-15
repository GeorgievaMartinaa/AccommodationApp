import React from "react";
import {Link} from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import './style.css';

class Accommodations extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }


    render() {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.accom.length / this.state.size);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Host ID</th>
                                <th scope={"col"}>Host Name</th>
                                <th scope={"col"}>numRooms</th>
                                <th scope={"col"}>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {console.log(this.props)}
                            {console.log(this.props.accom)}
                            {this.props.accom
                                .map((term) => {
                                    return (
                                        <tr>
                                            <td>{term.name}</td>
                                            <td>{term.category}</td>
                                            <td>{term.host.id}</td>
                                            <td>{term.host.name}</td>
                                            <td>{term.numRooms}</td>
                                            <td>{term.rented}</td>
                                            <td>
                                                <a title={"Delete"} className={"btn btn-danger mx-1"}
                                                   onClick={() => this.props.onDelete(term.id)}>
                                                    Delete
                                                </a>
                                                <Link className={"btn btn-info mx-1"}
                                                      onClick={() => this.props.onEdit(term.id)}
                                                      to={`/accommodations/edit/${term.id}`}>
                                                    Edit
                                                </Link>
                                                {term.numRooms > 0 && (
                                                    <Link className={"btn btn-info mx-1"}
                                                          onClick={() => this.props.onRent(term.id)}>
                                                        Rent
                                                    </Link>
                                                )}
                                            </td>
                                        </tr>
                                    );
                                })
                                .filter((accommodation, index) => {
                                    return index >= offset && index < nextPageOffset;
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/accommodations/add"}>Add new
                                    accommodation</Link>
                            </div>
                        </div>
                    </div>

                </div>
                <ReactPaginate previousLabel={"back"}
                               nextLabel={"next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>

            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

}

export default Accommodations;