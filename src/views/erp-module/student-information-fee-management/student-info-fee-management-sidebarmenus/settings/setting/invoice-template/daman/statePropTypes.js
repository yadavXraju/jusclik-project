import PropTypes from 'prop-types';

// Define PropTypes for the state object
const statePropTypes = PropTypes.shape({
  general: PropTypes.shape({
    templateProperties: PropTypes.shape({
      templateName: PropTypes.string.isRequired,
      paperSize: PropTypes.string.isRequired,
      orientation: PropTypes.oneOf(['portrait', 'landscape']).isRequired,
      margins: PropTypes.shape({
        top: PropTypes.string.isRequired,
        bottom: PropTypes.string.isRequired,
        left: PropTypes.string.isRequired,
        right: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    font: PropTypes.shape({
      pdfFont: PropTypes.string.isRequired,
      labelColor: PropTypes.string.isRequired,
      fontColor: PropTypes.string.isRequired,
      fontSize: PropTypes.string.isRequired
    }).isRequired,
    background: PropTypes.shape({
      backgroundImage: PropTypes.string,
      imagePosition: PropTypes.oneOf(['centerCenter', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight']).isRequired,
      backgroundColor: PropTypes.shape({
        enable: PropTypes.bool.isRequired,
        color: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired,
  headerFooter: PropTypes.object.isRequired, // You can specify more specific PropTypes if needed
  transactionDetails: PropTypes.object.isRequired,
  table: PropTypes.object.isRequired,
  total: PropTypes.object.isRequired,
  otherDetails: PropTypes.object.isRequired
});

export default statePropTypes;
