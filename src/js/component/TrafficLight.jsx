import React from "react";
import propTypes from "prop-types";

const TrafficLight = (props) => {
	return (
		<div className="row justify-content-center">
			<div className="card bg-dark" style={{ width: "5rem" }}>
				<div className="card-body d-flex justify-content-center text-center">
					<h1 className="card-title m-0">
						{props.icono}
						{props.icono2}
						{props.icono3}
					</h1>
				</div>
			</div>
		</div>
	);
};

TrafficLight.propTypes = {
	icono: propTypes.object,
};

export default TrafficLight;
