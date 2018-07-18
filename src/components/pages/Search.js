import React from 'react';
import API from '../utils/API';

class Search extends React.Component {
    state = {
        result: [],
        search: ""
    }

    componentDidMount = () => {
        this.searchBreed("husky");
    };

    searchBreed = query => {
        API.search(query).then(res => {
            return this.setState({
                result: res.data.message
            }, () => {
                console.log("searchBreed: ", this.state.result);
            });
        });
    };

    searchInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBreed(this.state.search);
    };

    render() {
        

        return (
            <form className="serach">
                <div className="form-group">
                    <label for="breed">Breed Name:</label>

                    <input type="text" name="search" list="breeds" className="form-control" placeholder="Enter dog breed to search" id="breed" onChange={this.searchInputChange} value={this.state.search} />

                    <button type="submit" className="btn btn-success" onClick={this.handleFormSubmit}>Search</button>
                </div>
                <div>
                    {this.state.result.map((dog, i) => {
                        return (
                            <img key={i} alt="doggo" src={dog} />
                        )
                    })}
                </div>
            </form>
        )
    }
}

export default Search;