export default function HamburgerButton({
  onClick,
  style = {
    container: {},
    line: {},
  },
}: {
  onClick: () => void;
  style?: {
    container?: { [i in string]: string };
    line?: { [i in string]: string };
  };
}) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        cursor: "pointer",
        padding: "0.2rem",
        ...style.container,
      }}
    >
      {Array.from({ length: 3 }).map((_, idx) => (
        <Line style={style.line || {}} key={idx} />
      ))}
    </div>
  );
}

const Line = ({ style }: { style: { [i in string]: string } }) => {
  return (
    <div
      style={{
        width: "20px",
        height: "2px",
        background: "#fff",
        borderRadius: "1px",
        ...style,
      }}
    />
  );
};
