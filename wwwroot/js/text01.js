let root = document.getElementById("root");

//Skapar fem input-fält med texten Peter. Ändras till Göran när man klickar i den.
//class Input extends React.Component {

//    state = { name: "Peter" }

//    handleInput = () => {
//        this.setState({ name: "Göran" });
//    }

//    render() {
//        return (
//            <input id="input" onInput={this.handleInput} value={this.state.name} ></input>
//        )
//    }
//}

//ReactDOM.render(<div><Input /><Input /><Input /><Input /><Input /></div>, root);

//Skapar ett inputfält som kan ta in en parameter som värdet som skrivs ut, i detta fall hårdkodat
//const FillTextbox = function (x) {
//    console.log("x", x)

//    return (
//            <input value={x.minprop}/>
//        );
//}

//let input = "hej";

//ReactDOM.render(<FillTextbox minprop={input} />, root);

class Input extends React.Component {

    state = { name: "" }

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <div>
            <input onChange={(this.handleChange)} value={this.state.name} ></input>
            <input onChange={(this.handleChange)} value={this.state.name} ></input>
            <input onChange={(this.handleChange)} value={this.state.name} ></input>
            </div>
        )
    }
}
ReactDOM.render(<Input />, root);

//handleInput = () => {
//    <input value={this.state.name}></input>
//}


//render() {
//    return (
//        <div>
//            <input onInput={this.handleInput} style={{ margin: '10px' }}>
//            </input>
//        </div>
//    )
//}


