// 输入一组数字，产生一个无序列表
function NumList(props) {
    const nums = props.nums;
    const listItems = nums.map((num)=>
    <li key={num.toString()}>
        {num}
    </li>);
    return (<ul>{listItems}</ul>);
}

const nums = [1,2,3,4,5];

ReactDOM.render(
    <NumList nums={nums}/>,
    document.getElementById('root')
)