
"use client";

import { useEffect } from "react";

export default function CursorHalo() {
  useEffect(() => {
    // Evita duplicar em hot reloads
    if (window.__cursorHalo) return;

    const el = document.createElement("div");
    el.id = "cursor-halo";
    el.setAttribute("aria-hidden", "true");
    document.body.appendChild(el);

    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let raf = 0;

    const paint = () => {
      el.style.setProperty("--mx", mx + "px");
      el.style.setProperty("--my", my + "px");
      raf = 0;
    };

    const onMove = (e: PointerEvent | MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(paint);
    };

    addEventListener("pointermove", onMove as EventListener, { passive: true });
    addEventListener("mousemove", onMove as EventListener, { passive: true });
    paint();

    // API pública para controle/rollback
    window.__cursorHalo = {
      enable() {
        if (!document.getElementById("cursor-halo")) {
          document.body.appendChild(el);
        }
        el.style.display = "";
        addEventListener("pointermove", onMove as EventListener, {
          passive: true,
        });
        addEventListener("mousemove", onMove as EventListener, {
          passive: true,
        });
      },
      disable() {
        el.style.display = "none";
        removeEventListener("pointermove", onMove as EventListener);
        removeEventListener("mousemove", onMove as EventListener);
      },
      destroy() {
        this.disable();
        el.remove();
        document.getElementById("cursor-halo-style")?.remove();
        document.getElementById("cursor-halo-script")?.remove();
        delete window.__cursorHalo;
      },
    };

    return () => {
      removeEventListener("pointermove", onMove as EventListener);
      removeEventListener("mousemove", onMove as EventListener);
    };
  }, []);

  return (
    <style id="cursor-halo-style">{`
      #cursor-halo {
        position: fixed;
        inset: 0;
        pointer-events: none;
        z-index: 2147483647;
        background: radial-gradient(
          80px at var(--mx, 50%) var(--my, 50%),
          rgba(5, 150, 105, 0.22) 0%,
          rgba(5, 150, 105, 0.14) 35%,
          rgba(5, 150, 105, 0.06) 60%,
          transparent 85%
        );
        transition: background 0.06s linear;
      }
      /* Somente desktop / mouse real */
      @media (hover: none), (pointer: coarse) {
        #cursor-halo {
          display: none;
        }
      }
    `}</style>
  );
}
