/* 在页面上先是一个切换按钮
    默认 ON
    点击后可以切换成 OFF */
class Toggle extends React.Component {
    constructor(props){
        super(props);
        // state 是一个对象！
        this.state = {isToggleOn: true};
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        //箭头函数返回对象时，需要用小括号，以区别于函数体表达式 {...}
        this.setState(state => ({isToggleOn: !state.isToggleOn}));
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isToggleOn? "ON":"OFF"}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
)

//还有很多屁话没有看懂