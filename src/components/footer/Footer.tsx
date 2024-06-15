import FooterStyled from "./FooterStyled";

interface FooterProps {
  children: React.ReactNode;
}

function Footer({children}: FooterProps) {
  return <FooterStyled>{children}</FooterStyled>;
}

export default Footer;
