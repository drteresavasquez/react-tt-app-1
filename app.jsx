function Application(){
    return(
        <div>
            <h1>Hello for React</h1>
            <p>I was rendered from the application component</p>
        </div>   
    );
}

ReactDOM.render(<Applicaton />, document.getElementById('container'));