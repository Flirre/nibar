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
  left: '0px',
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
  const spaces = data.spaces_secondary.spaces;
  const apps = data.spaces_secondary.apps;

  if (typeof data === 'undefined') {
    return <div style={style}></div>;
  }
  if (typeof data.error !== 'undefined') {
    return <div></div>;
  }
  return (
    <div style={style}>
      <Desktop output={spaces} apps={apps} />
    </div>
  );
};

export default null;
