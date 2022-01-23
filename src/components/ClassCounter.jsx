import React from "react";

class ClassCounter extends React.Component{

    constructor(props){ //Данный конструктор заменяет функцию useState - управление состояния
        super(props); // С помощью данной функции наследуются свойства и методы класса родителя
        this.state = { // Аналог функции useState
            count: 0,
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    increment (){
        this.setState({count: this.state.count + 1})
    }
    
    decrement (){
        this.setState({count: this.state.count - 1})
    }

    render() {
        return(
            <div>
                <h1>
                    {this.state.count}
                </h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

export default ClassCounter;