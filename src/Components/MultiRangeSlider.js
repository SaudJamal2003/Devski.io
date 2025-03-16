import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

// Create a custom slider
const CustomSlider = styled(Slider)({
  color: '#A2FF86', // Main slider color
  '& .MuiSlider-thumb': {
    backgroundColor: '#A2FF86', // Thumb color
  },
  '& .MuiSlider-track': {
    backgroundColor: '#A2FF86', // Track color
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#A2FF86', // Rail color
  },
  '& .MuiSlider-valueLabel': {
    fontSize: '14px', // Increased font size
    fontWeight: 'bold',
    backgroundColor: '#7fbc6c', // Background color for better visibility
    color: 'white', // Text color
    padding: '4px 8px',
    borderRadius: '4px',
  },
});

function MultiRangeSlider() {
  return (
    <Box l={{ width: 870 }}>
      <CustomSlider
        defaultValue={50} // Initial value (within min-max)
        min={50} // Minimum value
        max={5000} // Maximum value
        step={50} // Step interval
        aria-label="Price Range"
        valueLabelDisplay="auto"
        valueLabelFormat={(value) => `$${value}`} // Format displayed value
      />   
    </Box>
  );
}

export default MultiRangeSlider;
