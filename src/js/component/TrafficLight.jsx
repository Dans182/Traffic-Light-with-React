import React from "react";
import propTypes from "prop-types";

const TrafficLight = (props) => {
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div
					className="card bg-dark"
					style={{ width: "5rem", height: "15rem" }}>
					<div className="card-body d-flex justify-content-center text-center">
						<h1 className="card-title m-0"></h1>
						<div>{props.icono}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

TrafficLight.propTypes = {
	icono: propTypes.object,
};

export default TrafficLight;
