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
  if (appName == 'Google Chrome') {
    className = 'la la-chrome';
  } else if (appName == 'Firefox Developer Edition') {
    className = 'la la-firefox';
  } else if (appName == 'Emacs' || appName == 'Code') {
    className = 'la la-code';
  } else if (appName == 'Mail') {
    className = 'far fa-envelope';
  } else if (appName == 'Todoist') {
    className = 'la la-list';
  } else if (appName == 'Finder') {
    className = 'far fa-folder';
  } else if (appName == 'Messages') {
    className = 'far fa-comments';
  } else if (appName == 'Ferdi') {
    className = 'fa fa-comments';
  } else if (appName == 'Calendar') {
    className = 'la la-calendar';
  } else if (appName == 'kitty') {
    className = 'la la-terminal';
  } else if (appName == 'Xcode') {
    className = 'fab fa-xing';
  } else if (appName == 'Spotify') {
    className = 'la la-spotify';
  } else if (appName == 'Preview') {
    className = 'la la-file-text';
  } else if (appName == 'None') {
    className = 'la la-circle';
  } else if (appName == 'System Preferences') {
    className = 'la la-cog';
  } else {
    console.log(appName);
    className = 'la la-question-circle';
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
