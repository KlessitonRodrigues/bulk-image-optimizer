import { useMemo, useState } from 'react';

import useImages from 'src/hooks/useImages';
import Button from 'src/lib/base/Buttons';
import Icons from 'src/lib/base/Icons';
import InputField from 'src/lib/base/InputField';
import { Card, Section } from 'src/lib/base/Styled/Containers';
import { Hr } from 'src/lib/base/Styled/Divisors';
import ImageView from 'src/lib/components/ImageView';
import Page from 'src/lib/components/Page';
import ImageSettingsForm from 'src/lib/forms/ImageSettings';
import FileUpdaloadModal from 'src/lib/modals/FileUpload';
import { toDateInput, toTimeInput } from 'src/utils/dates';

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
          <InputField
            type="date"
            label="Date"
            value={toDateInput(new Date())}
            onChange={console.log}
          />
          <InputField
            type="time"
            label="Time"
            value={toTimeInput(new Date())}
            onChange={console.log}
          />
          <InputField type="range" label="Range" value="20" />
          <InputField type="password" label="Password" placeholder="Digite uma Senha" />
          <InputField type="number" label="Number" placeholder="Digite uma Número" />
          <InputField type="radio" label="Radio" />
          <InputField type="checkbox" label="Checkbox" />
          <InputField type="switch" label="Switch" />
          <InputField type="text" label="Text" placeholder="Digite um nome" />
          <InputField type="textarea" label="TextArea" placeholder="Digite um texto" />
          <InputField
            type="color"
            label="Color"
            placeholder="Digite um texto"
            onChange={v => console.log(v)}
          />
        </Card>
      </Section>
      <FileUpdaloadModal show={uploadModal} onClose={() => setUploadModal(!uploadModal)} />
      {ImageList}
    </Page>
  );
};

export default OptimizerPage;
