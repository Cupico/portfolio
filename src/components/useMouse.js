import { useEffect } from "react";


export function useMouse() {
  useEffect(() => {
    const mouseEffect = (e) => {
      const cursor = document.getElementById("cursor-bg");
        cursor.style.display = "block";
      cursor.animate(
        {
          top: e.pageY + "px",
          left: e.pageX + "px",
        },
        {
          fill: "forwards",
        }
      );
    };
    window.addEventListener("mousemove", (e) => {
      mouseEffect(e);
    });

    return () => {
      window.removeEventListener("mousemove", (e) => {
        mouseEffect(e);
      });
    };
  }, []);

  return null;
}
