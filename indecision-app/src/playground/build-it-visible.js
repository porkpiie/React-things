class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show Details"}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>You can see me now!</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
// let visibility = false;

// const onToggleClick = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const visible = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleClick}>
//                 {visibility ? "Hide details" : "Show Details"}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>You can see me now!</p>
//                 </div>
//             )}
//         </div>
//     );
//
// };

// render();
