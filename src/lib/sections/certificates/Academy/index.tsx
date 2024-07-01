import Accordion from 'src/lib/base/Accordion';
import Icons from 'src/lib/base/Icons';
import { Card, Section } from 'src/lib/base/Styled/Containers';
import { Hr } from 'src/lib/base/Styled/Divisors';
import { Row } from 'src/lib/base/Styled/Flex';
import { Image } from 'src/lib/base/Styled/Images';
import Text from 'src/lib/base/Text';
import schoolImg from 'src/public/images/diploma_medio-min.jpg';

const AcademyCertificates = () => {
  return (
    <Section>
      <Card>
        <Row left gap={4}>
          <Icons type="school" size={9} />
          <Text tag="h3" path="education_title" />
        </Row>
        <Hr />
        <Accordion
          delayLoad
          title={<Text tag="p" path="education_school" />}
          content={<Image src={schoolImg} w="45rem" h="30rem" />}
        />
      </Card>
    </Section>
  );
};

export default AcademyCertificates;
