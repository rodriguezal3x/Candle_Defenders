import React, {Component} from 'react';

class Micomponente extends Component{

    render(){
        let receta ={
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon cocido'],
            calorias: 400            
        };

        return (
            <div className="mi-componente" >
                <h1>{'Receta: ' + receta.nombre}</h1>
                <h2>{"Calorias: " + receta.calorias}</h2>
                <ol>
                    {
                        receta.ingredientes.map((ingredientes, i) =>{
                            console.log(ingredientes);
                            return (
                                <li key={i}>
                                    {ingredientes}
                                </li>
                            );
                        })
                    }
                </ol>
                <hr/>
            </div>
            // <frameElement>
            //     <h1>Hola soy mi Componente llamado: Micomponente </h1>
            //     <h2>Estoy Probando</h2>
            // </frameElement>
            

        );
    }

}

export default Micomponente;