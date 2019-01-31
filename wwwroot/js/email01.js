let root = document.getElementById("root");

class Email extends React.Component {

    render() {
        return (
            <div>
                <form>
                    Förnamn: <input></input>
                    Efternamn: <input></input>
                    Email: <input></input>
                </form>
            </div>
            )
    }

}

ReactDOM.render(<Email />, root);