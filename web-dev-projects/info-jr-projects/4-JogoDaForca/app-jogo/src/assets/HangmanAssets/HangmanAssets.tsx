
function Head (){
   return( 
    <>
        <div style={{
            width:'63px',
            height:'63px',
            borderRadius:'100%',
            border:"5px solid darkblue",
            position:'absolute',
            top:'50px',
            right:'11px'
        }}/>
    </>
   )
}

function Body (){
    return( 
     <>
         <div style={{
             width:'5px',
             height:'135px',
             background:"darkblue",
             borderRadius:"5px",
             position:'absolute',
             top:'120px',
             right:"45.5px",
         }}/>
     </>
    )
 }
 function RightArm (){
    return( 
     <>
         <div style={{
             width:'72px',
             height:'5px',
             background:"darkblue",
             position:'absolute',
             top:'126px',
             right:"-22px",
             transformOrigin:"left bottom",
             rotate:'30deg',
         }}/>
     </>
    )
 }

 function LeftArm (){
    return( 
     <>
         <div style={{
             width:'72px',
             height:'5px',
             background:"darkblue",
             position:'absolute',
             top:'126px',
             right:"45px",
             transformOrigin:"right bottom",
             rotate:'-30deg',
         }}/>
     </>
    )
 }

 function RightLeg (){
    return( 
     <>
         <div style={{
             width:'72px',
             height:'5px',
             background:"darkblue",
             position:'absolute',
             top:'248px',
             right:"47px",
             transformOrigin:"right bottom",
             rotate:'-60deg',
         }}/>
     </>
    )
 }

 function LeftLeg (){
    return( 
     <>
         <div style={{
             width:'72px',
             height:'5px',
             background:"darkblue",
             position:'absolute',
             top:'248px',
             right:"-22px",
             transformOrigin:"left bottom",
             rotate:'60deg',
         }}/>
     </>
    )
 }



export { Head }
export { Body }
export { RightArm }
export { LeftArm }
export { RightLeg }
export { LeftLeg }
