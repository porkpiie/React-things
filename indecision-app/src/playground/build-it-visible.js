let visibility = false;

const onToggleClick = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const visible = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleClick}>
                {visibility ? "Hide details" : "Show Details"}
            </button>
            {visibility && (
                <div>
                    <p>You can see me now!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(visible, document.getElementById("app"));
};

render();
