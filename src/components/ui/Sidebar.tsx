import { MdOutlineDocumentScanner, MdVideoSettings } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { IoLinkOutline } from "react-icons/io5";

interface sidebarprops {
  Headicon: any;
  Head: string;
}

export const Sidebar = (props: sidebarprops) => {
  return (
    <div className="h-screen fixed left-0 top-0 border-r-2 p-4">
          <div className="flex items-center mb-6 text-3xl ">
              <span className="text-purple-600 ">
                  
        {props.Headicon}
        </span>
        <h1 className="ml-2 text-2xl font-bold">{props.Head}</h1>
      </div>
      <div className="space-y-4">
        <Row icon={<CiTwitter />} title="Twitter" />
        <Row icon={<MdVideoSettings />} title="Videos" />
        <Row icon={<MdOutlineDocumentScanner />} title="Documents" />
        <Row icon={<IoLinkOutline />} title="Tags" />
      </div>
    </div>
  );
};

interface itemprops {
  icon: any;
  title: string;
  onClick:()=>void
}

function Row({ icon, title , onClick }: itemprops) {
  return (
    <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded cursor-pointer">
      {icon}
      <span>{title}</span>
    </div>
  );
}