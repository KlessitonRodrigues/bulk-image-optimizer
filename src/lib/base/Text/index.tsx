import { getText } from 'src/utils/i18n';

const Text = (props: Props.Text) => {
  const { path, tag } = props;
  const text = getText(path);

  if (tag === 'b') return <b>{text}</b>;
  if (tag === 'p') return <p>{text}</p>;
  if (tag === 'h1') return <h1>{text}</h1>;
  if (tag === 'h2') return <h2>{text}</h2>;
  if (tag === 'h3') return <h3>{text}</h3>;
  if (tag === 'h4') return <h4>{text}</h4>;
  if (tag === 'h5') return <h5>{text}</h5>;
  if (tag === 'h6') return <h6>{text}</h6>;
  if (tag === 'span') return <span>{text}</span>;
  if (tag === 'small') return <small>{text}</small>;
  if (tag === 'strong') return <strong>{text}</strong>;
  if (tag === 'mark') return <mark>{text}</mark>;
  if (tag === 'em') return <em>{text}</em>;
  return <>{text}</>;
};

export default Text;
