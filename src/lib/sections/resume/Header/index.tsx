import Text from 'src/lib/base/Text';
import { Card, Section } from 'src/lib/styled/Containers';
import { Hr } from 'src/lib/styled/Divisors';
import { Column, Row } from 'src/lib/styled/Flex';
import { urls } from 'src/utils/constants/urls';

const ProfileHeader = () => {
  return (
    <Section>
      <Card>
        <Row top gap={8} responsive>
          <Column left>
            <b>
              <Text tag="h1" path="header_name" />
            </b>
            <Text tag="h3" path="header_work" />
            <Row top responsive>
              <Column left gap={2}>
                <label>
                  <Text tag="b" path="header_city" />
                  <Text tag="h6" path="header_city_name" />
                </label>
                <label>
                  <Text tag="b" path="header_address" />
                  <Text tag="h6" path="header_address_name" />
                </label>
                <label>
                  <Text tag="b" path="header_phone" />
                  <Text tag="h6" path="header_phone_number" />
                </label>
              </Column>
              <Column left gap={2}>
                <label>
                  <b>Email</b>
                  <h6>
                    <a href={urls.krdsEmail} target="blank">
                      klessitonrds@gmail.com
                    </a>
                  </h6>
                </label>
                <label>
                  <b>LinkedIn</b>
                  <h6>
                    <a href={urls.linkedin} target="blank">
                      Klessitonrds
                    </a>
                  </h6>
                </label>
              </Column>
              <Column left>
                <label>
                  <b>Github</b>
                  <h6>
                    <a href={urls.github} target="blank">
                      KlessitonRodrigues
                    </a>
                  </h6>
                </label>
                <label>
                  <Text tag="b" path="header_page" />
                  <a href={urls.personalPage} target="blank">
                    <Text tag="h6" path="header_page_text" />
                  </a>
                </label>
              </Column>
            </Row>
          </Column>
        </Row>
        <Column left>
          <Text tag="h4" path="cv_resume_title" />
          <Hr />
          <Text tag="p" path="cv_resume" />
        </Column>
      </Card>
    </Section>
  );
};

export default ProfileHeader;
