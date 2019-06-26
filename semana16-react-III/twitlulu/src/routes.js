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
        console.log(this.props)
        if(estAutenticado()) {
            // componente rota do Tweet
            return <Route render={()=> <Component {...this.props}></Component>}></Route>
            // <Route exact={this.props.exact} path = {this.props.path} component = {this.props.component}></Route>
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
            <PrivateRoute exact path="/" texto = 'reprograma' component={Home} />
            <Route path="/login" component={LoginPage} />
        </Switch>
    )
}

export default Roteamento
