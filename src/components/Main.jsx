import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import profileSrc from 'assets/profile.png';
import { cube, square } from '../utils/math';

const PrefetchedComp = React.lazy(() => import(/* webpackPrefetch: true */'./PrefetchedComp'));
const PreloadedComp = React.lazy(() => import(/* webpackPreload: true */'./PreloadedComp'));

const Container = styled.div`
  margin-top: 60px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

function Main() {
  const [showComp, toggleShowComp] = useState(false);
  const a = cube(2);
  const b = cube(4);
  /*#__PURE__*/ square(2);
  /*#__PURE__*/ square(2);
  return (
    <Container>
      {a}
      {b}
      <Image src={profileSrc} alt="profile" />
      <span>this is main page!what!!</span>
      <Suspense
        fallback={null}
      >
        <PreloadedComp />
        {showComp && <PrefetchedComp />}
      </Suspense>
      <button
        type="button"
        onClick={() => {
          toggleShowComp((state) => !state);
        }}
      >
        Show prefetch chunk
      </button>
    </Container>
  );
}

export default Main;
