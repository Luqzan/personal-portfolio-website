import ClearIcon from "@mui/icons-material/Clear";

export default function ClearButton({ onClick }) {
  return (
    <button
      className="flex items-center justify-center rounded-md bg-red-500 hover:cursor-pointer overflow-hidden w-4 h-4"
      onClick={onClick}
    >
      <ClearIcon sx={{ color: "#ededed", height: 14, width: 14 }} />
    </button>
  );
}
