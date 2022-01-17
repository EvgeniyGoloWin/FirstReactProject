import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";



function App() {
  // const element111 = <h1>Hello</h1>;
  // function tick() {
  //   const element = (
  //
  //   );
  //   const names = ["Sara","Cahal","Edite", "Cahal","Edite","Cahal","Edite"];
  //   console.log(names)
  //   function Welcome(test) {
  //       return <h1>Hello, {test.name}</h1>;
  //   }



    return(
        <div className={"wrapper"}>
        <Header />
        <Body />
        <Footer />
        </div>


    )

  }

export default App;