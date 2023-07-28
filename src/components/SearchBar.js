import React from "react";
import './SearchBar.css';

function SearchBar(props) {
    const [btnStates, setBTNStates] = React.useState([false, false, false]);

    function handleSubmit() {
        const searchTermInput = document.getElementById('users-search');
        const locationFilter = document.getElementById('location');

        let searchTerm = searchTermInput.value;
        let location = locationFilter.value;

        searchTerm = searchTerm.replace(' ', '%20')
        let sortBy = '';

        if (btnStates[0]) {
            sortBy = 'best_match';
        } else if (btnStates[1]) {
            sortBy = 'rating';
        } else if (btnStates[2]) {
            sortBy = 'review_count';
        }

        props.onSubmit(searchTerm, location);
    }

    const handleSortButtonClick = (e) => {
        switch (e.target.id) {
            case 'best-match-btn':
                setBTNStates(btnStates[0] ? [false, false, false] : [true, false, false]);
                break;
            case 'highest-rated-btn':
                setBTNStates(btnStates[1] ? [false, false, false] : [false, true, false]);
                break;
            case 'most-reviewed-btn':
                setBTNStates(btnStates[2] ? [false, false, false] : [false, false, true]);
                break;
            default:
                console.log("#error there is no button id that matches one of the sort button id's ");
                break;
        }

    };


    const buttons = [<button className={'sorting-btn'} key={0} id='best-match-btn' onClick={handleSortButtonClick} style={{ backgroundColor: btnStates[0] ? '#FFF58C' : '', color: 'black'}}>Best Match</button>,
        <button className={'sorting-btn'} key={1} id='highest-rated-btn' onClick={handleSortButtonClick} style={{ backgroundColor: btnStates[1] ? '#FFF58C' : '', color: 'black'}}>Highest Rated</button>,
        <button className={'sorting-btn'} key={2} id='most-reviewed-btn' onClick={handleSortButtonClick} style={{ backgroundColor: btnStates[2] ? '#FFF58C' : '', color: 'black'}}>Most Reviewed</button>]

    return (
        <div className='search-bar'>
            <h1 className={'hero-heading'}>Hungry? We got you!</h1>
            <div className='sorting-btns'>
                {buttons}
            </div>
            <div className='search-inputs'>
                <input id='users-search' type='text' placeholder={'Search Businesses'}/>
                <input id='location' type='text' placeholder={'Location'}/>
            </div>
            <input id='search-bar-submit-btn' type='submit' value={"Let's Go"} onClick={handleSubmit}/>
        </div>
    );
}

export default SearchBar;