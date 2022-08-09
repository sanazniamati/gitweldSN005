import React, { Fragment, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { Stage, Layer, Shape, Text, Group } from "react-konva";

const App = () => {
  const shapeRef = useRef();
  let [a, setA] = useState(100);
  let [b, setB] = useState(0);
  let [c, setC] = useState(0);
  let [d, setD] = useState(80);
  let [e, setE] = useState(50);
  const [grad, setGrad] = useState(45);
  let initialQ = e - Math.tan((grad * Math.PI) / 180) * (a - d);
  let [q, setQ] = useState(initialQ);
  let initialWidth1 = a - c;
  let initialWidth2 = d - c;
  let initialHeight1 = e - b;
  let initialHeight2 = q - b;
  const [show, setShow] = useState(true);
  let [width1, updateWidth1] = useState(initialWidth1);
  const [width2, updateWidth2] = useState(initialWidth2);
  const [height1, updateHeight1] = useState(initialHeight1);
  const [height2, updateHeight2] = useState(initialHeight2);
  useEffect(() => {
    setQ(initialQ);
    updateHeight2((height2) => q - b);
  }, [grad]);
  const handelIncWidth = () => {
    updateWidth1(width1 + 15);
    updateWidth2(width2 + 15);
    setA(a + 15);
    setD(d + 15);
  };
  const handelDecWidth = () => {
    updateWidth1(width1 - 15);
    updateWidth2(width2 - 15);
    setA(a - 15);
    setD(d - 15);
  };
  const handelIncHeight = () => {
    updateHeight1(height1 + 15);
    updateHeight2(height2 + 15);
    setE(e + 15);
    setQ(q + 15);
  };
  const handelDecHeight = () => {
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

  const handelOnTexts = () => {
    setShow(true);
  };
  const handelOffTexts = () => {
    setShow(false);
  };

  return (
    <Fragment>
      <div>
        <button onClick={handelOnTexts}>on</button>
        <button onClick={handelOffTexts}>off</button>
      </div>
      <div>
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
            x={100}
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
              "  grad:" +
              grad
            }
          />
          <Group draggable>
            <Text
              x={(a - c) / 2}
              y={b}
              text={width1.toString()}
              fontSize={12}
              fill={"red"}
              visible={show}
            />
            <Text
              x={(d - c) / 2}
              y={e + 10}
              text={width2.toString()}
              fontSize={12}
              fill={"red"}
              visible={show}
            />

            <Text
              x={c - 1}
              y={(e - b) / 2}
              text={height1.toFixed(0)}
              fontSize={8}
              fill={"red"}
              visible={show}
            />
            <Text
              x={a + 15}
              y={(q - b) / 2}
              text={height2.toFixed(0)}
              fontSize={12}
              fill={"red"}
              visible={show}
            />
            <Shape
              ref={shapeRef}
              x={10}
              y={10}
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(a, b);
                context.lineTo(a, b);
                context.lineTo(c, b);
                context.lineTo(c, e);
                context.lineTo(d, e);
                context.lineTo(a, q);
                context.closePath();
                context.fillStrokeShape(shape);
              }}
              fill="green"
              stroke="black"
              strokeWidth={2}
              // draggable
            />
          </Group>
        </Layer>
      </Stage>
    </Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
