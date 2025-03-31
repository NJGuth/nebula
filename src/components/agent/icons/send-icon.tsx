const SendIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...props
}) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      opacity="0.12"
      d="M4.73297 21.4249C4.18518 21.6067 3.91129 21.6976 3.7428 21.6314C3.59648 21.574 3.4857 21.451 3.44373 21.2995C3.39541 21.1251 3.51425 20.8621 3.75195 20.3361L11.3064 3.6201C11.5387 3.10615 11.6549 2.84917 11.8157 2.76994C11.9555 2.70111 12.1194 2.70137 12.259 2.77065C12.4196 2.8504 12.5349 3.10775 12.7655 3.62244L20.254 20.3352C20.4898 20.8615 20.6077 21.1247 20.5589 21.2989C20.5165 21.4502 20.4054 21.5728 20.2589 21.6299C20.0903 21.6956 19.8169 21.604 19.27 21.4209L12.2915 19.0847C12.1976 19.0533 12.1507 19.0376 12.1027 19.0313C12.0601 19.0258 12.017 19.0257 11.9744 19.0312C11.9264 19.0373 11.8794 19.0529 11.7855 19.0841L4.73297 21.4249Z"
      fill="currentColor"
    />
    <path
      d="M12 19.0001V12.0001M12.2915 19.0847L19.27 21.4209C19.8169 21.604 20.0903 21.6956 20.2589 21.6299C20.4054 21.5728 20.5165 21.4502 20.5589 21.2989C20.6077 21.1247 20.4898 20.8615 20.254 20.3352L12.7655 3.62244C12.5349 3.10775 12.4196 2.8504 12.259 2.77065C12.1194 2.70137 11.9555 2.70111 11.8157 2.76994C11.6549 2.84917 11.5387 3.10615 11.3064 3.6201L3.75195 20.3361C3.51425 20.8621 3.39541 21.1251 3.44373 21.2995C3.4857 21.451 3.59648 21.574 3.7428 21.6314C3.91129 21.6976 4.18518 21.6067 4.73297 21.4249L11.7855 19.0841C11.8794 19.0529 11.9264 19.0373 11.9744 19.0312C12.017 19.0257 12.0601 19.0258 12.1027 19.0313C12.1507 19.0376 12.1976 19.0533 12.2915 19.0847Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SendIcon;
