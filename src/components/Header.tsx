

import style from './Header.module.css';








export function Header(){
    return (
        <header className={style.header}>
            <div className={style.logo}>
                Lista de Participante
            </div>
            <img src="https://avatars.githubusercontent.com/u/86444560?v=4" alt="" />

        </header>
    )
}