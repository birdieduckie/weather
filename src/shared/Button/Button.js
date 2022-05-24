import { StyledButton } from './styled'

export const Button = ({ type = 'primary', children, ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  )
}
