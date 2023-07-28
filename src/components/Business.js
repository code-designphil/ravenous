import React from 'react';
import './Business.css'
import Star from "./Star";

function Business(props) {
    const business = {
        img: props.img,
        name: props.name,
        address: props.address,
        city: props.city,
        state: props.state,
        zipcode: props.zipcode,
        category: props.category,
        rating: props.rating,
        reviewCount: props.reviewCount
    };

    function businessLinkHoverEnter(e){
        let thumbnailOverlay = document.querySelectorAll('.thumbnail-hover-overlay')[props._key];
        console.log(thumbnailOverlay);
        try {
            thumbnailOverlay.style.opacity = '100';
        } catch (e) {
            console.log(e.message)
        }
    }

    function businessLinkHoverLeave(e){
        let thumbnailOverlay = document.querySelectorAll('.thumbnail-hover-overlay')[props._key];
        try {
            thumbnailOverlay.style.opacity = '0';
        } catch (e) {
            console.log(e.message)
        }
    }

    if(props._hide) {
        return <div className='business'></div>;
    }

    const rating = Math.abs(business.rating);

    let stars = [];
    for (let i=0; i<rating; i++){
        stars.push(<Star fill={'#FCF87C'} />);
    }
    for (let i=rating; i<5; i++){
        stars.push(<Star fill={'#fff'} />);
    }


    return (
            <div className='business'>
                    <a href={''} id={'business-link'} onMouseEnter={businessLinkHoverEnter} onMouseLeave={businessLinkHoverLeave}>
                    <div className={'thumbnail-holder'}>
                        <div className={'thumbnail-hover-overlay'} id={'thumbnail-hover-overlay'}>
                            <div className={'address-holder'}>
                                <p>{business.address}</p>
                                <p>{`${business.city}, ${business.state}`}</p>
                                <p id={'underline'}>See More</p>
                            </div>
                        </div>
                        <img src={business.img} alt={business.name}/>
                    </div>
                    </a>
                    <h3>{business.name}</h3>
                    <p className={'food-category'}>{business.category}</p>
                    <div className={'restaurant-rating-holder'}>
                        <div className={'stars-holder'}>
                            {stars}
                        </div>
                        <p>{`(${business.reviewCount})`}</p>
                    </div>
            </div>
    );
}

export default Business;