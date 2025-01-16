import { useState } from "react";
import { Plusicon } from "../components/icons/Plusicon";
import { Shareicon } from "../components/icons/Shareicon";
import { AddContent } from "../components/ui/AddContent";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Sidebar } from "../components/ui/Sidebar";
import { LuBrain } from "react-icons/lu";
import { useContent } from "../hooks/useContent";
import Delete from "../components/icons/Deleteicon";

export const Dashboard = () => {
  const [modelOpen, setmodelOpen] = useState(false);
  const content = useContent();
  return (
    <>
      <div className="flex">
        <Sidebar Headicon={<LuBrain />} Head="Brainly" />
        <div className="flex-1 ml-64 p-4">
          <AddContent open={modelOpen} onClose={() => setmodelOpen(!modelOpen)} />
          <div className="flex justify-end mb-4">
            <Button
              onClick={() => setmodelOpen(!modelOpen)}
              variant="secondary"
              starticon={<Plusicon size="md" />}
              text="Add Content"
              size="sm"
            />
            <Button
              variant="primary"
              starticon={<Shareicon size="md" />}
              text="Share Brain"
              size="sm"
              onClick={() => {
              navigator.clipboard.writeText(window.location.href).then(() => {
                alert("Brain link copied to clipboard!");
              }).catch(err => {
                console.error("Failed to copy: ", err);
              });
              }}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content && content.map(({ _id, title, link, type }) => (
              <div key={_id}>
                <Card
                  deleteicon={Delete}
                  title={title}
                  shareIcon={<Shareicon size="md" />}
                  link={link}
                  type={type}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
