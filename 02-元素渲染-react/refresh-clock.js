function getTime(date) {
    return date.toLocaleTimeString();
}

function tick() {
    const element = (
        <div>
            <h1>Hello, human.</h1>
            <h2>Now is {getTime(new Date())}</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById("root")
    )
}

setInterval(tick, 1000);

