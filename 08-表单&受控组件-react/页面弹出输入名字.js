// 提交表单（姓名），界面弹出 alert 显示对应姓名
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        alert('A name:'+ this.state.value +' was submitted.');
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    // 第一个input：输入框
                    <input type='text' 
                    value={this.state.value} 
                    onChange={this.handleChange}  
                    />
                </label>
                // 第二个input：提交按钮
                <input type='submit' value='Submit'/>
            </form>
        );
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
)