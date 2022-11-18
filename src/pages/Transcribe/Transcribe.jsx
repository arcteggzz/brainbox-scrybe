import styles from './Transcribe.module.scss';
import TranscriptionHeader from './Components/TranscriptionHeader/TranscriptionHeader';

function Transcribe() {
  return (
    <div className={styles.Transcribe}>
      <TranscriptionHeader />
    </div>
  );
}

export default Transcribe;