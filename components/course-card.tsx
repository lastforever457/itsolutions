'use client'

import React from "react";
import { Card, Button } from "antd";
import { observer } from "mobx-react-lite";
import { StarFilled } from "@ant-design/icons";

const CourseCard = observer(({ course }: { course: Record<string, any> }) => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt={course.title || "Course image"}
          src={String(course.image)}
          style={{
            height: 200,
            objectFit: "cover",
            borderRadius: "12px 12px 0 0",
          }}
        />
      }
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #2a2a2a", // Dark border
        backgroundColor: "#1e1e1e", // Dark background
        color: "#ffffff", // Light text color
      }}
      className={"shadow-lg min-h-[440px] flex flex-col justify-between"}
    >
      <h2 className="text-lg font-semibold text-white">
        {course.title || "Course Title"}
      </h2>
      <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
        <p>Lesson: {course.lessons}</p>
        <p>Student: {course.students}</p>
      </div>
      <p className="text-sm text-gray-400 mt-1">{course.level}</p>

      <div className="flex justify-between items-center mt-4 gap-3">
        <Button
          type="primary"
          block
          style={{
            backgroundColor: "#188f00",
            borderColor: "#0dc501",
            color: "#ffffff",
          }}
        >
          Начать курс
        </Button>
        <div className="flex items-center">
          <span
            className="text-lg"
            style={{ color: "#FA8C16", marginRight: "5px" }}
          >
            {course.rating}
          </span>
          <StarFilled style={{ color: "#FA8C16", fontSize: "20px" }} />
        </div>
      </div>
    </Card>
  );
});

export default CourseCard;
