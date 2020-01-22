import React from "react"

function InstructionsField({round}) {
	return (
		<div>
			<ul>
				<li>{"Ronda " + round}</li>
				<li>Explicación del personaje</li>
				<li>No se puede pasar</li>
				<li>30 segundos por turno</li>
			</ul>
		</div>
	)
}

export default InstructionsField
