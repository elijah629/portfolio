export function Banner({ year = new Date().getFullYear() }: { year?: number }) {
  return (
    <a href="https://hackclub.com/" target="_blank">
      <img
        style={{
          width: "230px",
          position: "absolute",
          top: "10px",
          left: 0,
          border: 0,
          zIndex: "999",
        }}
        src={`https://assets.hackclub.com/banners/${year}.svg`}
        alt="Hack Club"
      />
    </a>
  );
}
