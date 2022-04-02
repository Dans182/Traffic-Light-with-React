import React from "react";
import propTypes from "prop-types";

const TrafficLight = (props) => {
	return (
		<div className="card text-white bg-dark m-1" style={{ Width: "10rem" }}>
			<div className="card-body d-flex justify-content-center text-center">
				<h1 className="card-title">{props.icono}</h1>
			</div>
		</div>
	);
};

TrafficLight.propTypes = {
	icono: propTypes.string,
};

export default TrafficLight;
