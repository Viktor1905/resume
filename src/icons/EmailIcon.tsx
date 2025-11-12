const EmailIcon = (props: EmailProps) => (
  <svg
    fill="currentColor"
    width={props.width ? `${props.width}px` : "30px"}
    height={props.height ? `${props.height}px` : "30px"}
    className={props.className ? props.className : ""}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 216 216"
  >
    <path
      d="M108,0C48.353,0,0,48.353,0,108s48.353,108,108,108s108-48.353,108-108S167.647,0,108,0z M156.657,60L107.96,98.498
	L57.679,60H156.657z M161.667,156h-109V76.259l50.244,38.11c1.347,1.03,3.34,1.545,4.947,1.545c1.645,0,3.073-0.54,4.435-1.616
	l49.374-39.276V156z"
    />
  </svg>
);

interface EmailProps {
  width?: number;
  height?: number;
  stroke?: string;
  className?: string;
}
export default EmailIcon;
