export default function Button({ children, variant = 'primary', size = 'md', className = '', type = 'button', clickAction = () => { } }) {
  const variantStyles = {
    primary: 'bg-yellow text-navy hover:bg-yellow-fixed border-3 border-navy shadow-pop',
    secondary: 'bg-teal text-white hover:bg-teal/90 border-3 border-navy shadow-pop',
    accent: 'bg-rust text-white hover:bg-rust/90 border-3 border-navy shadow-pop',
    outline: 'bg-parchment text-navy hover:bg-parchment-dim border-3 border-navy shadow-pop-sm',
    sky: 'bg-sky text-navy hover:bg-sky/90 border-3 border-navy shadow-pop',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs font-bold',
    md: 'px-5 py-2.5 text-sm font-extrabold',
    lg: 'px-7 py-3.5 text-base font-extrabold',
  };

  return (
    <button
      onClick={clickAction}
      type={type}
      className={`font-grotesk tracking-wide rounded-full transition-all active:translate-x-1 active:translate-y-1 active:shadow-none ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
