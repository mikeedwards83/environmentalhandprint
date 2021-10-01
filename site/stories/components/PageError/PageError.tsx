import { ReactNode } from "react"

const PageError = (props: {
  className?: string,
  title: string,
  description: string
}) => {

  const {
    className = "",
    title,
    description
  } = props;

  return (
    <div className={`PageError py-5 ${className}`}>
      <div>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default PageError;