import React from 'react';
import './App.css';

import unittoidol  from './unit-to-idol.json';
import idoltounit  from './idol-to-unit.json';
import idolData from './idolData.json'

class IdolButton extends React.Component {
  render() {
    const style = {
      borderColor: idolData[this.props.idol].color,
      backgroundColor: idolData[this.props.idol].color
    }

    return (
      <div
        className={"idolBox"}
        id={this.props.idol}
        style={style}
        onClick={
          ()=>{
            this.props.onClickHandler(this.props.idol);
            console.log(this.props.idol);
            console.log(idolData[this.props.idol].color);
          }
        }
      >
        <div className="boxContainer">
          <img className="idolImage" alt={this.props.idol} src={`https://millionlive.idolmaster.jp/theaterdays/images/top/a/${idolData[this.props.idol].image}`} />
          <div className="idolNameBox">{this.props.idol}</div>
        </div>
      </div>
    );
  }
}

class IdolsSelect extends React.Component {
  render() {
    const buttons = this.props.idols.map((idol, index) => {
      return(
        <IdolButton key={index} idol={idol} onClickHandler={(idol)=>this.props.onClickHandler(idol)}/>
      );
    });
    return (
      <div className="idolView">
        {buttons}
      </div>
      
    );
  }
}

class IdolItem extends React.Component {
  render(){
    const units = idoltounit[this.props.idol].map((unit, i) => {
      const unit_member = unittoidol[unit].map((member, i) => {
        return(
          <IdolButton key={i} idol={member} onClickHandler={(idol)=>this.props.toggleClickHandler(idol)} />
        );
      });
      return (
        <div key={unit} className="unitTable">
          <div className="unitName">
            {unit}
          </div>
          {unit_member}
        </div>
      );
    });

    return (
      <div className="unitBox">
        <div className="unitList">
          {units}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      listIdols: Object.keys(idoltounit),
      selectedIdols: [],
    }
    console.log(this.state.selectedIdols);
  }
  
  toggleIdol(idol) {
    if ( this.state.selectedIdols.indexOf(idol) === -1 ){
      const selected = this.state.selectedIdols.slice()
      selected.push(idol);
      this.setState({ selectedIdols: selected }, 
        ()=> {
          console.log(this.state.selectedIdols);
          console.log(this.state.selectedIdols.length)
          console.log(idol);
        }
      );
    } else {
      const selected = this.state.selectedIdols.filter(v=>v!==idol)
      this.setState({ selectedIdols: selected }, 
        ()=> {
          console.log(this.state.selectedIdols);
          console.log(this.state.selectedIdols.length)
          console.log(idol);
        }
      );
    }
  }

  render() {
    const units = [];
    for(const i of this.state.selectedIdols){
      units.push(
        <IdolItem
          key={i}
          idol={i}
          toggleClickHandler={(idol)=>this.toggleIdol(idol)}
        />
      );
    }

    return (
      <div>
        <div className="header">
          <div className="container">
            <h3 className="headerButton">
              MILLIONLIVE!-UNIT-SEARCH
            </h3>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <IdolsSelect
              idols={this.state.listIdols}
              onClickHandler={(idol)=>this.toggleIdol(idol)}
            />
            <hr />
            <div className="unitView">
              {units}
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="container">
            <hr />
            <center>
					  < p>The copyright to THE IDOLM@STER contents belongs to BANDAI NAMCO Entertainment Inc.</p>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
