const React          = require('react');
const Draggable      = require('./Draggable');

const ResizeHandle   = React.createClass({
  style: {
    position: 'absolute',
    top: 0,
    right: -7,
    width: 13,
    height: '100%',
    zIndex: 10
  },

  render(): ?ReactElement {
    return (
      <Draggable {...this.props}
      className="react-grid-HeaderCell__resizeHandle"
      style={this.style}
      />
  );
  }
});

module.exports = ResizeHandle;
