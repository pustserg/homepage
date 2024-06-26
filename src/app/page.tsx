import Sidebar from './partials/_sidebar';
import MainContent from './partials/_main_content';

export default function Home() {
  return (
    <div className="grid grid-cols-4 gap-3 w-full">
      <div className="px-24">
        <Sidebar />
      </div>
      <div className="col-span-3 px-24">
        <MainContent />
      </div>
    </div>
  );
}
