class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecsion</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button style={{ color: "red" }}>What Should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return <div>Options component here</div>;
    }
}

class AddOption extends React.Component {
    render() {
        return <div>AddOption component here</div>;
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
