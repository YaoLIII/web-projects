function formatDate(date) {
    return date.toLocaleDateString();
}
//第一次提取画布
function Avatar(props) {
    return (
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    );
}
//第二次提取用户信息
function UserInfo(props) {
    return (
        <div className="userInfo">
            <Avatar user={props.user} />
            <div className="userinfoName">
                {props.user.name}
            </div>
        </div>
    );
}
//改变组件Comment的表示方法
function Comment(props) {
    return (
    <div className="Comment">
        <UserInfo 
            user={props.author}
        />
        <div className="Comment-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
    </div>);
}
//新建Object变量comment，传入参数
const comment = {
    date: new Date(),
    text: "I hope you enjoy React!",
    author: {
        name: "John Smith",
        avatarUrl: "https://placekitten.com/g/64/64",
    },
};
//组件渲染
ReactDOM.render(
    <Comment 
        date={comment.date} 
        text={comment.text} 
        author={comment.author} 
    />, 
    document.getElementById("root")
);