import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import useDialog from "./hooks/useDialog";

type cadastro = {
  nome: string;
  paes: string;
};

interface cadastrado {
  atualizar: () => void;
}

export const Modal: React.FC<cadastrado> = ({ atualizar }) => {
  const {isOpen, onClose, onOpen} = useDialog()
  const [nome, setNome] = useState<string>("");//estados para salvar os valores dos inputs
  const [pao, setPaes] = useState<string>("");
  const [loading, setLoading] = useState<boolean>()
  const [error, setError] = useState<boolean>(true)

  const data = { nome, pao };

  const handlePost = async () => {
    setLoading(true)
    try {
       const req = await axios.post(
        `http://localhost:7001/post_customer`,//aqui vai a url da nossa API
        data
      ); 
      atualizar();
      onClose()
    } catch (error) {
      setError(false)
    } finally{
      setLoading(false)
      setTimeout(() =>{
        setError(true)
      },5000)
    }
  };
  

  return (
    <Dialog  open={isOpen} modal defaultOpen={isOpen}>
     
      <DialogTrigger asChild >
        <Button className="flex justify-start text-text-primary font-bold w-full mb-2 text-base" onClick={onOpen}>
          + Adicionar pessoa a fila
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
      <AlertDestructive translate={error}/>
        <DialogHeader>
          <div className="flex justify-start text-text-primary font-bold w-full mb-2 text-base">
            Adicionar pessoa a fila
          </div>
        </DialogHeader>
        <div className="flex flex-col py-4 gap-4 mb-10 justify-center items-center">
          <input
            type="text"
            name="client"
            placeholder="nome completo do cliente"
            className={`bg-bg-input px-6 py-4 w-full ${loading == true? "hidden" : "flex"}`}
            onChange={(e) => setNome(e.target.value)}
            value={nome}
          />
          <div className={
             `w-10 h-10 rounded-full border-8 border-text-primary p-4 border-b-bg-cardClient transition
             animate-spin ${loading == true? "flex" : "hidden"}`
             }>

          </div>
          <input
            type="text"
            name="client"
            placeholder="Total de pães"
            className={`bg-bg-input px-6 py-4 w-full ${loading == true? "hidden" : "flex"}`}
            onChange={(e) => setPaes(e.target.value)}
            value={pao}
          />
        </div>
        <DialogFooter className="w-full flex justify-between gap-5">
           <Button type="button" className="flex-1 py-6 bg-bg-card2 border text-bg-cardClient w-auto hover:bg-bg-card hover:text-bg-card2 border-bg-card2" onClick={() => handlePost()}>
            Save changes
          </Button>
          <Button type="button" className="flex-1 py-6 border border-cancel text-cancel hover:bg-cancel hover:text-bg-card transition" onClick={onClose}>Cancelar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

function AlertDestructive({translate}:{translate:any}) {
  return (
    <Alert variant="destructive" className={`bg-cancel border-0 transition absolute z-[999999px] max-w-full right-0
    ${translate == true ? "top-[1000px]": "translate-y-[-120px]"}`}>
      <AlertTitle className="text-bg-card">Error</AlertTitle>
      <AlertDescription className="text-bg-card">
        Verifique se os dados estão conforme pedidos!
      </AlertDescription>
    </Alert>
  )
}

export default Modal;
