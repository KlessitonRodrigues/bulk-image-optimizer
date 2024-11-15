declare namespace Props {
  type CssProps = {
    active?: boolean;
    size?: number;
    gap?: number;
    w?: string;
    h?: string;
    maxw?: string;
    maxh?: string;
    p?: string;
    m?: string;
    mb?: string;
    mt?: string;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    wrap?: boolean;
    rows?: number;
    cols?: number;
    responsive?: boolean;
    reverse?: boolean;
    half?: boolean;
    src?: string;
  };

  type Icons = {
    size?: number;
    onPress?: () => void;
    style?: React.CSSProperties;
    type: Utils.IconTypes;
  };

  type Text = {
    path: string;
    tag?: Utils.TextTags;
  };

  type Loading = {
    show: boolean;
    type: 'fullScreen' | 'icon';
    title?: string;
    description?: string;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactNode;
  };

  type Accordion = {
    title: React.ReactElement;
    content: React.ReactElement;
    delayLoad?: boolean;
  };

  type Checkbox = {
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
  };

  type ImageView = {
    image: Utils.ImageData;
  };

  type FileUploadModal = {
    show: boolean;
    onClose: () => void;
  };

  type InputField = {
    type:
      | 'text'
      | 'password'
      | 'radio'
      | 'password'
      | 'checkbox'
      | 'number'
      | 'switch'
      | 'textarea'
      | 'range'
      | 'date'
      | 'time'
      | 'color';
    label?: string;
    placeholder?: string;
    value?: string;
    actived?: boolean;
    IconLeft?: React.ReactNode | 'string';
    IconRight?: React.ReactNode | 'string';
    onChange?: (value: string) => void;
  };

  type Button = {
    type: 'default' | 'main' | 'outline' | 'danger' | 'icon';
    label?: string;
    disabled?: boolean;
    IconLeft?: React.ReactNode;
    IconRight?: React.ReactNode;
    onClick?: () => void;
    children?: React.ReactNode;
  };

  type Form<T> = {
    onSubmit?: (form: T) => void;
  };

  type FileDropZone = {
    fileList: File[];
    onChange?: (value: File[]) => void;
    onRemove?: (file: File) => void;
  };
}
