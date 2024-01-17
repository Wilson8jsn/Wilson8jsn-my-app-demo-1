import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image } from 'react-native';

const ImageViewer = React.forwardRef(
  function ImageViewerComponent({ placeholderImageSource, selectedImage }, ref) {
    const imageSource = selectedImage ? { uri: selectedImage } : placeholderImageSource;

    return <Image ref={ref} source={imageSource} style={styles.image} />;
  }
);


ImageViewer.propTypes = {
  placeholderImageSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  selectedImage: PropTypes.string,
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});


ImageViewer.displayName = 'ImageViewer';

export default ImageViewer;
