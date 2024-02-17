import React, {useState} from "react";
import Card from './Card.jsx';
import Barras_3 from '../../assets/3_barras.png';
import Square_3 from '../../assets/3quadrados.png';
import Art from '../../assets/barras-artesanais.png';
import Pilha from '../../assets/pilha-barras.png';

export default function Main(){
    return(
        <>
        <Card photo={Barras_3} alt={"Imagem de 3 barras de chocolate, sendo uma amargo, uma ao leite e uma branco."} price={'R$ 25,00'}/>
        </>
    )
}