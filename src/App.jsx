import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Summary from "./components/Summary";
import Footer from "./components/Footer";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            categoriesLength: 0
        }
    }

    componentDidMount(){
        fetch(process.env.REACT_APP_DB)
        .then(response => response.json())
        .then(data => {
            
            const categories = data.categories;
            const menuList = data.menu;
            let menuByCategories = [];
            for(let i = 0; i < categories.length; i++){
                const category = categories[i];
                let r = this.createCategory(category, menuList);
                if(r.length === 0){
                    continue
                }
                menuByCategories.push(r);
            }
           
            this.setState({categories, categoriesLength: categories.length, menuByCategories});
            console.log('state', this.state)
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot){}
    componentWillUnmount(){}

    createCategory = (categoryName, menuList) => {
        let arr = [];
        for(let i = 0; i < menuList.length; i++){
            if(categoryName === menuList[i].category){
                arr.push(menuList[i]);
            }
        }
        return {categoryName, menu: arr};
    }



    render(){
        if(this.state.categoriesLength < 1){
            return <h1>Sorry this menu its empty</h1>
        }
        return <>
            <Header></Header>
            <div className={'container'}>
                <Menu menuByCategories={this.state.menuByCategories}></Menu>
            </div>
            
            <Summary></Summary>
            <Footer></Footer>
        </>;
    }

}

export default App;
