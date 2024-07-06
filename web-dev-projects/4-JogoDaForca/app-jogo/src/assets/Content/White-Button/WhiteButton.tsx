import './WhiteButton.css'
type whiteprops = {
    trackGame?:boolean,
    clickInput: () => void
}
export default function WhiteButton ({clickInput,trackGame}:whiteprops) {
    return(
        <button className='whit-button' onClick={clickInput}>
            {(trackGame == false) && "Carregar uma palavra"}
            {(trackGame == true) && "Desistir"}
        </button>
    )
}