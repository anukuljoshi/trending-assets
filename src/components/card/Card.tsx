import CardPairs from "./CardPairs";
import CardValue from "./CardValue";

interface CardProps {
	SVGElement: React.ReactNode;
	header: String;
	header1: String;
	value1: number;
	header2: String;
	value2: number;
	percent: number;
	gradient?: String;
	items?: React.ReactNode[];
}

const Card = (props: CardProps) => {
	return (
		<div className="card">
			<div className={`card__header ${props.gradient}`}>
				{props.SVGElement}
			</div>
			<div className="card__content">
				<div className="card__headline">{props.header}</div>
				<CardValue
					header={props.header1}
					value={props.value1}
					percent={props.percent}
				/>
				<CardValue header={props.header2} value={props.value2} />

				{props.items && <CardPairs items={props.items} />}
			</div>
		</div>
	);
};

export default Card;
