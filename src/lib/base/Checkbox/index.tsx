import { IoCheckmarkOutline } from 'react-icons/io5';

import { CheckBoxContainer, CheckBoxMark } from './styled';

const Checkbox = (props: Props.Checkbox) => {
  const { label, checked, onChange } = props;
  return (
    <CheckBoxContainer active={checked} onClick={() => onChange && onChange(!checked)}>
      <CheckBoxMark>{checked && <IoCheckmarkOutline size={15} />}</CheckBoxMark>
      <strong>{label}</strong>
    </CheckBoxContainer>
  );
};

export default Checkbox;
