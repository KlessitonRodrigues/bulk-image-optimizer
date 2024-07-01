import { useMemo } from 'react';

import Icons from 'src/lib/base/Icons';
import If from 'src/lib/base/If';
import { Box, Card, Section } from 'src/lib/base/Styled/Containers';
import { Hr } from 'src/lib/base/Styled/Divisors';
import { Column, Grid, Row } from 'src/lib/base/Styled/Flex';
import { ProgressStep, ProgressStepBox } from 'src/lib/base/Styled/Progress';
import Text from 'src/lib/base/Text';
import { experienceMap } from 'src/utils/constants/experienceMap';
import { yearsFrom } from 'src/utils/dates';

export const Experience = () => {
  const ExperienceItems = useMemo(() => {
    return experienceMap.map(exp => {
      const years = yearsFrom(exp.year);
      const yearsArr = new Array(years).fill(0);
      return (
        <Box key={exp.name}>
          <Row>
            <Row left>
              <Icons size={8} type={exp.icon} />
              <h6>{exp.name}</h6>
            </Row>
            <Row right>
              <small>{exp.type}</small>
            </Row>
          </Row>
          <Column left>
            <small>
              {years}
              &nbsp;
              <If
                check={years > 1}
                true={<Text path="profile_years" />}
                false={<Text path="profile_year" />}
              />
            </small>
            <ProgressStepBox>
              {yearsArr.map((item, i) => (
                <ProgressStep key={item + i} />
              ))}
            </ProgressStepBox>
          </Column>
        </Box>
      );
    });
  }, []);

  return (
    <Section>
      <Card>
        <Text tag="h3" path="experience_title" />
        <Hr />
        <Grid cols={2} responsive gap={4}>
          {ExperienceItems}
        </Grid>
      </Card>
    </Section>
  );
};
