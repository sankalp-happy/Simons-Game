var Buttons = props => {
    return(
        <div className="row">
            <div type="button"  id= {props.color1} className= {"btn " + props.color1} onClick={props.onclick}></div>
            <div type="button"  id= {props.color2} className = {"btn " + props.color2} onClick={props.onclick}></div>
        </div>
    );
}

export default Buttons;