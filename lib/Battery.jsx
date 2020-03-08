import styles from './styles.jsx';

const render = ({ output }) => {
  let charging = output.charging;
  let percentage = output.percentage;
  let remaining = output.remaining;
  let battery = '';
  if (percentage < 76) {
    battery = '';
  }
  if (percentage < 51) {
    battery = '';
  }
  if (percentage < 26) {
    battery = '';
  }
  if (percentage < 10) {
    battery = '';
  }
  return (
    <div>
      <div
        style={
          percentage < 10 && charging == false
            ? { color: styles.colors.red }
            : null
        }
      >
        <span>
          <span style={{ fontFamily: 'FontAwesome' }}>
            {charging ? '􀋦' : battery}
          </span>{' '}
          {percentage}% ({remaining})
        </span>
      </div>
    </div>
  );
};

export default render;
