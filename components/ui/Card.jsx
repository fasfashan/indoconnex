export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-white p-6 rounded border border-gray-300 ${className}`}>
      {children}
    </div>
  );
}
