import React, { Component } from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';

class film extends Component{
constructor(props){
    super(props)
    this.state={title: 'TITLE',
    language: 'LANGUAGE',
    description: '',
    health: 0,
    category: '',
    attack: 0,
    actorname: '',
    defense: 0,
    filmLength: '',
    agility: 0,
    filmReleaseYear: '',
    vitality: 0,
    rating: ''
}

}
callApi(id){

    id = this.getRandomInt()
    fetch(`http://localhost:8080/Home/getFilm/${id}`, { method: 'GET' })
    .then(data => data.json())
    .then(json => {
        this.setState({title: json.filmTitle})
        this.setState({description: json.filmDescription})        
        this.setState({agility: json.filmDescription.length})

        this.setState({language: json.language.languageName})

        this.setState({rating: json.filmRating})    
        this.setState({vitality: json.filmRating.length * 20})

        let categories = ""
        json.category.forEach(category => {
            categories += `${category.categoryName} `
        });
        this.setState({category: categories});    
        this.setState({health: categories.length * 20})

        let actorsList = ""
        json.actors.forEach(actors => {
            actorsList += `${actors.firstName} ${actors.lastName} - `
        });
        this.setState({actorname: actorsList});  
        if(actorsList !=0)
        {
            this.setState({attack: actorsList.length})
        }
        else{
            this.setState({attack: 125})
        }

        this.setState({filmlength: json.filmLength})         
        this.setState({defense: json.filmLength})

        this.setState({filmreleaseyear: json.filmReleaseYear})    
    })
}

getRandomInt(max) {
    return Math.floor(Math.random() * 1000);
  }

  render()
  {
return (
        <div>            
            <div>
                <div>                    
                    <button onClick={() => this.callApi()}>Get Film Data</button>
                    {/* <button onClick={function(event){flipTable()}}>Get Film Data</button> */}
                    <h1>{this.state.title}</h1>
                </div>
                <h2>{this.state.language}</h2>
                <div id="infoTable">
                <table>
                    <tr>
                        <td>Health</td>
                        <td><progress id="healthBar" value={this.state.health} max="250"></progress> {this.state.health}</td>
                    </tr>
                    <tr>
                        <td>Attack</td>
                        <td><progress id="attackBar" value={this.state.attack} max="250"></progress> {this.state.attack}</td>
                    </tr>
                    <tr>
                        <td>Defense</td>
                        <td><progress id="defenseBar" value={this.state.defense} max="200"></progress> {this.state.defense}</td>
                    </tr>
                    <tr>
                        <td>Agility</td>
                        <td><progress id="agilityBar" value={this.state.agility} max="150"></progress> {this.state.agility}</td>
                    </tr>
                    <tr>
                        <td>Vitality</td>
                        <td><progress id="vitalityBar" value={this.state.vitality} max="100"></progress> {this.state.vitality}</td>
                    </tr>
                    </table>
                </div>               
            </div>
        </div>
    );
}
}

class battle extends Component{
    constructor(props){
        super(props)
        this.state={
         film1:[new film()],
         film2:[new film()],
        }
    }
    film()
    {    

        this.state.film1.get[0].callApi();        
        console.log(this.state.film1)
        return(<div>{this.state.film1}</div>)
    }
    render()
    {
    return(<div>{this.film()}</div>)
    }
}

export default battle
//const [flipped, setFlipped] = useState(true);  
  
// function flipTable()
//   {
//     if(flipped)
//     {
//     document.getElementById("infoTable").innerHTML = `<table>
//     <tr>
//         <td>Category: ${category}</td>
//     </tr>
//     <tr>
//         <td>Actors: ${actorname}</td>
//     </tr>
//     <tr>
//         <td>Film Length: ${filmLength} Minutes</td>
//     </tr>
//     <tr>
//         <td>Description: ${description}</td>
//     </tr>
//     <tr>
//         <td>Rating: ${rating}</td>
//     </tr>
// </table>`
//     }else{
//         document.getElementById("infoTable").innerHTML =`<table>
//         <tr>
//             <td>Health</td>
//             <td><progress id="healthBar" value=${health % 100} max="100"></progress>${health}</td>
//         </tr>
//         <tr>
//             <td>Attack</td>
//             <td><progress id="attackBar" value=${attack % 100} max="100"></progress>${attack}</td>
//         </tr>
//         <tr>
//             <td>Defense</td>
//             <td><progress id="defenseBar" value=${defense % 100} max="100"></progress>${defense}</td>
//         </tr>
//         <tr>
//             <td>Agility</td>
//             <td><progress id="agilityBar" value=${agility % 100} max="100"></progress>${agility}</td>
//         </tr>
//         <tr>
//             <td>Vitality</td>
//             <td><progress id="vitalityBar" value=${vitality % 100} max="100"></progress>${vitality}</td>
//         </tr>
//     </table>`
//     }
//     setFlipped(prevCheck => !prevCheck);
//   }