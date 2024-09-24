"use client";

import {Row, Col, Form, Input, Button, message} from "antd";
import {AiOutlineMail} from "react-icons/ai";
import {FaPhone, FaTelegramPlane, FaWhatsapp} from "react-icons/fa";
import axios from "axios";

const ContactSection = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log("Form values:", values);
        try {
            const res = axios.post("https://cloud-solutions.uz/forms/contact.php", values);
            console.log(res)
            message.success("Xabaringiz mufaqiyatli yuborildi");
        } catch (e) {
            message.error("Xatolik yuz berdi")
        }
    };

    return (
        <div id="contacts" className="py-10 bg-black pt-24">
            <div className="px-5 md:px-10 lg:px-20">
                <h1 className="text-4xl font-bold text-white mb-16" data-aos={'fade-right'}>Контакты</h1>
                <Row gutter={[16, 16]} data-aos={'zoom-in'}>
                    <Col xs={24} md={12} lg={6}>
                        <div className="flex items-center justify-center p-5 bg-white rounded shadow-lg">
                            <FaPhone className="size-7 px-2 bg-blue-500 shadow-xl rounded-full text-white mr-3"/>
                            <div>
                                <h3 className="text-lg font-bold">Telefon:</h3>
                                <p className="text-gray-700">+998 90 351 72 61</p>
                            </div>
                        </div>
                    </Col>

                    <Col xs={24} md={12} lg={6}>
                        <div className="flex items-center justify-center p-5 bg-white rounded shadow-lg">
                            <FaWhatsapp className="text-3xl text-green-600 mr-3"/>
                            <div>
                                <h3 className="text-lg font-bold">WhatsApp:</h3>
                                <p className="text-gray-700">+998 90 351 72 61</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <div className="flex items-center justify-center p-5 bg-white rounded shadow-lg">
                            <FaTelegramPlane className="bg-blue-500 text-white px-2 rounded-full size-7 mr-3"/>
                            <div>
                                <h3 className="text-lg font-bold">Telegram:</h3>
                                <p className="text-gray-700">+998 90 351 72 61</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} md={12} lg={6}>
                        <div className="flex items-center justify-center p-5 bg-white rounded shadow-lg">
                            <AiOutlineMail className="text-3xl text-blue-600 mr-3"/>
                            <div>
                                <h3 className="text-lg font-bold">Email:</h3>
                                <p className="text-gray-700">info@cloud-solutions.uz</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="mt-10" data-aos={'zoom-in'}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                        className="bg-white p-6 rounded shadow-lg"
                    >
                        <Row gutter={[16, 16]}>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    name="name"
                                    label="Ismingiz"
                                    rules={[{required: true, message: "Ismingizni kiriting!"}]}
                                >
                                    <Input placeholder="Ismingizni kiriting"/>
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[
                                        {required: true, message: "Emailni kiriting!"},
                                        {type: "email", message: "Email formati noto‘g‘ri!"},
                                    ]}
                                >
                                    <Input placeholder="Emailni kiriting"/>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            name="subject"
                            label="Mavzu"
                            rules={[{required: true, message: "Mavzuni kiriting!"}]}
                        >
                            <Input placeholder="Mavzuni kiriting"/>
                        </Form.Item>

                        <Form.Item
                            name="message"
                            label="Xabar"
                            rules={[{required: true, message: "Xabaringizni kiriting!"}]}
                        >
                            <Input.TextArea placeholder="Xabaringizni kiriting" rows={4}/>
                        </Form.Item>

                        <div className={"flex justify-center"}>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="bg-blue-600 text-white px-6 py-2 rounded mt-4"
                            >
                                Отправить сообщение
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
