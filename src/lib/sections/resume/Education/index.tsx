import { Card, Section } from 'src/lib/base/Styled/Containers';
import { Hr } from 'src/lib/base/Styled/Divisors';
import { Column, Row } from 'src/lib/base/Styled/Flex';
import { List, ListItem } from 'src/lib/base/Styled/List';
import Text from 'src/lib/base/Text';

const ProfileEducation = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Text tag="h4" path="education_title" />
          <Hr />
        </Column>

        <Column left gap={0}>
          <Row left responsive>
            <Text tag="h6" path="education_udemy_title" />
            <Text tag="small" path="education_udemy_date" />
          </Row>
          <List>
            <ListItem>
              <Text tag="p" path="education_udemy_course_1" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_2" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_3" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_4" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_5" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_6" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_7" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_8" />
            </ListItem>
            <ListItem>
              <Text tag="p" path="education_udemy_course_9" />
            </ListItem>
          </List>
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="education_ifpi_title" />
            <Text tag="small" path="education_ifpi_date" />
          </Row>
          <Text tag="p" path="education_ifpi" />
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="education_school_title" />
            <Text tag="small" path="education_school_date" />
          </Row>
          <Text tag="p" path="education_school" />
        </Column>
      </Card>
    </Section>
  );
};

export default ProfileEducation;
