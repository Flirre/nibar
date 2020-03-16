import styles from './styles.jsx';
import run from 'uebersicht';

const containerStyle = {
  display: 'grid',
  gridAutoFlow: 'column',
  gridGap: '8px',
  alignItems: 'middle',
  justifyContent: 'middle',
  lineHeight: styles.lineHeight
};

const desktopStyle = {};

/* const defaultIcon = (
 *   <i
 *     className={'1.1em la la-circle'}
 *     style={{
 *       margin: '0 0.15em',
 *       color: focused ? styles.colors.fg : styles.colors.dim,
 *       fontSize: fontScale,
 *       lineHeight: styles.lineHeight
 *     }}
 *   />
 * ); */

const renderAppIcon = (appName, focused) => {
  let className = null;
  switch (appName) {
    case 'Aseprite':
      className = 'fas fa-paint-brush';
      break;
    case 'Bitwarden':
      className = 'fas fa-shield-alt';
      break;
    case 'Google Chrome':
      className = 'la la-chrome';
      break;
    case 'Firefox Developer Edition':
      className = 'la la-firefox';
      break;
    case 'Godot':
      className = 'fas fa-gamepad';
      break;
    case 'Emacs':
      className = 'la la-code';
      break;
    case 'Code':
      className = 'la la-code';
      break;
    case 'Mail':
      className = 'far fa-envelope';
      break;
    case 'Finder':
      className = 'far fa-folder';
      break;
    case 'Messages':
      className = 'far fa-comments';
      break;
    case 'Ferdi':
      className = 'fa fa-comments';
      break;
    case 'Calendar':
      className = 'la la-calendar';
      break;
    case 'kitty':
      className = 'la la-terminal';
      break;
    case 'Xcode':
      className = 'fab fa-xing';
      break;
    case 'Slack':
      className = 'fab fa-slack';
      break;
    case 'Spotify':
      className = 'la la-spotify';
      break;
    case 'Teams':
      className = 'fab fa-microsoft';
      break;
    case 'Preview':
      className = 'la la-file-text';
      break;
    case 'System Preferences':
      className = 'la la-cog';
      break;
    case 'None':
      className = 'la la-circle';
      break;
    default:
      className = 'la la-question-circle';
      break;
  }

  const fontScale = className.slice(0, 2) == 'fa' ? '1.5em' : '1.1em';
  return (
    <i
      className={className}
      style={{
        margin: '0 0.15em',
        color: focused ? styles.colors.fg : styles.colors.dim
      }}
    />
  );
};

const renderSpace = (index, focused, visible, windows, apps) => {
  let contentStyle = JSON.parse(JSON.stringify(desktopStyle));
  let hasWindows = windows.length > 0;
  if (focused == 1) {
    contentStyle.color = styles.colors.fg;
    contentStyle.fontWeight = '700';
  } else if (visible == 1) {
    contentStyle.color = styles.colors.fg;
  }
  let appIcons = apps.map(app => renderAppIcon(app.app, focused));
  return (
    <div style={contentStyle}>
      <span style={{ lineHeight: '24px' }}>
        {index}:[{appIcons}]
      </span>
    </div>
  );
};

const render = ({ output, apps }) => {
  if (typeof output === 'undefined') return null;
  const spaces = [];

  output.forEach(function(space) {
    const spaceApps = [].concat(apps).filter(app => app.space === space.index);

    spaces.push(
      renderSpace(
        space.index,
        space.focused,
        space.visible,
        space.windows,
        spaceApps
      )
    );
  });

  return <div style={containerStyle}>{spaces}</div>;
};

export default render;
