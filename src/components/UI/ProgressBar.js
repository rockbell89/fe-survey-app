import React, { useMemo } from 'react';
import styled from 'styled-components';
import { color } from '../../theme';

const StyledProgressBarContainer = styled.div`
  position: relative;
  background-color: ${color.$light};
  height: 0.5rem;
  overflow: hidden;
`;

const StyledProgressBar = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transform: scaleX(${({ percent }) => percent / 100});
  transform-origin: center left;
  transition: transform 0.4s ease;
  background-color: ${color.$success};
`;

function ProgressBar({ step = 0, total }) {
  const percent = useMemo(() => (step / total) * 100, [step, total]);

  return (
    <StyledProgressBarContainer>
      <StyledProgressBar percent={percent} />
    </StyledProgressBarContainer>
  );
}

export default ProgressBar;
