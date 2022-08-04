import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Shape, Text } from "react-konva";

const App = () => {
  let [width1, updateWidth1] = useState(100);
  const [width2, updateWidth2] = useState(80);
  const [height1, updateHeight1] = useState(50);
  const [height2, updateHeight2] = useState(30);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [grad, setGrad] = useState(45);
  let [a, setA] = useState(100);
  let [b, setB] = useState(0);
  let [c, setC] = useState(0);
  let [d, setD] = useState(80);
  let [e, setE] = useState(50);
  let initialQ = e - Math.tan((grad * Math.PI) / 180) * (a - d);
  let [q, setQ] = useState(initialQ);

  const handelIncWidth = () => {
    setWidth(width + 15);
    updateWidth1(width1 + 15);
    updateWidth2(width2 + 15);
    setA(a + 15);
    setD(d + 15);
  };
  const handelDecWidth = () => {
    setWidth(width - 15);
    updateWidth1(width1 - 15);
    updateWidth2(width2 - 15);
    setA(a - 15);
    setD(d - 15);
  };
  const handelIncHeight = () => {
    setHeight(height + 15);
    updateHeight1(height1 + 15);
    updateHeight2(height2 + 15);
    setE(e + 15);
    setQ(q + 15);
  };
  const handelDecHeight = () => {
    setHeight(height - 15);
    updateHeight1(height1 - 15);
    updateHeight2(height2 - 15);
    setE(e - 15);
    setQ(q - 15);
  };
  const handelIncDegree = () => {
    setGrad(grad + 5);
  };
  const handelDecDegree = () => {
    setGrad(grad - 5);
  };

  return (
    <>
      <div style={{ x: 250, y: 250 }}>
        <label>width : </label>
        <button onClick={handelIncWidth}>+</button>
        <button onClick={handelDecWidth}>-</button>
      </div>
      <div>
        <label>height : </label>
        <button onClick={handelIncHeight}>+ </button>
        <button onClick={handelDecHeight}>-</button>
      </div>
      <div>
        <label>degree : </label>
        <button onClick={handelIncDegree}>+ </button>
        <button onClick={handelDecDegree}>-</button>
      </div>

      <Stage width={700} height={700}>
        <Layer>
          <Text
            x={250}
            y={250}
            fontSize={20}
            text={
              "a:" +
              a +
              "  b:" +
              b +
              "  c:" +
              c +
              "  d:" +
              d +
              " e:" +
              e +
              "  q:" +
              q.toFixed(0) +
              ""
            }
          />
          <Text
            x={(a - c) / 2}
            y={b}
            text={width1}
            fontSize={12}
            fill={"red"}
          />
          <Text
            x={(d - c) / 2}
            y={e + 10}
            text={width2}
            fontSize={12}
            fill={"red"}
          />

          <Text
            x={c}
            y={(e - b) / 2}
            text={height1}
            fontSize={10}
            fill={"red"}
          />
          <Text
            x={a + 15}
            y={(q - b) / 2}
            text={height2}
            fontSize={12}
            fill={"red"}
          />
          <Shape
            x={10}
            y={10}
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(a + width, b);
              context.lineTo(a, b);
              context.lineTo(c, b);
              context.lineTo(c, e + height);
              context.lineTo(d + width, e + height);
              context.lineTo(a + width, q + height);
              context.closePath();
              context.fillStrokeShape(shape);
            }}
            fill="green"
            stroke="black"
            strokeWidth={2}
            draggable
          />
        </Layer>
      </Stage>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
