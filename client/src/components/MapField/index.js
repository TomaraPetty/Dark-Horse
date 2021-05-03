import React, { Component } from "react";
import Api from "../../Utils/mapApi";
import MapClass from "../Map/index";
import "../Map/map.css";
import '../../components/Profile/styles.css'



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
            <div className='profile-about bg-light p-2'>
                <form>
                    <div className="form-group">
                        <label htmlFor="search">Search:</label>
                        <input
                            onChange={this.handleInputChange}
                            value={this.state.search}
                            name="search"
                            type="text"
                            className="form-control"
                            placeholder="Ex: Los Angeles, CA"
                            id="search"
                        />
                        <button onClick={this.handleFormSubmit} className="btn btn-primary mt-3">
                            Search
        </button>
                    </div>
                </form>
                {/* <SearchForm
                    search={this.state.search}
                    handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                /> */}
                <MapClass

                    lat={this.state.coord[0]}
                    lon={this.state.coord[1]}

                />

            </div>
        )
    }
}
export default MapField