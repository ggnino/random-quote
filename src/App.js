import React, { Component } from "react";
import "./App.css";
import Quote from "./components/Quote";
import n from "./imgs/north.gif";
import lan from "./imgs/lanni.gif";
import targ from "./imgs/targary.gif";
import lf from "./imgs/lf.gif";
import syrio from "./imgs/sytio.gif";
import yg from "./imgs/ygritte.gif";
import mel from "./imgs/meli.gif";
import ty from "./imgs/tywinlion.gif";
import ns from "./imgs/nstark.gif";
import ary from "./imgs/arya.gif";
import tyr from "./imgs/tyrion.gif";
import cers from "./imgs/cersei.gif";
import Footer from "./components/Footer";

class App extends Component {
	constructor() {
		super();

		this.state = {
			img: [n, lan, targ, lf, syrio, yg, ty, mel, ns, ary, tyr, cers],
			in: null,
			quote: [
				"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you. - Tyrion Lannister",
				"There is only one thing we say to death: Not today. - Swordsman extraordinaire Syrio Forel",
				"The man who passes the sentence should swing the sword. - Ned Stark",
				"Chaos isn’t a pit. Chaos is a ladder. - Little Finger",
				"You know nothing, Jon Snow. - Ygritte",
				"Winter is coming.",
				"When you play the game of thrones, you win or you die. There is no middle ground. - Cersei Lannister",
				"The night is dark and full of terrors - Melisandre",
				"A lion does not concern himself with the opinion of sheep - Tywin Lannister",
				"When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey. - Arya",
				"Im not going to stop the wheel. Im going to break the wheel. - Daenerys Targaryen"
			]
		};
	}

	generator = () => {
		const index = Math.floor(Math.random() * 11);
		this.setState({
			img: [n, lan, targ, lf, syrio, yg, ty, mel, ns, ary, tyr, cers],
			in: index,
			quote: [
				'"Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you. " \n- Tyrion Lannister',
				'"There is only one thing we say to death: Not today." \n- Swordsman extraordinaire Syrio Forel',
				'"The man who passes the sentence should swing the sword." \n- Ned Stark',
				'"Chaos isn’t a pit. Chaos is a ladder." \n- Little Finger',
				'"You know nothing, Jon Snow." - Ygritte',
				'"Winter is coming." \n- House Stark',
				'"When you play the game of thrones, you win or you die. There is no middle ground." \n- Cersei Lannister',
				'"The night is dark and full of terrors." \n- Melisandre',
				'"A lion does not concern himself with the opinion of sheep" \n- Tywin Lannister',
				'"When people ask you what happened here, tell them the North remembers. Tell them winter came for House Frey." \n- Arya',
				'"Im not going to stop the wheel. Im going to break the wheel. \n- Daenerys Targaryen'
			]
		});
	};
	display = () => {
		if (this.state.in === 0) return this.state.img[10];
		if (this.state.in === 6) return this.state.img[11];
		if (this.state.in === 5) return this.state.img[0];
		if (this.state.in === 9) return this.state.img[9];
		if (this.state.in === 2) return this.state.img[8];
		if (this.state.in === 10) return this.state.img[2];
		if (this.state.in === 1) return this.state.img[4];
		if (this.state.in === 3) return this.state.img[3];
		if (this.state.in === 4) return this.state.img[5];
		if (this.state.in === 7) return this.state.img[7];
		if (this.state.in === 8) return this.state.img[6];
		else {
			return { img1: this.state.img[0], img2: this.state.img[1] };
		}
	};
	quoter = () => {
		return this.state.quote[this.state.in];
	};

	render() {
		return (
			<div className="App">
				<Quote
					output={this.display}
					gen={this.generator}
					quote={this.quoter}
					index={this.state.in}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
