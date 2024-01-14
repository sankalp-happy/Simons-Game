var Heading = props => { 
    return(
        <h1 id = "level-title" onClick={props.click}>
            {(props.level<0)?"Game Over! Click again to restart.":props.level?"Level "+ props.level : "Click me to start!"}
        </h1>
    );
}
export default Heading;