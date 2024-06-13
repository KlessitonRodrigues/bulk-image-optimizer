import Checkbox from 'src/lib/base/Checkbox';
import Icons from 'src/lib/base/Icons';
import { Row } from 'src/lib/styled/Flex';
import { FormLarge } from 'src/lib/styled/Forms';
import { Input, InputLabel, Label, RangeInput } from 'src/lib/styled/Inputs';

const ImageSettingsForm = () => {
  return (
    <FormLarge>
      <Row responsive gap={6}>
        <Label>
          <b>Image quality</b>
          <Row>
            <small>0%</small>
            <RangeInput type="range" value={50} />
            <small>100%</small>
          </Row>
        </Label>

        <Label>
          <b>Resolution</b>
          <Row left>
            <InputLabel>
              <Input type="number" value="1920" />
            </InputLabel>
            <Icons type="close" size={5} />
            <InputLabel>
              <Input type="number" value="1080" />
            </InputLabel>
            <Checkbox label="Keep Ration" checked />
          </Row>
        </Label>
      </Row>
    </FormLarge>
  );
};

export default ImageSettingsForm;
