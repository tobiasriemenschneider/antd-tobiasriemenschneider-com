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

  return null;
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
