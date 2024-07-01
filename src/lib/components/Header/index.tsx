import { Row } from 'src/lib/base/Styled/Flex';
import { HeaderContainer, HeaderContent } from 'src/lib/base/Styled/Header';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Row left>
          <h1>Header</h1>
        </Row>
        <Row right>
          <p>Button</p>
          <p>Button</p>
          <p>Button</p>
          <p>Button</p>
        </Row>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
