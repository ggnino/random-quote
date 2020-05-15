import React, { Component } from "react";

class Quote extends Component {
	render() {
		let { output, gen, quote, index } = this.props;
		return (
			<div className="container-fluid" id="main">
				<h1 className="m-4 p-4">Game Of Thrones Quote Generator</h1>
				<div className="row" id="row">
					<div className="col-md-6 hgt">
						<img
							className="rnd hgt img-fluid"
							src={output()}
							alt=""
							style={
								index === null
									? { display: "none" }
									: { display: "inline-block" }
							}
						></img>
						<img className="rnd hgt img-fluid" src={output().img1} alt=""></img>
					</div>
					<div className="col-md-6 hgt">
						{index !== null ? <br /> : false}
						<h2>{quote()}</h2>
						<img className="rnd hgt img-fluid" src={output().img2} alt=""></img>
					</div>
				</div>
				<button
					className="btn btn-md btn-dark btn-outline-success text-light m-4"
					onClick={gen}
				>
					Generate
				</button>
			</div>
		);
	}
}

export default Quote;
