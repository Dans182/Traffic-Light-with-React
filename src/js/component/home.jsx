import React, { useState } from "react";

const Home = () => {
	const [seleccion, setSeleccion] = useState();

	return (
		<div>
			<div className="stick container"></div>
			<div className="container">
				<div className="row justify-content-center">
					<div
						className="box card justify-content-center"
						style={{ width: "5rem", height: "15rem" }}>
						<div
							onClick={() => {
								setSeleccion("red");
							}}
							className={
								"luz mx-auto bg-danger" +
								(seleccion === "red" ? " encendido" : "")
							}></div>
						<div
							onClick={() => {
								setSeleccion("yellow");
							}}
							className={
								"luz mx-auto bg-warning" +
								(seleccion === "yellow" ? " encendido" : "")
							}></div>
						<div
							onClick={() => {
								setSeleccion("green");
							}}
							className={
								"luz mx-auto bg-success" +
								(seleccion === "green" ? " encendido" : "")
							}></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
