const React = require("react");
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: "채귤",
    value: "",
    result: "",
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: "정답",
        word: this.state.value,
        value: "",
      });
      //this.input.focus();
      this.inputRef.current.focus();
    } else {
      this.setState({
        result: "땡",
        value: "",
      });
      this.inputRef.current.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  /*
  onRefInput = (c) => {
    this.input = c;
  };

  <input ref={this.onRefInput} />
  */
  inputRef = React.createRef();

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input
            ref={this.inputRef}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
