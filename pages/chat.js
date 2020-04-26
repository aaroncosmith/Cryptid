import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import UserMessage from "../components/UserMessage";


const ChatBox = () => {
  const [textValue, changeTextValue] = React.useState('');

  return (
    <Layout>
      <Sidebar />
      <Wrapper>

        <InnerBoxWrapper>
          <InnerBox>
            <UserMessage />
            <input label="Send a chat" value={textValue} onChange={e => changeTextValue(e.target.value)} type="text" />
          </InnerBox>
        </InnerBoxWrapper>
        <h1>test</h1>
      </Wrapper>
    </Layout>
  )
}

const Layout = styled.section`
  height: 100vh;
  margin: 0;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  display: flex;
`;

const Wrapper = styled.section`
  margin-top: auto;
  margin-bottom: auto;
  /* padding: 0.75rem 0 !important; */
  overflow-y: auto;
  white-space: nowrap;
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
  width: 100%;
margin-left: 1vw;
margin-right: 15vw;
`;

const InnerBox = styled.section`
text-align: center;
width: 100%;
align-self: flex-end;
`;

const InnerBoxWrapper = styled.section`
  display: flex;
  height: 90vh;
  background: black;
  opacity: 0.5;

`;

const MessageBox = styled.input``;

export default ChatBox;
