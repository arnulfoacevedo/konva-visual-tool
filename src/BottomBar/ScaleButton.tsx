import React, { useContext } from "react";
import { Space, Button, Tooltip } from "antd";
import ScaleContext from "../context/ScaleContext";
// import "./App.less";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const ScaleButton: React.FC<React.HTMLAttributes<HTMLDivElement>> = () => {
  const { scale, setScale } = useContext(ScaleContext);
  return (
    <Space direction="vertical" size="small">
      <Tooltip title={"Increase view scale"} placement="left" mouseEnterDelay={1}>
        <Button
          style={{
            borderRadius: "10px",
          }}
          size="large"
          icon={<PlusOutlined />}
          type="ghost"
          onClick={() => {
            setScale(scale + 0.1);
          }}
        />
      </Tooltip>
      <Tooltip title={"Current view scale"} placement="left" mouseEnterDelay={1}>
        <div className="scale-text">{(scale * 100).toFixed(0) + "%"}</div>
      </Tooltip>
      <Tooltip title={"Decrease view scale"} placement="left" mouseEnterDelay={1}>
        <Button
          style={{
            borderRadius: "10px",
          }}
          size="large"
          icon={<MinusOutlined />}
          type="ghost"
          onClick={() => {
            setScale(scale - 0.1);
          }}
        />
      </Tooltip>
    </Space>
  );
};
export default ScaleButton;
