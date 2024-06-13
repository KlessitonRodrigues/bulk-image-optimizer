import { useMemo, useState } from 'react';

import useImages from 'src/hooks/useImages';
import Icons from 'src/lib/base/Icons';
import ImageView from 'src/lib/components/ImageView';
import Page from 'src/lib/components/Page';
import ImageSettingsForm from 'src/lib/forms/ImageSettings';
import FileUpdaloadModal from 'src/lib/modals/FileUpload';
import { MainRoundedBtn } from 'src/lib/styled/Buttons';
import { Card, Section } from 'src/lib/styled/Containers';
import { Hr } from 'src/lib/styled/Divisors';
import { Row } from 'src/lib/styled/Flex';

const OptimizerPage = () => {
  const { images } = useImages();
  const [uploadModal, setUploadModal] = useState(false);

  const ImageList = useMemo(() => {
    return images.map(image => (
      <Section>
        <ImageView image={image} />
      </Section>
    ));
  }, [images]);

  return (
    <Page>
      <Section>
        <Card>
          <div>
            <h4>Settings</h4>
            <Hr />
          </div>

          <ImageSettingsForm />

          <Row left>
            <MainRoundedBtn onClick={() => setUploadModal(!uploadModal)}>
              <Icons size={6} type="image" />
              Upload Images
            </MainRoundedBtn>
          </Row>
        </Card>
      </Section>
      <FileUpdaloadModal show={uploadModal} onClose={() => setUploadModal(!uploadModal)} />

      {ImageList}
    </Page>
  );
};

export default OptimizerPage;
