import styles from './TranscriptionRightBar.module.scss';
import AudioControl from './Components/AudioControl'
import SentimentAnalysis from './Components/SentimentAnalysis'

function TranscriptionRightBar() {
  return (
    <div className={styles.TranscriptionRightBar}>
      <AudioControl />
      <SentimentAnalysis />
    </div>
  );
}

export default TranscriptionRightBar;