import { DangerButton, DefaultButton, IconButton, MainButton, OutlineButton } from './styled';

const Button = (props: Props.Button) => {
  const { type, label, disabled, onClick, IconLeft, IconRight, children } = props;

  if (type === 'default') {
    return (
      <DefaultButton disabled={disabled} onClick={onClick}>
        {IconLeft}
        {label}
        {IconRight}
      </DefaultButton>
    );
  }

  if (type === 'main') {
    return (
      <MainButton disabled={disabled} onClick={onClick}>
        {IconLeft}
        {label}
        {IconRight}
      </MainButton>
    );
  }

  if (type === 'outline') {
    return (
      <OutlineButton disabled={disabled} onClick={onClick}>
        {IconLeft}
        {label}
        {IconRight}
      </OutlineButton>
    );
  }

  if (type === 'danger') {
    return (
      <DangerButton disabled={disabled} onClick={onClick}>
        {IconLeft}
        {label}
        {IconRight}
      </DangerButton>
    );
  }

  if (type === 'icon') {
    return (
      <IconButton disabled={disabled} onClick={onClick}>
        {children}
      </IconButton>
    );
  }
};

export default Button;
