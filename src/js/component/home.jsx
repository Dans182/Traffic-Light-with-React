import React, { useState, useEffect } from "react";
import TrafficLight from "../component/TrafficLight.jsx";

//create your first component
const Home = () => {
	let luzRoja = <i className="fas fa-circle"></i>;
	let luzAmarilla = <i className="fas fa-circle"></i>;
	let luzVerde = <i className="fas fa-circle"></i>;

	return (
		<div className="container mt-2">
			<div className="row justify-content-center">
				<TrafficLight icono={clock} />
			</div>
		</div>
	);
};

export default Home;
