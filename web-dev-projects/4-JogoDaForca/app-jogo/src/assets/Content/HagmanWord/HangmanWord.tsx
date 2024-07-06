type WordProps = {
    letterGuessed:string[],
    wordtoguess:string,
    incorrect:string[]
}
export default function HangmanWord ({letterGuessed,wordtoguess,incorrect}:WordProps){
    return(
        <>
        <div style={{
            display:"flex",
            alignSelf:"center",
            justifySelf:'center',
            gap:'16px',
            fontSize:'48px',
            fontWeight:'400',
            color: "darkblue",
            textTransform:'uppercase',
        }}>
            {wordtoguess.split("").map((letter,index) => (
                <span style={{
                    borderBottom:"4px solid darkblue"
                }} key={index}>
                    <span style={{
                        visibility:letterGuessed.includes(letter) ? "visible" : "hidden"
                    }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
        <div style={{
            display:"flex",
            minWidth:'25%',
            minHeight:"25%",
            alignSelf:"center",
            justifySelf:'center',
            gap:'.25rem',
            fontSize:'24px',
            fontWeight:'400',
            color: "darkblue",
            textTransform:'uppercase',
        }}>
            {incorrect.map((ieter,index)=>(
                <span style={{
                    borderBottom:"4px solid grey",
                    color:'grey',
                    visibility:'visible'
                }} key={index}>
                    {ieter}
                </span>
            ))}
        </div>
        </>
    )
}