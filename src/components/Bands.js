import React from "react";

const Bands = (props) => {
	console.log(props);
	debugger;
	const bands = props.bands.map((band, index) => {
		return <li key={index}>{band.name}</li>;
	});

	return (
		<div>
			<h1>Bands:</h1>
			{bands}
		</div>
	);
};

export default Bands;
