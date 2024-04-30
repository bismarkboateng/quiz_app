import styled from "styled-components";

type ButtonProps = {
    children: string;
}

export default function Button({ children }: ButtonProps) {

  const Button = styled.button`
   width: 100%;
   border-radius: 6px;
   padding: 10px 0;
   background-color: #A729F5;
   color: white;
   font-family: "Rubik, sans-serif";
   font-size: 18px;
   font-weight: medium;
   border: none;
   outline: none;
  `
  return (
    <Button
     onClick={() => console.log("check answer")}
    >
     {children}
    </Button>
  )
}
