import React from 'react'
import { Wrapper } from './Landing-styles'
import hero_photo from '../images/Hero_Photo.png'

const Landing = ({ user, handleShowSignup }) => {
  return (
    <Wrapper>
    <main>
      <h1>
        Keep track of split costs with ease
      </h1>
      <img src={hero_photo} alt='calculator'/>
      
      <button onClick={handleShowSignup}>Start</button>
      
    </main>
    </Wrapper>
  )
}

				<button>Start</button>
			</main>
		</Wrapper>
	);
};

export default Landing;
