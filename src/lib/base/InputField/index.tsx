import { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

import {
  CheckBox,
  Input,
  InputBox,
  Label,
  RadioBox,
  RangeInput,
  Row,
  Switch,
  TextArea,
} from './styled';

const InputField = (props: Props.InputField) => {
  const { type, label, placeholder, actived, value, IconLeft, IconRight, onChange } = props;
  const [visible, setVisible] = useState(false);

  if (type === 'text') {
    return (
      <Label>
        <b>{label}</b>
        <InputBox>
          {IconLeft}
          <Input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={ev => onChange && onChange(ev.target.value)}
          />
          {IconRight}
        </InputBox>
      </Label>
    );
  }

  if (type === 'number') {
    return (
      <Label>
        <b>{label}</b>
        <InputBox>
          {IconLeft}
          <Input
            type="number"
            placeholder={placeholder}
            value={value}
            onChange={ev => onChange && onChange(ev.target.value)}
          />
          {IconRight}
        </InputBox>
      </Label>
    );
  }

  if (type === 'password') {
    return (
      <Label>
        <b>{label}</b>
        <InputBox>
          {IconLeft}
          <Input
            type={visible ? 'text' : 'password'}
            placeholder={placeholder}
            value={value}
            onChange={ev => onChange && onChange(ev.target.value)}
          />
          <span onClick={() => setVisible(!visible)}>
            {visible ? <IoEyeOffOutline size={16} /> : <IoEyeOutline size={16} />}
          </span>
        </InputBox>
      </Label>
    );
  }

  if (type === 'textarea') {
    return (
      <Label>
        <b>{label}</b>
        <TextArea
          value={value}
          placeholder={placeholder}
          onChange={ev => onChange && onChange(ev.target.value)}
        />
      </Label>
    );
  }

  if (type === 'range') {
    return (
      <Label>
        <b>{label}</b>
        <h5>{value}%</h5>
        <RangeInput
          type="range"
          value={value}
          onChange={ev => onChange && onChange(ev.target.value)}
        />
      </Label>
    );
  }

  if (type === 'date') {
    return (
      <Label>
        <b>{label}</b>
        <InputBox>
          <Input
            type="date"
            value={value}
            onChange={ev => onChange && onChange(new Date(ev.target.value).toISOString())}
          />
        </InputBox>
      </Label>
    );
  }

  if (type === 'time') {
    return (
      <Label>
        <b>{label}</b>
        <InputBox>
          <Input type="time" value={value} onChange={ev => onChange && onChange(ev.target.value)} />
        </InputBox>
      </Label>
    );
  }

  if (type === 'switch') {
    return (
      <Label>
        <Row>
          <Switch active={!actived} onClick={() => onChange && onChange(value || label || '')} />
          <b>{label}</b>
        </Row>
      </Label>
    );
  }

  if (type === 'checkbox') {
    return (
      <Label onClick={() => onChange && onChange(value || label || '')}>
        <Row>
          <CheckBox active={actived}>
            {actived && (
              <svg stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
            )}
          </CheckBox>
          <b>{label}</b>
        </Row>
      </Label>
    );
  }

  if (type === 'radio') {
    return (
      <Label onClick={() => onChange && onChange(value || label || '')}>
        <Row>
          <RadioBox active={actived} />
          <b>{label}</b>
        </Row>
      </Label>
    );
  }
};

export default InputField;
