import { v4 as uuidv4 } from 'uuid';

import {useState, FormEventHandler, ChangeEventHandler} from 'react';
import style from './Corpo.module.css';
import { Content } from './content';
import { ListBullets } from 'phosphor-react';


type Dados = {
    nome:string;
    cidade: string;
    id: number;
}

export function Corpo(){

   

    const [listNome, setListNome] = useState([]);

    const [nomeDigitado, setNomeDigitado] = useState('')
    const [cidadeDigitado, setCidadeDigitado] = useState('')
    
    function vigiaNome(event){
        
        setNomeDigitado(event.target.value);
        
    }
    function vigiaCidade(event){
        
        setCidadeDigitado(event.target.value);
    }
    
    const novoNome = nomeDigitado
    const novaCidade = cidadeDigitado
    
    
    function AdicionarDados(event){
        event.preventDefault();
    
        const novoObjeto:Dados = {nome:novoNome, cidade:novaCidade, id:uuidv4()}
        
        setListNome([...listNome, novoObjeto])
        
        setNomeDigitado('')
        setCidadeDigitado('')
    }
    function deletar(id:number){
        const idDeletado = listNome.filter(item => item.id != id);
        setListNome(idDeletado)
        
        console.log(id)
    }
    
    function teste(){
        if (novoNome.length == 0 || novaCidade.length == 0 ) return true
    }

   

    return(
        <article className={style.corpo}>
            <form onSubmit={AdicionarDados}  >
                <div className={style.containerForm}>
                    <div className={style.formulario}>
                        <input 
                            type="text" 
                            placeholder='Nome:' 
                            name='vigiaNomes' 
                            onChange={vigiaNome}
                            value={nomeDigitado}
                            />

                    </div>
                    <div className={style.formulario}>
                        <input 
                            type="text" 
                            placeholder='Cidade:'
                            name='vigiaCidade' 
                            onChange={vigiaCidade}
                           value={cidadeDigitado}
                        />
                    </div>
                        <button type='submit' disabled={teste()} >Dicionar</button>
                </div>
            </form>

            {listNome.length == 0 ? (
                <div className={style.boxLength}>
                    <p>Lista vazia</p>
                    <ListBullets size={120} />
                   
                </div>
            ) : (

                listNome.map(item =>
                    <Content 
                    id={item.id}
                    nome={item.nome}
                    cidade={item.cidade}
                   key={item.id}
                   deletar={deletar}
                />
                )



            )

            }




            {/* {listNome.map(item => 


                <Content 
                    id={item.id}
                    nome={item.nome}
                    cidade={item.cidade}
                   key={item.id}
                   deletar={deletar}
                />
            )} */}



        </article>
    
    )
}
    

        
            
            
  
        
    
     
        
        

    
        
        
        


    
    
    
    
    

    
        
    
   


