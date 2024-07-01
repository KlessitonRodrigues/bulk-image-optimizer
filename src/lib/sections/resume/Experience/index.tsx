import { Box, Card, Section } from 'src/lib/base/Styled/Containers';
import { Hr } from 'src/lib/base/Styled/Divisors';
import { Column, Grid, Row } from 'src/lib/base/Styled/Flex';
import Text from 'src/lib/base/Text';

const ProfileExperience = () => {
  return (
    <Section>
      <Card>
        <Column left>
          <Text tag="h4" path="experience_title" />
          <Hr />
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="experience_cef" />
            <Text tag="small" path="experience_cef_date" />
          </Row>
          <Text tag="p" path="experience_cef_text" />
          <Text tag="small" path="experience_cef_tech" />
        </Column>

        <Column left gap={2}>
          <Row left responsive>
            <Text tag="h6" path="experience_westpoint" />
            <Text tag="small" path="experience_westpoint_date" />
          </Row>
          <Text tag="p" path="experience_westpoint_text" />
          <Grid cols={2}>
            <Box>
              <Text tag="h6" path="experience_collums" />
              <Text tag="p" path="experience_collums_text" />
              <Text tag="small" path="experience_collums_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_broncos" />
              <Text tag="p" path="experience_broncos_text" />
              <Text tag="small" path="experience_broncos_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_talentId" />
              <Text tag="p" path="experience_talentId_text" />
              <Text tag="small" path="experience_talentId_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_vouchio" />
              <Text tag="p" path="experience_vouchio_text" />
              <Text tag="small" path="experience_vouchio_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_vintage" />
              <Text tag="p" path="experience_vintage_text" />
              <Text tag="small" path="experience_vintage_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_quarx" />
              <Text tag="p" path="experience_quarx_text" />
              <Text tag="small" path="experience_quarx_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_website" />
              <Text tag="p" path="experience_website_text" />
              <Text tag="small" path="experience_website_tech" />
            </Box>
            <Box>
              <Text tag="h6" path="experience_scrap" />
              <Text tag="p" path="experience_scrap_text" />
              <Text tag="small" path="experience_scrap_tech" />
            </Box>
          </Grid>
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="experience_centralacademy" />
            <Text tag="small" path="experience_centralacademy_date" />
          </Row>
          <Text tag="p" path="experience_centralacademy_text" />
          <Text tag="small" path="experience_centralacademy_tech" />
        </Column>

        <Column left>
          <Row left responsive>
            <Text tag="h6" path="experience_socialpower" />
            <Text tag="small" path="experience_socialpower_date" />
          </Row>
          <Text tag="p" path="experience_socialpower_text" />
          <Text tag="small" path="experience_socialpower_tech" />
        </Column>
      </Card>
    </Section>
  );
};

export default ProfileExperience;
