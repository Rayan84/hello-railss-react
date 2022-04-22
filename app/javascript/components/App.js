import React from "react"
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PropTypes from "prop-types"


class App extends React.Component {
  render () {
    return (
      <React.Fragment>

        {/* <BrowserRouter>
          <Routes>
            <Route path="/" element={<Greetings />} />
          </Routes>
        </BrowserRouter> */}

        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
