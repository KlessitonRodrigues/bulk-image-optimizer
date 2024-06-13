import Icons from 'src/lib/base/Icons';
import { Card, Section } from 'src/lib/styled/Containers';
import { Hr } from 'src/lib/styled/Divisors';
import { Row } from 'src/lib/styled/Flex';

const UdemyCertificates = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="udemy" size={9} />
          <h3>Udemy</h3>
        </Row>
        <Hr />
      </Card>
    </Section>
  );
};

export default UdemyCertificates;
