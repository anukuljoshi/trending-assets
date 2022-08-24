import React from "react";

interface CardPairsProps {
	items: React.ReactNode[];
}

const CardPairs = (props: CardPairsProps) => {
	return (
		<div className="mt-2">
			<div className="flex justify-center">
				<div className="card__pairs">
					{props.items.map((item) => item)}
				</div>
			</div>
			<div className="card__headline">{"Popular Pairs"}</div>
		</div>
	);
};

export default CardPairs;
