import { Trash } from 'phosphor-react';


import style from './Content.module.css';


export function Content(props:any){

    function onClickDeleteID(){
        props.deletar(props.id)
        console.log(props.id)    
    }


    return(
        
            <div className={style.listanome} key={props.id}>
                <p><strong>Nome: </strong>{props.nome}</p>
                <p><strong>Cidade: </strong>{props.cidade}</p>
                <button onClick={onClickDeleteID}>
                <Trash size={23}/>
                </button>
            </div>


    
    )
}