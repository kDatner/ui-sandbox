interface CardProps {
  variant: "default" | "primary";
}

export function Card(props: CardProps) {
  return (
    <div
      data-variant={props.variant}
      className="bg-white rounded-lg p-6 shadow-xl variant-primary:bg-shade-100 variant-primary:text-white"
    >
      I am a {props.variant} card
    </div>
  );
}
