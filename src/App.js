import React from "react";
import "./App.css";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }
  componentDidMount() {
    fetch('https://kipi.covid19.go.id/api/get-province', {method: 'POST'})
        .then(response => response.json())
        .then((json) => {
          this.setState({
            items: json,
            DataisLoaded: true,
          });
        });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.results.map((item) => (
          <ol>
            key: {item.key}, value: {item.value}
          </ol>
        ))}
      </div>
    );
  }
}

export default App;
