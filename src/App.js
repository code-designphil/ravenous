import './App.css';
import React, {useState} from 'react';
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";
import NavBar from "./components/NavBar";
import fetchYelpData from "./components/fetchYelpData";

function App() {

    const [searchResults, setSearchResults] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit (searchTerm, searchLocation){
        const data = await fetchYelpData(searchTerm, searchLocation);
        if (data) {
            setSearchResults(data.businesses);
        }
        console.log(searchResults);
        setSubmitted(true);
    }

    return (
        <div className="App">
            <NavBar/>
            <SearchBar onSubmit={handleSubmit}/>
            <BusinessList businesses={searchResults} submitted={submitted}/>
        </div>
        );
    }

export default App;
