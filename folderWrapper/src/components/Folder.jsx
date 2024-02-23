import React, { useState } from "react";
import explorer from "../data/FolderData";
import { space } from "postcss/lib/list";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
        </div>
        <div className={`${expand?"hidden":"block"}`}>
          <div className={`flex flex-col ps-4 gap-2`}>
            {explorer.items.map((exp) => (
           <Folder explorer={exp} key={exp.id}/>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>🗃️{explorer.name}</span>
      </div>
    );
  }
};

export default Folder;
