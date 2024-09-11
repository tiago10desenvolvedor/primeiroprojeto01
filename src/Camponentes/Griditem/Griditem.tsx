import React from "react";
import { level } from "../../Helpers/imc"; // Certifique-se de que o tipo 'level' está corretamente exportado
import styles from './Griditem.module.css'; // Corrigido para .module.css
import upImagem from '../../assets/up.png'; // Caminho atualizado
import downImagem from'../../assets/down.png'; // Caminho atualizado


type Props ={
item:level 
};

export const Griditem = ({item}: Props) => {   
return(
     <div className={styles.main} style={{backgroundColor:item.color  }}>
    <div className={styles.gridIcon}>
    
    <img src={item.icon==='up' ? upImagem : downImagem} alt="" width='30'></img>

        
    </div> 
    <div className={styles.gridtitle}>{item.title}</div>
    {item.yourimc &&
    <div className={styles.yourimc}>Seu IMC é de {item.yourimc} kg/m</div>}
    <div className={styles.gridinfo}>

        <>
        IMC está entre <strong> {item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
        </>
    </div>

    </div>
)
}