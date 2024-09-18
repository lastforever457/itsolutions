"use client";

import {Layout, Row, Col} from "antd";
import {FaFacebook, FaInstagram, FaTelegram} from "react-icons/fa";

const {Footer} = Layout;

const FooterComponent = () => {
    return (
        <Footer
            style={{
                backgroundColor: "#00060e",
                color: "#ffffff",
            }}
            className={"md:px-10 lg:px-20"}
        >
            <div className="container mx-auto py-8">
                <Row gutter={[32, 32]}>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <h2
                            style={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                marginBottom: "16px",
                            }}
                        >
                            Мы заботимся о ваших ИТ-целях
                        </h2>
                        <p style={{color: "#bfbfbf"}}>
                            г. Ташкент, Кокча ворота 340 A
                        </p>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <h3
                            style={{
                                color: "#ffffff",
                                fontWeight: "600",
                                marginBottom: "16px",
                            }}
                        >
                            Связь
                        </h3>
                        <p style={{color: "#bfbfbf"}}>+998 90 351 72 61</p>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <h3
                            style={{
                                color: "#ffffff",
                                fontWeight: "600",
                                marginBottom: "16px",
                            }}
                        >
                            Электронная почта
                        </h3>
                        <a
                            href="mailto:info@cloud-solutions.uz"
                            style={{color: "#bfbfbf", textDecoration: "none"}}
                        >
                            info@cloud-solutions.uz
                        </a>
                    </Col>
                    <Col xs={24} sm={12} md={6} lg={6}>
                        <h2
                            style={{
                                color: "#ffffff",
                                fontWeight: "bold",
                                marginBottom: "16px",
                            }}
                        >
                            Социальные сети
                        </h2>
                        <div className="flex space-x-4">
                            <a
                                href="https://t.me/Mirkamol_Kodirov"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaTelegram className={'size-7 bg-white text-blue-500 rounded-full'}/>
                            </a>
                            <a
                                href="https://www.instagram.com/cloudsolutionsuz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className={'bg-white text-red-500 rounded-full size-7'}/>
                            </a>
                            <a
                                href="https://www.facebook.com/cloudsolutionsuz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className={'bg-white text-blue-500 rounded-full size-7'}/>
                            </a>
                        </div>
                    </Col>
                </Row>
                <Row
                    style={{
                        marginTop: "40px",
                        borderTop: "1px solid #404040",
                        paddingTop: "16px",
                    }}
                >
                    <Col span={24} style={{textAlign: "center", color: "#bfbfbf"}}>
                        &copy; 2024 Cloud Solutions. Все права защищены.
                    </Col>
                </Row>
            </div>
        </Footer>
    );
};

export default FooterComponent;
