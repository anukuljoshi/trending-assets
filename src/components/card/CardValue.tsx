interface CardValueProps {
	header: String;
	value: number;
	percent?: number;
}

const CardValue = (props: CardValueProps) => {
	return (
		<div className="mt-2">
			<div className="card__value__container">
				<span className="card__value">{`$${props.value}`}</span>
				{props.percent && (
					<span
						className={`${
							props.percent >= 0
								? "card__subvalue__positive"
								: "card__subvalue__negative"
						}`}
					>{`${props.percent}%`}</span>
				)}
			</div>
			<div className="card__headline">{props.header}</div>
		</div>
	);
};

export default CardValue;
