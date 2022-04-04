import React, { useState } from "react";

const Home = () => {
	const [seleccion, setSeleccion] = useState();

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div
					className="card bg-dark justify-content-center "
					style={{ width: "5rem", height: "15rem" }}>
					<div
						onClick={() => {
							setSeleccion("red");
						}}
						className={
							"luz bg-danger" +
							(seleccion === "red" ? " prueba1" : "")
						}></div>
					<div
						onClick={() => {
							setSeleccion("yellow");
						}}
						className={
							"luz bg-warning" +
							(seleccion === "yellow" ? " prueba1" : "")
						}></div>
					<div
						onClick={() => {
							setSeleccion("green");
						}}
						className={
							"luz bg-success" +
							(seleccion === "green" ? " prueba1" : "")
						}></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
