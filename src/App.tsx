import styled from 'styled-components'

export default function App() {

  const Title = styled.h1`
    font-size: 15px;
    color: blue;
  `
  
  const Wrapper = styled.section`
    border: 1px solid red;
    padding: 10px;
  `
  return (
    <Wrapper>
      <Title>Quiz App</Title>
    </Wrapper>
  )
}
