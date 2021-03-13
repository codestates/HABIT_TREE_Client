import { useRef, useEffect } from 'react';
import '../App.css';
import MessageModal from './MessageModal';
const ViewTree = ({ percent }) => {
  const canvasRef = useRef(null);
  let canvas;
  let ctx;

  // canvas = canvasRef.current;
  useEffect(() => {
    canvas = document.querySelector('.myCanvas');

    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //bloodguy.tistory.com/entry/HTML5-canvas-지우기-clear-canvas [Bloodguy]
    ctx.beginPath();
    create();
  }, [percent]);

  function create() {
    let leafColorArray = [
      '#347235',
      '#437C17',
      '#387C44',
      '#347C2C',
      '#347C17',
      '#348017',
      '#4E9258',
      '#6AA121',
      '#4AA02C',
      '#41A317',
    ];
    let leafColorArray2 = [
      '#EDDA74',
      '#EDE275',
      '#FFE87C',
      '#FFFF00',
      '#FFF380',
      '#FFDB58',
      '#FFD801',
      '#FDD017',
      '#EAC117',
      '#F2BB66',
    ];
    let leafColorArray3 = [
      '#FBBBB9',
      '#FAAFBE',
      '#FAAFBA',
      '#F9A7B0',
      '#E7A1B0',
      '#E799A3',
      '#E38AAE',
      '#F778A1',
      '#E56E94',
      '#FC6C85',
    ];
    let leafColor = [leafColorArray, leafColorArray2, leafColorArray3];
    let xLocation = 200;
    let count = 0;

    for (let key of Object.keys(percent)) {
      drawFractalTree(ctx, xLocation, percent[key], leafColor[count]);

      xLocation += 300;
      count++;
      ctx.beginPath();
    }
  }

  function drawFractalTree(ctx, xLocation, percent, leafColor) {
    drawTree(
      ctx,
      xLocation, //getRandomInt(0, 1200),
      900, //getRandomInt(0, 1000),
      -90,
      percent + 4, //percent
      12,
      leafColor
    );
  }
  function drawTree(ctx, x1, y1, angle, depth, thickness, leafColor) {
    let BRANCH_LENGTH = random(0.5, 1.8);

    var randomLeafColor = leafColor[random(0, leafColor.length - 1)];
    if (depth > 5) {
      let x2 = x1 + cos(angle) * depth * BRANCH_LENGTH;
      let y2 = y1 + sin(angle) * depth * BRANCH_LENGTH;

      drawLine(ctx, x1, y1, x2, y2, thickness, randomLeafColor);

      drawTree(
        ctx,
        x2,
        y2,
        angle - random(15, 20),
        depth * 0.75,
        thickness * 0.8,
        leafColor
      );
      drawTree(
        ctx,
        x2,
        y2,
        angle + random(15, 20),
        depth * 0.75,
        thickness * 0.8,
        leafColor
      );
    } else {
      let x2 = x1 + Math.cos(angle * (Math.PI / 180.0)) * depth * BRANCH_LENGTH;
      let y2 = y1 + Math.sin(angle * (Math.PI / 180.0)) * depth * BRANCH_LENGTH;
      ctx.fillStyle = randomLeafColor;
      //ctx.arc(x2, y2, random(0, 6), 0, 2 * Math.PI, false);
      ctx.ellipse(
        x2 + 10,
        y2 + 10,
        5,
        6,
        Math.random(),
        Math.random(),
        Math.random()
      );
      ctx.ellipse(
        x2 + 10,
        y2 + 10,
        5,
        6,
        Math.random(),
        Math.random(),
        Math.random()
      );
      ctx.ellipse(
        x2 + 10,
        y2 + 10,
        5,
        6,
        Math.random(),
        Math.random(),
        Math.random()
      );

      ctx.fill();
      ctx.restore();
    }
  }
  function drawLine(ctx, x1, y1, x2, y2, thickness, randomLeafColor) {
    ctx.fillStyle = '#000';
    if (thickness > 3) ctx.strokeStyle = 'rgb(139,126, 102)';
    else ctx.strokeStyle = randomLeafColor;
    ctx.lineWidth = thickness * 0.8;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.closePath();
    ctx.stroke();
  }
  function cos(angle) {
    return Math.cos(deg_to_rad(angle));
  }
  function sin(angle) {
    return Math.sin(deg_to_rad(angle));
  }
  function deg_to_rad(angle) {
    return angle * (Math.PI / 180.0);
  }
  function random(min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min));
  }

  return (
    <div data-aos="fade-left" className="canvas_container">
      <canvas
        ref={canvasRef}
        className="myCanvas"
        width="1000px"
        height="1000px"
      />
      <MessageModal />
    </div>
  );
};

export default ViewTree;
