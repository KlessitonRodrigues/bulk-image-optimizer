import { IoMenu } from 'react-icons/io5';

import Button from 'src/lib/base/Buttons';
import { Row } from 'src/lib/base/Styled/Flex';
import { HeaderContainer, HeaderContent } from 'src/lib/base/Styled/Header';

const Header = () => {
  const onSendNofication = () => {
    // TODO: Send notification logic
    // alert('Notification sent');
    // const notify = new Notification('Notificação de Teste', { body: 'THIS IS A TEST' });

    console.log('>>>', window);
    alert('TEST');
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Row left>
          <h1>Header</h1>
        </Row>
        <Row right>
          <Button type="icon" onClick={onSendNofication}>
            <IoMenu size={32} />
          </Button>
        </Row>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
