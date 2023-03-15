import styled from 'styled-components'
const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  margin: 0px;
  box-sizing: border-box;
  display: flex;
  padding: 0 6rem;
  min-height: 8vh;
  color: #2ec1ac;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  .logo {
    width: 40%;
    font-size: 30px;
    text-align: left;
  }
  .nav-links {
    display: flex;
    justify-content: space-around;
    text-decoration: none;
  }

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: #2ec1ac;
      &.active {
        border-bottom: 1px solid;
      }
      &:active {
        color: none;
      }

      &:focus-visible {
        border: 2px solid #000;
      }
    }
  }
  .nav {
    width: 40%;
  }

  .line1,
  .line2,
  .line3 {
    width: 25px;
    height: 3px;
    background-color: #2ec1ac;
    margin: 5px;
  }
  .burger {
    margin-top: 10px;
    display: none;
  }

  @media screen and (max-width: 1024px) {
    .nav {
      width: 60%;
      font-size: 23px;
    }
  }

  @media screen and (max-width: 768px) {
    #root {
      overflow-x: hidden;
    }

    .nav {
      position: absolute;
      right: 0px;
      height: 120vh;
      top: 20vh;
      background-color: #2ec1ac;
      color: #fff;
      width: 50%;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
    li {
      padding: 10%;
      opacity: 0;
    }
    .burger {
      display: block;
    }

    .nav-active {
      nav {
        transform: translateX(100%);
      }
      li {
        opacity: 1;
      }
    }

    .nav-active {
      transform: translateX(0%);
    }
  }
`
const Header = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  margin: 0px;
  box-sizing: border-box;
  display: flex;
  padding: 0 6rem;
  min-height: 8vh;
  color: #2ec1ac;
  font-family: 'Poppins', sans-serif;
  align-items: center;
  .logo {
    width: 30%;
    font-size: 30px;
    text-align: left;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export { Wrapper, Header }
