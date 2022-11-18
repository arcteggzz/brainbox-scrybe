import './TranscribePage.scss';
import SideBar from './SideBar/Sidebar';
import Transcribe from './Transcribe/Transcribe';

function TranscribePage() {
  return (
    <div className="TranscribePage">
        <SideBar />
        <Transcribe />
    </div>
  );
}

export default TranscribePage;