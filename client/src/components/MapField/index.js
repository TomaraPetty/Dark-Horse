import React, { Component } from "react";

import Api from "../Util/Api";
import LeafMap from "../Map/index";
import SearchForm from "../MapSearch/SearchForm";
import "./map.css"



class MapField extends Component {
    state = {
        search: "",
        coord: [34.05224, -118.24334],

    }

    componentDidMount() {
        this.searchApi("Los Angeles, CA");
    }
    searchApi = query => {
        Api.search(query)
            // .then((response) => response.json())
            .then(res => this.setState({ coord: [res.results[0].position.lat, res.results[0].position.lon] })
                , console.log("State", this.state)
            )
            .catch(err => console.log(err))
        console.log("Query: ", query);


    }

    handleInputChange = event => {

        const name = event.target.name;
        const value = event.target.value;
        // const newResults = this.state.newResults;
        this.setState({
            [name]: value,
            // newResults: name,
            // results: newResults


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
                <LeafMap
                    lat={this.state.coord[0]}
                    lon={this.state.coord[1]} />
            </div>
        )
    }
}
export default MapField