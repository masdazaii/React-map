import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Cards from './Cards';

class App extends React.Component {
  state = {
    open: false,
    favorite: 'default',
    hotels: [
      {nama: 'Aston Imperium',tanggal: '23 April 2019',deskripsi: 'nobar avenger:endgame'},
      {nama: 'Aston Imperium',tanggal: '23 April 2019',deskripsi: 'nobar avenger:endgame'},
      {nama: 'Aston Imperium',tanggal: '23 April 2019',deskripsi: 'nobar avenger:endgame'},
      {nama: 'Aston Imperium',tanggal: '23 April 2019',deskripsi: 'nobar avenger:endgame'},
      {nama: 'Aston Imperium',tanggal: '23 April 2019',deskripsi: 'nobar avenger:endgame'},
    ]
  }
  render() {
    return (
      <div>
        <PrimarySearchAppBar/>
        <div className="row">
          <div className="col 15">
            {this.state.hotels.map((data,key)=>{
              return (
                <div>
                  <Cards key={key} title={data.nama} tanggal={data.tanggal}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
