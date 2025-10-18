const drawingSurface = document.getElementById("drawingSurface");
const dravingInterface = drawingSurface.getContext("2d");

//Define all shapes
const polygons = [
  {
    color: "#000000ff", //triangle
    vertices: [
      { x: 100, y: 200 },
      { x: 200, y: 50 },
      { x: 300, y: 200 },
    ],
  },
  {
    color: "#000000ff", //square
    vertices: [
      { x: 450, y: 50 },
      { x: 650, y: 50 },
      { x: 650, y: 250 },
      { x: 450, y: 250 },
    ],
  },
  {
    color: "#000000ff", //Circle
    vertices: (() => {
      const cx = 750; // center X
      const cy = 320; // center Y
      const radius = 90;
      const points = [];
      const numSides = 360;

      for (let i = 0; i < numSides; i++) {
        const angle = (i / numSides) * Math.PI * 2;
        points.push({
          x: cx + radius * Math.cos(angle),
          y: cy + radius * Math.sin(angle),
        });
      }
      return points;
    })(),
  },
  {
    color: "#000000ff", //flag shape
    vertices: [
      { x: 100, y: 450 },
      { x: 350, y: 450 },
      { x: 350, y: 650 },
      { x: 225, y: 550 },
      { x: 100, y: 650 },
    ],
  },
  {
    color: "#000000ff", //star shape
    vertices: [
      { x: 200, y: 250 }, // starting top point
      { x: 230, y: 320 },
      { x: 300, y: 320 },
      { x: 245, y: 365 },
      { x: 265, y: 440 },
      { x: 200, y: 390 },
      { x: 135, y: 440 },
      { x: 155, y: 365 },
      { x: 100, y: 320 },
      { x: 170, y: 320 },
    ],
  },
  {
    color: "#000000ff", //pentagon
    vertices: [
      { x: 500, y: 450 },
      { x: 600, y: 400 },
      { x: 700, y: 450 },
      { x: 650, y: 600 },
      { x: 550, y: 600 },
    ],
  },
];

//Polygon Drawing
function drawPolygon(polygon) {
  const v = polygon.vertices;
  dravingInterface.beginPath();
  dravingInterface.moveTo(v[0].x, v[0].y);

  // go through each block vertex
  for (let i = 1; i < v.length; i++) {
    dravingInterface.lineTo(v[i].x, v[i].y);
  }

  dravingInterface.closePath();
  dravingInterface.fillStyle = polygon.color;
  dravingInterface.fill();
  dravingInterface.strokeStyle = "#999";
  dravingInterface.lineWidth = 1.5;
  dravingInterface.stroke();
}

//Vector preparations
function vectorSub(a, b) {
  return { x: a.x - b.x, y: a.y - b.y };
}

function vectorDot(a, b) {
  return a.x * b.x + a.y * b.y;
}

function vectorLengthSq(v) {
  return v.x * v.x + v.y * v.y;
}

//Draw All
function drawScene() {
  dravingInterface.clearRect(0, 0, drawingSurface.width, drawingSurface.height);

  // draw polygons
  polygons.forEach(drawPolygon);

  // For each polygon, calculate and draw its closest point
  polygons.forEach((poly) => {
    const result = getClosestPointToPolygon(testPoint, poly.vertices);

    // draw white small dot for the closest point
    dravingInterface.fillStyle = "#ffffff";
    dravingInterface.beginPath();
    dravingInterface.arc(result.point.x, result.point.y, 3, 0, Math.PI * 2);
    dravingInterface.fill();
  });

  // Main draggable red circle (outline only)
  dravingInterface.beginPath();
  dravingInterface.arc(testPoint.x, testPoint.y, 15, 0, Math.PI * 2);
  dravingInterface.strokeStyle = "white";
  dravingInterface.lineWidth = 3;
  dravingInterface.stroke();
}

//Distance measurements
function distancePointToLineSegment(point, a, b) {
  const line = vectorSub(b, a);
  const lineLengthSq = vectorLengthSq(line);

  // If line is shorter than 1 pixel, just return 'a'
  if (lineLengthSq < 1) {
    return { closest: a, distSq: vectorLengthSq(vectorSub(point, a)) };
  }

  const ap = vectorSub(point, a);
  let t = vectorDot(ap, line) / lineLengthSq;
  t = Math.max(0, Math.min(1, t)); // clamp between [0, 1]

  const closest = {
    x: a.x + line.x * t,
    y: a.y + line.y * t,
  };

  const distSq = vectorLengthSq(vectorSub(point, closest));
  return { closest, distSq };
}

function isPointOnSegment(p, a, b, tolerance = 1e-6) {
  const d1 = Math.hypot(p.x - a.x, p.y - a.y);
  const d2 = Math.hypot(p.x - b.x, p.y - b.y);
  const lineLen = Math.hypot(a.x - b.x, a.y - b.y);
  return Math.abs(d1 + d2 - lineLen) < tolerance;
}

function isPointInsidePolygon(p, polygon) {
  const n = polygon.length;
  if (n < 3) return false;

  // quick edge check
  for (let i = 0; i < n; i++) {
    const a = polygon[i];
    const b = polygon[(i + 1) % n];
    if (isPointOnSegment(p, a, b)) return true;
  }

  let crossings = 0;
  for (let i = 0; i < n; i++) {
    const a = polygon[i];
    const b = polygon[(i + 1) % n];
    const intersect =
      a.y > p.y !== b.y > p.y &&
      p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x;
    if (intersect) crossings++;
  }

  return crossings % 2 === 1;
}

function getClosestPointToPolygon(point, polygon) {
  if (isPointInsidePolygon(point, polygon)) {
    return { point: { ...point }, inside: true };
  }

  let nearest = null;
  for (let i = 0; i < polygon.length; i++) {
    const a = polygon[i];
    const b = polygon[(i + 1) % polygon.length];
    const result = distancePointToLineSegment(point, a, b);
    if (!nearest || result.distSq < nearest.distSq) {
      nearest = { ...result };
    }
  }

  return { point: nearest.closest, inside: false, distSq: nearest.distSq };
}

//Draggable point
let testPoint = { x: 400, y: 400 };
let isDragging = false;

//Mouse Events
drawingSurface.addEventListener("mousedown", (e) => {
  const rect = drawingSurface.getBoundingClientRect();
  const mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  const distance = Math.hypot(testPoint.x - mouse.x, testPoint.y - mouse.y);
  if (distance <= 10) isDragging = true;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const rect = drawingSurface.getBoundingClientRect();
    testPoint.x = e.clientX - rect.left;
    testPoint.y = e.clientY - rect.top;
    drawScene();
  }
});

//Initial Render
drawScene();
