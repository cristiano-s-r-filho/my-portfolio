import './BlueButton.css'
type bluprops = {
    trackInput?:boolean,
    clickgame: () => void
}
export default function BlueButton ({clickgame,trackInput}:bluprops){
    return(
        <button type='button' className='blu-button' onClick={() => clickgame()}>
            {(trackInput == false) && "Começar novo jogo"}
            {(trackInput == true) && "Salvar e Continuar"}

        </button>
    )
}