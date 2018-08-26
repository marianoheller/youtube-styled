import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const SliderWrapper = styled.div``;

const Label = styled.div`
`;

 const Slider = props => {
  return (
    <Container>
      <SliderWrapper>
        <input
          type="range"
          min={props.min}
          max={props.max}
          value={props.value}
          onChange={e => props.onValChange(e.target.value/100)}
        />
      </SliderWrapper>
      <Label>{props.label}</Label>
    </Container>
  )
}

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  onValChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Slider.defaultProps = {
  min: 0,
  max: 100,
  label: '',
};

export default Slider;
