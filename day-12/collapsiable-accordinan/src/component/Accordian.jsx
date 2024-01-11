import React,{memo} from 'react';

const Accordian = memo(({id,title,handleAccordianShow,text,handleAccordianHide,isAccordianOpen}) => {
    return (
      <div style={{border:"1px solid red",background:"#d5c7c9"}}>
          <h2>{title}</h2>
          {isAccordianOpen?<button onClick={()=>handleAccordianHide(id)}>Show</button>:<button onClick={()=>handleAccordianShow(id)}>Hide</button>}
          {isAccordianOpen && <p>{text}</p>}
        
      </div>
    );
  })

export default Accordian;
