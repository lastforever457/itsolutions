import React from 'react';
import {Card, Col, Row, Typography} from 'antd';

const {Title} = Typography;

const TechStack = () => {
    const stacks = [
        {
            title: "Backend",
            items: [".Net", "Java", "Python", "Go", "PHP", "Node"],
        },
        {
            title: "Frontend",
            items: ["Mark Up", "React", "Angular", "Vue", "Wordpress"],
        },
        {
            title: "Mobile",
            items: ["Android", "iOS", "React Native", "Flutter"],
        },
        {
            title: "Infrastructure & Networking",
            items: ["Linux SysAdmin", "DevOps/Cloud Services"],
        },
        {
            title: "Testing & QA",
            items: ["Manual Testing", "Test Automation"],
        },
        {
            title: "Data & Business Intelligence",
            items: ["DBA", "Data Science", "Data Engineering", "Power BI"],
        },
        {
            title: "Digital Marketing",
            items: ["Social Media Advertising", "PPC Campaigns", "SEO", "Creative"],
        },
        {
            title: "Product Design",
            items: ["Creative", "UI", "UX", "Motion Design"],
        },
        {
            title: "Salesforce",
            items: [
                "Hybrid Applications",
                "CRM, CPQ, Billing Consulting",
                "Service and Experience Cloud",
                "Migration from CRM",
                "API Development",
            ],
        },
        {
            title: "Managed Delivery",
            items: [
                "Agile Project Management",
                "Product Management",
                "Cloud Application Development",
                "CI/CD",
            ],
        },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className={'text-center text-3xl font-bold text-red-400 mb-10 mt-10 '}>
                Tech Stacks
            </h2>
            <Row gutter={[16, 16]}>
                {stacks.map((stack, index) => (
                    <Col xs={24} sm={12} md={8} lg={6} key={index}>
                        <Card title={stack.title} className={'rounded-[22px] border-2 border-red-400'}>
                            <ul>
                                {stack.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TechStack;
