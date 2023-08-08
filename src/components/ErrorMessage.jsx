const ErrorMessage = ({error, className}) => {
  return (
    <small className={`text-md text-red-500 font-light ${className}`}>{error}</small>
  )
}

export default ErrorMessage;
