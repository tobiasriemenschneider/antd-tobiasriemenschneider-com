// imports - REACT
import { useState } from "react";
// imports - ANTD
import { Layout, Row, Col, Typography, Modal, Button } from "antd";
const { Header, Footer, Sider, Content } = Layout;
const { Title, Link } = Typography;
import Logo from "~/images/antd-logo.svg";
// imports - STYLES
import styled from "styled-components";
import { size } from "~/styles/breakpoints";

// * DEFAULT EXPORT
export default function Index() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="What is this about?"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={hideModal}
        footer={[
          <Button key="ok" onClick={handleOk}>
            Ok, thanks
          </Button>,
        ]}>
        <p>
          You reached a satellite of{" "}
          <a href="tobiasriemenschneider.com">tobiasriemenschneider.com</a>.
        </p>
        <p>
          This specific one is used to play around with{" "}
          <a href="https://ant.design/">Ant Design</a>, the second most popular
          UI&nbsp;library on the planet.
        </p>
        <p>
          Feel free to go{" "}
          <a href="tobiasriemenschneider.com/antd-sandbox">here</a> to get some
          more info.
        </p>
      </Modal>
      <Layout>
        <Styled_Content>
          <Styled_Row justify="space-around" align="middle">
            <Styled_Col_Logo order={1} span={24} sm={{ order: 2, span: 12 }}>
              <img src={Logo} />
            </Styled_Col_Logo>
            <Styled_Col_Title
              order={2}
              span={24}
              sm={{ order: 1, span: 10, offset: 2 }}>
              <Title>antd sandbox</Title>
              <Link
                onClick={(event) => {
                  // event.preventDefault();
                  showModal();
                }}>
                What is this about?
              </Link>
            </Styled_Col_Title>
          </Styled_Row>
        </Styled_Content>
        <Styled_Footer>Made in DUS with my Keyboard</Styled_Footer>
      </Layout>
    </>
  );
}

// * STYLING
const footerHeight = "70px";

const Styled_Content = styled(Content)`
  height: calc(100vh - ${footerHeight});
  max-width: 1000px;
  width: 100%;
  align-self: center;
`;

const Styled_Row = styled(Row)`
  height: 100%;
  @media ${size.sm} {
    height: 100%;
  }
`;

const Styled_Col_Logo = styled(Col)`
  text-align: center;
  img {
    width: 40%;
  }

  @media ${size.sm} {
    img {
      width: 70%;
    }
  }
`;

const Styled_Col_Title = styled(Col)`
  text-align: center;

  @media ${size.sm} {
    text-align: left;
  }
`;

const Styled_Footer = styled(Footer)`
  height: footerHeight;
  text-align: center;

  @media ${size.sm} {
    text-align: left;
  }
`;
