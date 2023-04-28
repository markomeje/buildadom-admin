import { ReactNode } from "react"
import { Container as BootstrapContainer } from 'react-bootstrap';

type Props = {
  children?: ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <BootstrapContainer style={{  maxWidth: '960px' }}>
      {children}
    </BootstrapContainer>
  )
}
