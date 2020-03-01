import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.value,
    };
    this.toggleOption = this.toggleOption.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.selected) {
      this.setState({ selected: nextProps.value });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.selected !== this.state.selected;
  }

  toggleOption(option) {
    if (!option.disabled) {
      this.setState({ selected: option.value });
      this.props.onChange(option.value);
    }
  }

  renderOptions() {
    return this.props.options.map(option => (
      <Form.Radio
        key={option.value}
        checked={this.state.selected === option.value}
        className={this.props.className}
        label={option.label}
        onChange={() => this.toggleOption(option)}
        value={option.value}
      />
    ));
  }

  render() {
    const { options, inline } = this.props;
    return (
      <Form.Group inline={inline}>{this.renderOptions(options)}</Form.Group>
    );
  }
}

Options.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.object,
      ]).isRequired,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  inline: PropTypes.bool,
};

Options.defaultProps = {
  inline: true,
};

export default Options;
