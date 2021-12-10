import React from "react";
import Header from "./components/Header";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){}
    componentDidUpdate(prevProps, prevState, snapshot){}
    componentWillUnmount(){}
    render(){
        return <>
            <Header></Header>
            <h1>E-menus</h1>
        </>;
    }

}

export default App;
