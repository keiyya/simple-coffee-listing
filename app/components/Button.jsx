export default function Button({ children, selected, onClick }) {
  return (
    <button
      className={`text-ivory-cream font-bold px-4 py-2 rounded-md transition-colors duration-300 cursor-pointer ${
        selected
          ? "bg-slate-grey"
          : "bg-charcoal-black text-ivory-cream hover:bg-steel-blue-grey"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
