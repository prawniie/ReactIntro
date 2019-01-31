//validering: inget på förnamn, efternamn på sson och email xx@xx

class App extends React.Component {

    render() {
        return (
            <div>
                <Textruta label="Förnamn" />
                <Textruta label="Efternamn" validera="son$" />
                <Textruta label="Email" validera="\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b" ignoreracasing="true" />
            </div>
        )
    }
}

class Textruta extends React.Component {

    state = {input: "xxxx"}

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <div className="textwrap">
                <label>{this.props.label}</label>
                <input onChange={(this.handleChange)} value={this.state.input.value} validera={this.props.validera} ignoreracasing={this.props.ignoreracasing} style={{backgroundColor: "red"}} />
            </div>
        )
    }
}

function checkIfInputIsValid() {

    let isValid = new RegExp(this.props.validera).test(this.state.input.value);
    return isValid;
}

ReactDOM.render(<App />, root);

//-----------------------Exempel-------------------

//Uppgiften är att skapa komponenten Textruta som tar tre properties, lejbel [DONE] och validera och ignoreracasing.

//Om validera har ett värde ska textrutan bli röd ifall valideringen inte funkar(utifrån det reguljäruttryck som skickas in).

//Om ignoreracasing är true ska reguljäruttrycket inte bry sig om ifall text matas in med stora eller små bokstäver.

//function Welcome(props) {
//    return <h1>Hello, {props.name}</h1>;
//}

//function App() {
//    return (
//        <div>
//            <Welcome name="Sara" />
//            <Welcome name="Cahal" />
//            <Welcome name="Edite" />
//        </div>
//    );
//}

//ReactDOM.render(
//    <App />,
//    document.getElementById('root')
//);
