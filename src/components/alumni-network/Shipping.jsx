import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Shipping = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currentStep, navigationDirection } = useSelector(
      (state) => state.stepsSlice
    );
  return (
      <div className=''>
          
    </div>
  )
}

export default Shipping