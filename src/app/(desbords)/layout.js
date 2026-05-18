import DesNav from "@/Component/DesNav";
import Sidebar from "@/Component/Sidebar";


export default function RootLayout({ children }) {
  return (
   

      <div>
  <div className="fixed top-0 left-0 w-full z-50">
   <DesNav></DesNav>
  </div>

  <div className="flex gap-4 pt-20">
    <Sidebar />
    {children}
  </div>
</div>
  );
}