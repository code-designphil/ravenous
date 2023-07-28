import React, { useState, useEffect } from "react";
import Business from "./Business";
import './BusinessList.css';

function BusinessList(props) {
    const [businessList, setBusinessList] = useState([]);

    useEffect(() => {
        if (props.submitted && props.businesses.length > 0) {
            const businesses = props.businesses.slice(0, 10).map((b) => (
                <Business
                    className={'business'}
                    key={0}
                    img={b.image_url}
                    name={b.name}
                    address={b.location.address1}
                    city={b.location.city}
                    state={b.location.state}
                    zipcode={b.location.zipcode}
                    category={b.categories[0].title}
                    rating={b.rating}
                    reviewCount={b.review_count}
                />
            ));

            setBusinessList(businesses);
        } else {
            // Handle the case when there are no businesses to display
            setBusinessList([<p>No businesses found.</p>]);
        }
    }, [props.submitted, props.businesses]);

    return (
        <div className={'gutter-outside'}>
            <div className='business-list'>
                {businessList}
            </div>
        </div>
    );
}

export default BusinessList;