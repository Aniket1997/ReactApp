import React,{useState} from "react";

const ToggleVisibility = ()=>{
    const [isVisible,setIsVisisble] = useState(false);
    return (
        <>
          <input
            value={isVisible}
            type="checkbox"
            onChange={(e)=>{
                setIsVisisble(e.target.checked)
            }}
          />
          {
            isVisible && (
                <h1>I am visible</h1>
            )
          }
        </>
    )
}

export default ToggleVisibility;