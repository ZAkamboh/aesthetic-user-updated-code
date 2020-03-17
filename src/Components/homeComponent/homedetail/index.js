import React from "react"

class Homedetail extends React.Component{
constructor(props){
    super(props);
    this.state={
        detail:{}
        
    }
}
    componentWillMount(){
        var detaildata=this.props.location.state.item
        this.setState({detail:detaildata})
    }
    render(){
return(
    <div>
        
            
            <h1>{this.state.detail.title}</h1>
<p>{this.state.detail.desc}</p>

            

    </div>
)
    }
}

export default Homedetail;