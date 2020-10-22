import React,{ Component } from 'react'
class GetName extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            selectedName:"",
            validationError:""
        }
    }

    componentDidMount(){
        // make get call
        fetch("url")
        .then(reponse => {
            return Response.json();
        })
        .then(data => {
            let nameFromApi = data.map(name => {
                return {value:name, display:name}
            });
            this.setState({
                names:[
                    {
                        value:"",
                        display:"(Select your name)"
                    }
                ].concat(nameFromApi)
            })
        })
        .catch(error => {
        })
    }

    render(){
        return (
            <div>
                {/* <select
                    value={this.state.selectedName}
                    onChange = {e => this.setState({
                        selectedName: e.target.value,
                        validationError: e.target.value == "" ? "Please select a name" : ""
                    })
                    }
                    >
                        {this.state.names.map(name => (
                            <option
                            key={name.value}
                            value={name.value}
                            >
                                {name.display}
                            </option>
                        ))}
                </select> */}
                <div
                style={{color:"red", marginTop:'5px'}}
                >
                    {this.state.validationError}
                </div>
            </div>
        )
    }
}
export default GetName