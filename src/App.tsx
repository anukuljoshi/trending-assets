import React from "react";

import { ReactComponent as Binance } from "./assets/svg/BinanceCoin.svg";
import { ReactComponent as Bitcoin } from "./assets/svg/BitcoinSV.svg";
import { ReactComponent as Ethereum } from "./assets/svg/Ethereum.svg";
import { ReactComponent as Shiba } from "./assets/svg/SHIBA.svg";
import { ReactComponent as Solana } from "./assets/svg/Solana.svg";
import { ReactComponent as Trending } from "./assets/svg/Trending.svg";

import Card from "./components/card/Card";

function App() {
	return (
		<div className="container">
			<div className="flex items-center gap-3">
				<Trending width={15} height={15} />
				<h1 className="page__header">Trending Assets</h1>
			</div>
			<div className="trending-assets">
				<Card
					SVGElement={<Bitcoin />}
					header={"Bitcoin (BTC)"}
					header1={"Price"}
					value1={"31812.80"}
					percent={"+10"}
					header2={"TVL"}
					value2={"60000"}
					gradient={"bitcoin-gradient"}
					items={[
						<Solana width={22} height={22} />,
						<Ethereum width={22} height={22} />,
						<Binance width={22} height={22} />,
					]}
				/>
				<Card
					SVGElement={<Solana />}
					header={"Solana (SOL)"}
					header1={"Price"}
					value1={"32.83"}
					header2={"TVL"}
					value2={"60000"}
					percent={"-12.32"}
					gradient={"solana-gradient"}
					items={[
						<Bitcoin width={22} height={22} />,
						<Ethereum width={22} height={22} />,
						<Binance width={22} height={22} />,
					]}
				/>
				<Card
					SVGElement={<Ethereum />}
					header={"Ethereum (ETH)"}
					header1={"Price"}
					value1={"1466.45"}
					header2={"TVL"}
					value2={"60000"}
					percent={"-11.93"}
					gradient={"ethereum-gradient"}
					items={[
						<Solana width={22} height={22} />,
						<Bitcoin width={22} height={22} />,
						<Binance width={22} height={22} />,
					]}
				/>
				<Card
					SVGElement={<Binance />}
					header={"Binance USD (BUSD)"}
					header1={"Price"}
					value1={"1.00"}
					header2={"TVL"}
					value2={"60000"}
					percent={"+0.26"}
					gradient={"binance-gradient"}
					items={[
						<Solana width={22} height={22} />,
						<Ethereum width={22} height={22} />,
						<Binance width={22} height={22} />,
					]}
				/>
				<Card
					SVGElement={<Shiba />}
					header={"Shiba Inu (SHIB)"}
					header1={"Price"}
					value1={"0.00000001948"}
					header2={"TVL"}
					value2={"60000"}
					percent={"-8.1"}
					gradient={"shiba-gradient"}
					items={[
						<Bitcoin width={22} height={22} />,
						<Ethereum width={22} height={22} />,
						<Binance width={22} height={22} />,
					]}
				/>
			</div>
		</div>
	);
}

export default App;
