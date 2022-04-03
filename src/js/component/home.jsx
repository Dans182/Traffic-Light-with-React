import React, { useState } from "react";

//create your first component
let luzRoja = <i className="fas fa-circle text-danger"></i>;
let luzAmarilla = <i className="fas fa-circle text-warning"></i>;
let luzVerde = <i className="fas fa-circle text-success"></i>;
let luzPruebaRojo = <i className="prueba1 fas fa-circle text-danger"></i>;
let luzPruebaAmarillo = <i className="prueba2 fas fa-circle text-warning"></i>;
let luzPruebaVerde = <i className="prueba3 fas fa-circle text-success"></i>;

const Home = () => {
	const [seleccion, setSeleccion] = useState(luzRoja);
	const [seleccion2, setSeleccion2] = useState(luzAmarilla);
	const [seleccion3, setSeleccion3] = useState(luzVerde);

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div
					className="card bg-dark justify-content-center "
					style={{ width: "5rem", height: "15rem" }}>
					<div
						className="justify-content-center d-flex"
						onClick={() =>
							setSeleccion(
								seleccion == luzRoja ? luzPruebaRojo : luzRoja
							)
						}>
						{seleccion}
					</div>

					<div
						className="justify-content-center d-flex"
						onClick={() =>
							setSeleccion2(
								seleccion2 == luzAmarilla
									? luzPruebaAmarillo
									: luzAmarilla
							)
						}>
						{seleccion2}
					</div>
					<div
						className="justify-content-center d-flex"
						onClick={() =>
							setSeleccion3(
								seleccion3 == luzVerde
									? luzPruebaVerde
									: luzVerde
							)
						}>
						{seleccion3}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
