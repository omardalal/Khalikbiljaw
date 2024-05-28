import React from "react";
import TourCard from "../../shared/TourCard";

import { Col } from "reactstrap";

import useFetch from "../../hooks/useFetch";

const FeaturedTourList = () => {
  const {
    data: featuredTours,
    loading,
    error,
  } = useFetch(`https://jerusalem-toruism.onrender.com/package`);


  //useFetch(`${BASE_URL}/package/search/getFeaturedTours`);
 
  return (
    <>
      {loading && <h4>Loading...........</h4>}
      {error && <h4>{error}</h4>}
      {!loading &&
        !error &&
        featuredTours?.map(tour => (
          <Col lg="3" md="6" sm="6" className="mb-4" key={tour._id}>
            <TourCard tour={tour} />
          </Col>
          
        ))}
    </>
  );
};

export default FeaturedTourList;
