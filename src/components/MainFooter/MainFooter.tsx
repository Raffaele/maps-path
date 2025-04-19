import { Path } from "../../data/paths";

type Props = {
  onPathSelect: (pathId: string) => void;
  selectedPathId: string | null;
  paths: Path[];
};

export const MainFooter: React.FC<Props> = ({
  onPathSelect,
  paths,
  selectedPathId,
}) => {
  return (
    <footer style={{ overflowX: "scroll" }}>
      <ul
        style={{
          display: "flex",
          paddingInlineStart: 0,
          marginBlockStart: 0,
          marginBlockEnd: 0,
        }}
      >
        {paths.map((path) => {
          const color = path.id === selectedPathId ? "red" : "black";
          return (
            <li
              key={path.id}
              style={{
                listStyle: "none",
                cursor: "pointer",
                padding: "10px",
                border: `1px solid ${color}`,
                margin: "5px 15px",
                whiteSpace: "nowrap",
                color,
                borderRadius: 15,
              }}
              onClick={() => onPathSelect(path.id)}
            >
              {path.label}
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
