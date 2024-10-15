import './App.css';
import {Component} from "react";
import React from "react";
import Accommodations from '../Accommodations/List/accommodations'
import AppService from "../../repository/repository";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../Header/header'
import AccommodationEdit from '../Accommodations/Edit/accommodationEdit'
import AccommodationAdd from '../Accommodations/Add/accommodationAdd'
import Categories from '../Categories/categoriesList'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accom: [],
            hosts: [],
            selectedAccommodation: {},
            categories: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <Routes>
                        <Route path={"/accommodations/add"} exact element={
                            <AccommodationAdd onAddAccommodation={this.addAccommodation}
                                              hosts={this.state.hosts}
                                              categories={this.state.categories}>

                            </AccommodationAdd>
                        }>
                        </Route>
                        <Route path={"/accommodations/edit/:id"} exact element={
                            <AccommodationEdit onEditAccommodation={this.editAccommodation}
                                               accommodation={this.state.selectedAccommodation}
                                               hosts={this.state.hosts}
                                               categories={this.state.categories}
                            />}/>

                        <Route path={"/accommodations"} exact element={
                            <Accommodations accom={this.state.accom}
                                            onDelete={this.deleteAccommodation}
                                            onEdit={this.getAccommodation}
                                            onRent={this.rentAccommodation}/>}/>

                        <Route path={"/categories"} exact element={
                            <Categories categories={this.state.categories}>

                            </Categories>
                        }>

                        </Route>
                        <Route path={"/"} exact element={
                            <Accommodations accom={this.state.accom}
                                            onDelete={this.deleteAccommodation}
                                            onEdit={this.getAccommodation}
                                            onRent={this.rentAccommodation}
                            />}/>
                    </Routes>
                </main>
            </Router>

        );
    }

    loadAccommodations = () => {
        AppService.fetchAccommodations()
            .then((data) => {
                this.setState({
                    accom: data.data
                })
                console.log(data.data)
            });
    }

    loadHosts = () => {
        AppService.fetchHosts()
            .then((data) => {
                this.setState({
                    hosts: data.data
                })
                console.log(data.data)
            });
    }

    loadCategories =() => {
        AppService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
                console.log(data.data)
            })
    }

    componentDidMount() {
        this.loadAccommodations();
        this.loadHosts();
        this.loadCategories();
    }

    deleteAccommodation = (id) => {
        AppService.deleteAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            });
    }

    getAccommodation = (id) => {
        AppService.getAccommodation(id)
            .then((data) => {
                this.setState({
                    selectedAccommodation: data.data
                })
            })

    }

    editAccommodation = (id, name, category, hostId, numRooms) => {
        AppService.editAccommodation(id, name, category, hostId, numRooms)
            .then(() => {
                this.loadAccommodations();
            });
    }

    addAccommodation = (name, category, hostId, numRooms) => {
        AppService.addAccommodation(name, category, hostId, numRooms)
            .then(() => {
                this.loadAccommodations();
            });

    }

    rentAccommodation = (id) => {
        AppService.rentAccommodation(id)
            .then(() => {
                this.loadAccommodations();
            });
    }


}


export default App;
