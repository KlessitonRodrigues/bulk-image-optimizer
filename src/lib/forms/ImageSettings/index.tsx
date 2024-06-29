import { useState } from 'react';

import Icons from 'src/lib/base/Icons';
import InputField from 'src/lib/base/InputField';
import { Space } from 'src/lib/styled/Containers';
import { Row } from 'src/lib/styled/Flex';
import { FormLarge } from 'src/lib/styled/Forms';

const initiatState = {
  quality: '60',
  width: '60',
  height: '60',
  keepRatio: false,
};

const ImageSettingsForm = (props: Props.Form<typeof initiatState>) => {
  const { onSubmit } = props;
  const [form, setForm] = useState(initiatState);

  const beforeSubmit = (ev: any) => {
    ev.preventDefault();
    console.log(form);
    onSubmit && onSubmit(form);
  };

  return (
    <FormLarge onSubmit={beforeSubmit}>
      <Row responsive gap={6}>
        <InputField
          type="range"
          label="Image Quality"
          value={form.quality}
          onChange={quality => setForm({ ...form, quality })}
        />
        <Row>
          <InputField
            type="number"
            label="Largura"
            value={form.width}
            onChange={width => setForm({ ...form, width })}
          />
          <Space mt="1.3rem">
            <Icons type="close" size={6} />
          </Space>
          <InputField
            type="number"
            label="Altura"
            value={form.height}
            onChange={height => setForm({ ...form, height })}
          />
          <Space mt="1rem">
            <InputField
              type="checkbox"
              label="Keep Ration"
              actived={form.keepRatio}
              onChange={_ => setForm({ ...form, keepRatio: !form.keepRatio })}
            />
          </Space>
        </Row>
      </Row>
    </FormLarge>
  );
};

export default ImageSettingsForm;
