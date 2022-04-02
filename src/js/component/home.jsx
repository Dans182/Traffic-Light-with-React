import React, { useState, useEffect } from "react";
import TrafficLight from "../component/TrafficLight.jsx";

//create your first component
let luzRoja = <i className="fas fa-circle text-danger"></i>;
let luzAmarilla = <i className="fas fa-circle text-warning"></i>;
let luzVerde = <i className="fas fa-circle text-success"></i>;

const Home = () => {
	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<TrafficLight
					icono={luzRoja}
					icono2={luzAmarilla}
					icono3={luzVerde}
				/>
			</div>
		</div>
	);
};

export default Home;
