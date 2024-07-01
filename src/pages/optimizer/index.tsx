import { useMemo, useState } from 'react';

import useImages from 'src/hooks/useImages';
import Button from 'src/lib/base/Buttons';
import Icons from 'src/lib/base/Icons';
import { Card, Section } from 'src/lib/base/Styled/Containers';
import { Hr } from 'src/lib/base/Styled/Divisors';
import ImageView from 'src/lib/components/ImageView';
import Page from 'src/lib/components/Page';
import ImageSettingsForm from 'src/lib/forms/ImageSettings';
import FileUpdaloadModal from 'src/lib/modals/FileUpload';

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
            <h3>Settings</h3>
            <Hr />
          </div>
          <ImageSettingsForm />
          <Button
            type="main"
            label="Upload Images"
            onClick={() => setUploadModal(!uploadModal)}
            IconLeft={<Icons size={6} type="image" />}
          />
        </Card>
      </Section>
      <FileUpdaloadModal show={uploadModal} onClose={() => setUploadModal(!uploadModal)} />
      {ImageList}
    </Page>
  );
};

export default OptimizerPage;
