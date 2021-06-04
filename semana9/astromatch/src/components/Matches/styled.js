import styled from "styled-components"


export const Container = styled.div`
background-color: #fff;
width: 60vh;
display: flex;
flex-direction: column;
`

export const Header = styled.div`
background-color: #fff;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px 0;
margin-top: 8px;
margin-bottom: 18px;
img:nth-child(2) {
    width: 200px;
    height: 60px;
    :hover {
        width: 200px;
        height: 60px;
        opacity: 1;
    }
}
a {
    margin: 0 30px;
    cursor: pointer;
    height: 30px;
}

img {
    width: 1.8rem;
    :hover {
        opacity: 0.8;
    }
}
`

export const Div = styled.div`
width: 80%;
min-height: 63vh;
max-height: 300vh;
`

export const List = styled.li`
width: 100%;
display: flex;
align-content: center;
justify-content: space-between;
border-radius: 10px;
margin-top: 5px;
margin-left: 30px;
padding: 10px; 
border: 1px solid lightgray;
img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-top: 10px;
    object-fit: cover;
}
p {
    font-size: 20px;
    font-weight: bold;
}
`

export const FooterDiv = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
align-items: flex-end;
a {
    margin: 50px;
    cursor: pointer;
    height: 30px;
}
img {
    width: 3rem;
    :hover {
        width: 4rem;
        opacity: 0.8;
    }
}
`
