import styled from 'styled-components'

export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }

  img {
    padding-top: 40px;
    padding-bottom: 138px;
  }

  h2 {
    text-align: center;
  }
`
