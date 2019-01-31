console.log('Hello from tmp.js');

let root = document.getElementById("root");

class Button extends React.Component {

    state = {counter: 0, nrmouseover: 0}

    handleClick = () => {
        this.setState((x) => {
            return {
                counter: x.counter + 1
            };
        })
    }

    handleMouseOver = () => {
        this.setState((x) => {
            return {
                nrmouseover: x.nrmouseover + 1
            };
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} onMouseOver={this.handleMouseOver} style={{ margin: '10px' }}>
                    Antal klick {this.state.counter}
                    --------------------------------------
                    Antal mouseover {this.state.nrmouseover}
                </button>
            </div>
        )
    }
}

ReactDOM.render(<div><Button /><Button /></div>, root);


//----------------------------------------------------------

//const Kalle = function (props) {
//    return (
//        <div>
//            <h3>{props.minprop}</h3>
//            <button>{props.minprop}</button>
//            </div>
//        );
//}

//ReactDOM.render(<Kalle minprop="kör" />, root);



//-----------------------------------------------------------------------

//const Knapp = function () {
//    return (
//        <button>Goooo</button>
//    );
//}

//ReactDOM.render(
//    <div>
//        <Knapp />
//        <Knapp />
//    </div> , root);


//----------------------------------------------------------------------

//OBS KAN EJ blanda stora och små bokstäver måste skriva med små bokstäver <div> inte <Div>
//Men react-Element ska man skriva med stor bokstav tex Knapp

//OBS render vill bara ha ett objekt så då måste man lägga flera grejer i en grej så blir den nöjd
//Flera render efter sig --> kommer bara visa från den sista

//ReactDOM.render(
//    <div>
//        <p>Hello World</p>
//        <p>Hejhej</p>
//    </div>, root);