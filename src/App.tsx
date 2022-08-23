import React from "react";

import { ReactComponent as Ethereum } from "./assets/svg/Ethereum.svg";
import { ReactComponent as BinanceCoin } from "./assets/svg/BinanceCoin.svg";
import { ReactComponent as Bitcoin } from "./assets/svg/BitcoinSV.svg";
import { ReactComponent as Shiba } from "./assets/svg/SHIBA.svg";
import { ReactComponent as Solana } from "./assets/svg/Solana.svg";

function App() {
	return (
		<div>
			<h1 className="text-3xl text-red-800">Trending Assets</h1>
			<div>
				<Ethereum />
				<BinanceCoin />
				<Bitcoin />
				<Shiba />
				<Solana />
			</div>
		</div>
	);
}

export default App;
