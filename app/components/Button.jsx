export default function Button({ children }) {
  return (
    <button className="text-ivory-cream font-bold bg-slate-grey cursor-pointer rounded-md px-3 py-2 hover:bg-steel-blue-grey transition-colors duration-300">
      {children}
    </button>
  );
}
