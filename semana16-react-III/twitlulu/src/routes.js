// import React from 'react'
// import {Switch , Route } from 'react-router-dom'


// // paginas
// import Home from './pages/Home/Home'
// import LoginPage from './pages/LoginPage'

// const Roteamento = () => {
//     return(
// <Switch>
//     {/* <PrivateRoute exact path= '/' component = {Home} */}
//     <Route exact path ="/" component = {Home}/>
//     <Route path ="/login" component = {LoginPage}/>

// </Switch>
//     )
// }

// export default Roteamento




import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

//Páginas
import Home from './pages/Home/Home'
import LoginPage from './pages/LoginPage'
import Tweet from './components/Tweet';

function estAutenticado(){
    if(localStorage.getItem('TOKEN')){
        return true
    }
    else{
        return false
    }
}

class PrivateRoute extends React.Component {
    render() {
        const Component = this.props.component
        if(estAutenticado()) {
            // componente rota do Tweet
            return <Route render={()=> <Component {...this.props}></Component>}></Route>
        } 
        else{
            return <Redirect to="/login"></Redirect>
            // componente rota do login
        }

    }
}
const Roteamento = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default Roteamento
