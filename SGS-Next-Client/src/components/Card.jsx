export default function Card({ children, className = '', color = 'white' }) {
  const bgStyles = {
    white: 'bg-parchment-card',
    yellow: 'bg-yellow',
    sky: 'bg-sky/20',
    rust: 'bg-rust-container',
    teal: 'bg-teal-container',
  };

  return (
    <div
      className={`border-3 border-navy shadow-pop p-6 rounded-2xl ${bgStyles[color] || 'bg-parchment-card'} ${className}`}
    >
      {children}
    </div>
  );
}
