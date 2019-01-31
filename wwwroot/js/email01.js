let root = document.getElementById("root");

class Textruta extends React.Component {

    render() {
        return (
                <div className="textwrap">
                    <label>{this.props.label}</label>
                    <input/>
                </div>
            )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Textruta label="Förnamn"/>
                <Textruta label="Efternamn"/>
                <Textruta label="Email"/>
                </div>
            )
    }
}

ReactDOM.render(<App />, root);

//class Email extends React.Component {

//    render() {
//        return (
//            <div>
//                <div className="textwrap">
//                    <label>Förnamn</label>
//                    <input />
//                </div>

//                <div className="textwrap">
//                    <label>Efternamn</label>
//                    <input />
//                </div>

//                <div className="textwrap">
//                    <label>Email</label>
//                    <input />
//                </div>

//            </div>
//        )
//    }

//}