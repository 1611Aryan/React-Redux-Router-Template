import styled from "@emotion/styled"

const Petal = () => {
  return (
    <StyledPetal>
      <div className={"loaderContainer"}>
        <span className={"wave5"}></span>
        <span className={"wave1"}></span>
        <span className={"wave2"}></span>
        <span className={"wave3"}></span>
        <span className={"wave4"}></span>
      </div>
    </StyledPetal>
  )
} 

const StyledPetal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;

  display: grid;
  place-items: center;

  .loaderContainer {
    width: 50vh;
    height: 50vh;

    border-radius: 50%;
    background: #16074b;
    position: relative;
    overflow: hidden;

    span {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateY(50%);

      transform-box: content-box;
    }

    .wave1 {
      width: 150%;
      height: 150%;
      border-radius: 36% 45% 7% 62%;
      background: rgba(87, 216, 255, 0.5);
      animation: rotate 25s linear infinite alternate;
    }

    .wave2 {
      width: 130%;
      height: 130%;
      border-radius: 26% 95% 27% 12%;
      background: rgba(50, 255, 153, 0.5);
      animation: rotate 20s ease-in-out infinite alternate;
    }

    .wave3 {
      width: 105%;
      height: 105%;
      background: rgba(66, 78, 255, 0.5);
      border-radius: 46% 25% 77% 42%;
      animation: rotate 15s linear infinite alternate;
    }

    .wave4 {
      width: 155%;
      height: 155%;
      background: rgba(50, 236, 75, 0.5);
      border-radius: 56% 45% 34% 45%;
      animation: rotate 10s linear infinite alternate;
    }

    .wave5 {
      width: 125%;
      height: 95%;
      background: rgba(241, 229, 50, 0.5);
      border-radius: 26% 45% 34% 32%;
      animation: rotate 22s linear infinite reverse alternate;
    }

    @keyframes rotate {
      from {
        transform: rotate(0) translateY(50%);
      }

      to {
        transform: rotate(180deg) translateY(50%);
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .loaderContainer {
      width: 70vw;
      height: 70vw;
    }
  }
`

export default Petal