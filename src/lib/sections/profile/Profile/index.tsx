import Icons from 'src/lib/base/Icons';
import Text from 'src/lib/base/Text';
import { OutlineBtn } from 'src/lib/styled/Buttons';
import { Section } from 'src/lib/styled/Containers';
import { Row } from 'src/lib/styled/Flex';
import { Outdoor, OutdoorContent, OutdoorImage } from 'src/lib/styled/Images';
import { AvatarBig } from 'src/lib/styled/User';
import desktopBg from 'src/public/images/desktop.min.jpg';
import profile from 'src/public/images/profile_min.jpg';
import { isMobileScreen } from 'src/styles/utils';
import { urls } from 'src/utils/constants/urls';

export const Profile = () => {
  const isMobile = isMobileScreen();

  return (
    <Section>
      <Outdoor>
        <OutdoorImage src={desktopBg} />
        <OutdoorContent>
          <AvatarBig src={profile} />
          <b>
            <Text tag="h2" path="header_name" />
          </b>
          <Text tag="h3" path="header_work" />
          <Text tag="p" path="cv_resume" />
          <Row left responsive gap={8}>
            <a href={urls.personalPage} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="website" />
                <Text tag="p" path="header_page_text" />
              </OutlineBtn>
            </a>
            <a href={urls.linkedin} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="linkedin" />
                <p>LinkedIn</p>
              </OutlineBtn>
            </a>
            <a href={urls.githubProfile} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="github" />
                <p>Github</p>
              </OutlineBtn>
            </a>

            <a href={isMobile ? urls.whatsapp : urls.whatsappWeb} target="_blank">
              <OutlineBtn>
                <Icons size={8} type="whatsapp" />
                <p>WhatsApp</p>
              </OutlineBtn>
            </a>
          </Row>
        </OutdoorContent>
      </Outdoor>
    </Section>
  );
};
