class MyAwesomeApp extends React.Component {
  render() {
    return(
      <article>
        <h1 className="title">My first App in {this.props.name}</h1>
      </article>
    )
  }
}

ReactDOM.render(
  <MyAwesomeApp name="React" />,
  document.getElementById('app')
)