/*一个添加if判断的登录界面招呼语。
若用户登录，显示: Welcome!
反之，则显示：Please sign up!*/

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <h1>Welcome, dude.</h1>
    } else {
        return <h1>Please sign up.</h1>
    }
}

ReactDOM.render(
    <Greeting isLoggedIn={false}/>,
    document.getElementById('root')
)