import {Plusicon} from "./components/icons/Plusicon"
import { Shareicon } from "./components/icons/Shareicon"
import { Button } from "./components/ui/Button"

export function App() {

  return (
    <>
      <div className="flex">
        <Button variant="secondary" starticon={<Plusicon size="md"/>
        } text="Add Content" size="sm" onClick={() => { }} />
        <Button variant="primary" starticon={<Shareicon size="md"/>
        } text="Share" size="sm" onClick={() => { }} />
      </div>
    </>
  )
}

export default App
