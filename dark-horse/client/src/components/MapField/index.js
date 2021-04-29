import React, { Component } from "react";

import Api from "../Util/Api";
import LeafMap from "../Map/index";
import SearchForm from "./SearchForm";
import "./map.css"



class MapField extends Component {
    state = {
        search: "",
        results: [],
    }

    componentDidMount() {
        this.searchApi("Los Angeles, CA")
    }
    searchApi = query => {
        Api.search(query)
            // .then((response) => response.json())
            .then(res => this.setState({ results: [res.summary.geoBias.lat, res.summary.geoBias.lon] }, console.log("Res: ", res))
                , console.log("State", this.state)
            )
            .catch(err => console.log(err))
        console.log("Query: ", query);


    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };


    // When the form is submitted, search the Api for `this.state.search`
    handleFormSubmit = event => {
        event.preventDefault();
        this.searchApi(this.state.search);
    };
    render() {
        return (
            <div>
                <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                />
                <LeafMap />
            </div>
        )
    }
}
export default MapField