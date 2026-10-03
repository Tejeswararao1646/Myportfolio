import React, { useEffect, useRef } from 'react';

export default function SpiderWebCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates with spring smoothing
    let targetMouse = { x: width / 2, y: height / 2 };
    let currentMouse = { x: width / 2, y: height / 2 };

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX;
      targetMouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Web Anchor Nodes (Corners and Sides)
    const anchors = [
      { x: 0, y: 0, spokes: 8, maxRadius: 360 }, // Top-Left
      { x: width, y: 0, spokes: 8, maxRadius: 360 }, // Top-Right
      { x: width, y: height * 0.7, spokes: 7, maxRadius: 280 }, // Middle-Right
      { x: 0, y: height * 0.8, spokes: 7, maxRadius: 260 }, // Lower-Left
    ];

    let time = 0;

    const drawWeb = (originX, originY, numSpokes, maxR, pullFactor) => {
      const rings = 5;
      const spokeAngles = [];

      for (let s = 0; s < numSpokes; s++) {
        // Calculate angle based on which corner it is
        let baseAngle = (s / (numSpokes - 1)) * (Math.PI / 2);
        if (originX > width / 2 && originY < height / 2) {
          baseAngle = Math.PI / 2 + baseAngle;
        } else if (originX > width / 2 && originY > height / 2) {
          baseAngle = Math.PI + baseAngle;
        } else if (originX <= width / 2 && originY > height / 2) {
          baseAngle = 1.5 * Math.PI + baseAngle;
        }
        spokeAngles.push(baseAngle);
      }

      // Draw Spokes
      spokeAngles.forEach((angle) => {
        const destX = originX + Math.cos(angle) * maxR;
        const destY = originY + Math.sin(angle) * maxR;

        // Subtle pull towards cursor
        const dx = currentMouse.x - destX;
        const dy = currentMouse.y - destY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, (1 - dist / 500) * pullFactor * 15);

        const ctrlX = (originX + destX) / 2 + (dx / (dist || 1)) * force;
        const ctrlY = (originY + destY) / 2 + (dy / (dist || 1)) * force;

        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, destX, destY);
        ctx.strokeStyle = 'rgba(230, 36, 41, 0.16)';
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Draw Connecting Rings (Web Strands)
      for (let r = 1; r <= rings; r++) {
        const radius = (maxR / rings) * r;
        ctx.beginPath();

        for (let s = 0; s < spokeAngles.length; s++) {
          const angle = spokeAngles[s];
          let ptX = originX + Math.cos(angle) * radius;
          let ptY = originY + Math.sin(angle) * radius;

          // Subtle harmonic wave
          const wave = Math.sin(time * 0.002 + r + s) * 2;
          ptX += Math.cos(angle) * wave;
          ptY += Math.sin(angle) * wave;

          if (s === 0) {
            ctx.moveTo(ptX, ptY);
          } else {
            // Slight curve inward between spokes like real web
            const prevAngle = spokeAngles[s - 1];
            const midAngle = (angle + prevAngle) / 2;
            const dipRadius = radius * 0.94;
            const midX = originX + Math.cos(midAngle) * dipRadius;
            const midY = originY + Math.sin(midAngle) * dipRadius;
            ctx.quadraticCurveTo(midX, midY, ptX, ptY);
          }
        }

        ctx.strokeStyle = r % 2 === 0 ? 'rgba(255, 255, 255, 0.10)' : 'rgba(230, 36, 41, 0.14)';
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 16;

      // Smooth mouse easing
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.05;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.05;

      // Draw webs at anchors
      drawWeb(0, 0, 7, 340, 1.2);
      drawWeb(width, 0, 7, 340, 1.2);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}
