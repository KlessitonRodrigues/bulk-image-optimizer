import Text from 'src/lib/base/Text';
import { Card, Section } from 'src/lib/styled/Containers';
import { Hr } from 'src/lib/styled/Divisors';
import { Column, Row } from 'src/lib/styled/Flex';

const ProfileLanguages = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Text tag="h4" path="language_title" />
          <Hr />

          <Row left responsive>
            <Text tag="h5" path="language_pt_title" />
            <Text tag="p" path="language_pt_text" />
          </Row>

          <Row left responsive>
            <Text tag="h5" path="language_en_title" />
            <Text tag="p" path="language_en_text" />
          </Row>
        </Column>
      </Card>
    </Section>
  );
};

export default ProfileLanguages;
