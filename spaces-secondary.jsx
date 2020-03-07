import Desktop from './lib/Desktop.jsx';
import Error from './lib/Error.jsx';
import parse from './lib/parse.jsx';
import styles from './lib/styles.jsx';

const style = {
  padding: '0 8px',
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '16px',
  position: 'fixed',
  overflow: 'hidden',
  left: '218px',
  top: '0px',
  fontFamily: styles.fontFamily,
  lineHeight: styles.lineHeight,
  fontSize: styles.fontSize,
  color: styles.colors.dim,
  fontWeight: styles.fontWeight
};

export const refreshFrequency = 1000 * 60;
export const command = './nibar/scripts/spaces_secondary.sh';

export const render = ({ output }) => {
  const data = parse(output);
  console.log('secondary', typeof data === 'undefined');
  const spaces = data ? data.spaces_secondary.spaces : [];
  const apps = data ? data.spaces_secondary.apps[1] : [];

  if (typeof data === 'undefined') {
    return <div style={style}></div>;
  }
  if (typeof data.error !== 'undefined') {
    return <div></div>;
  }
  return (
    <div style={style}>
      <span> | </span>
      <Desktop output={data.spaces_secondary} apps={apps} />
    </div>
  );
};

export default null;
