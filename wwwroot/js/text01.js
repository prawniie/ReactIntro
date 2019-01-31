let root = document.getElementById("root");

class Input extends React.Component {

    state = { name: "Peter" }

    handleChange = (event) => {
        this.setState({ name: event.target.value });
    }

    render() {

        if (this.state.name == "") {
            return (
                <div>
                    <input onChange={(this.handleChange)} value={this.state.name} ></input>
                    <input onChange={(this.handleChange)} value={reverseName(this.state.name)}></input>
                    <input onChange={(this.handleChange)} value={this.state.name} ></input>
                    <p>Nothing here</p>
                </div>
            )
        }

        return (
            <div>
                <input onChange={(this.handleChange)} value={this.state.name} ></input>
                <input onChange={(this.handleChange)} value={reverseName(this.state.name)}></input>
                <input onChange={(this.handleChange)} value={this.state.name} ></input>
            </div>
        )
    }
}

function reverseName(name) {
    return name.split("").reverse().join("");
}

ReactDOM.render(<Input />, root);


