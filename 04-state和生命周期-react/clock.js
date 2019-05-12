/*封装真正可复用的 Clock 组件。
它将设置自己的计时器并每秒更新一次。*/
class Clock extends React.Component {
    //第二步：类构造函数，在构造函数中为 this.state（当前时间对象）赋初始值
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    /*生命周期方法*/
    //第四步：挂载，对应 Clock组件被渲染到 DOM的时候
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    //卸载，对应 Clock组件从 DOM中删除
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        //第五步：UI更新
        this.setState({
            date: new Date()
        });
    }

    //第三步：React 确定页面展示方式
    render() {
        return (
            <div>
                <h1>Hello, human.</h1>
                <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

ReactDOM.render(
    // 第一步：此处 Clock组件被传给 DOM render
    <Clock />,
    document.getElementById("root")
);

