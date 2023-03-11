const ErrorPanelStyle = {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    background: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '22px',
    fontSize: 18,
    fontWeight: 'bolder'
}

export function ErrorPanel(props) {
    return (
        <div style={ErrorPanelStyle}>
            <h1>{props.error}</h1>
            <p>{props.message} <code style={{fontWeight: "unset", background: '#343434', padding: '6px', borderRadius: '4px', color: '#e2e2e2'}}>{props.code}</code></p>
        </div>
    )
}

export function JSONSyntaxError(message) {
    this.name = 'JSONSyntaxError';
    this.message = '[JSONSyntaxError]' + (message || '');
    let error = new Error(this.message);
    error.name = this.name;
    this.stack = error.stack;
}

export function AttributeInvalidContentError(message) {
    this.name = 'AttributeInvalid';
    this.message = message || '';
    let error = new Error(this.message);
    error.name = this.name;
    this.stack = error.stack;
}
