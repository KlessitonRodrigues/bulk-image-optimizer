import { Column } from 'src/lib/styled/Flex';
import { getText } from 'src/utils/i18n';

import Icons from '../Icons';
import If from '../If';
import { Container, Description, FullScreen, Spinner, Title } from './styled';

const Loading = (props: Props.Loading) => {
  const { show, type, title, description } = props;
  return (
    <Container>
      <If check={show && type === 'icon'}>
        <Spinner>
          <Icons type="spinner" size={12} />
        </Spinner>
      </If>

      <If check={show && type === 'fullScreen'}>
        <FullScreen>
          <Spinner>
            <Icons type="spinner" size={12} />
          </Spinner>
          <Column gap={4}>
            <Title>{title || getText('loding_title')}</Title>
            <Description>{description}</Description>
          </Column>
        </FullScreen>
      </If>
    </Container>
  );
};

export default Loading;
