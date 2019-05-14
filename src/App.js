import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/BackDrop/BackDrop";

class App extends React.Component {
  state = {
    open: false
  };

  buttonHandler = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };
  closeHandler = () => {
    this.setState({
      open: false
    });
  };

  render() {
    if (this.state.open) {
      var BackDrop = <Backdrop click={this.closeHandler} />;
    }
    console.log(this.state.open);
    return (
      <div className="App" style={{ height: "100%" }}>
        <Toolbar buttonHandler={this.buttonHandler} />
        <SideDrawer show={this.state.open} />
        {BackDrop}
        <main style={{ marginTop: "65px" }}>
          <p> content </p>
        </main>
      </div>
    );
  }
}

export default App;

// var a = 0;
// setTimeout(function() {
//   console.log("22");
// }, 0);
// console.log("33");
// var timer = setInterval(() => {
//   a++;
//   console.log("set");
//   if (a === 2) {
//     setTimeout(function() {
//       clearInterval(timer);
//       console.log(a);
//     }, 0);
//   }
// }, 0);
// console.log('11');
