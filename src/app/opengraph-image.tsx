import { ImageResponse } from "next/og";

export const alt = "Sheece Borgi - Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#02120a",
          color: "#fff9e5",
          border: "8px solid #00f57a",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 66,
                height: 66,
                backgroundColor: "#00f57a",
                color: "#02120a",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              SB
            </div>
            <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
              SHEECE BORGI
            </div>
          </div>
          <div
            style={{
              display: "flex",
              border: "3px solid #ffa629",
              color: "#ffa629",
              padding: "10px 18px",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            PORTFOLIO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700 }}>
            SOFTWARE
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              backgroundColor: "#00f57a",
              color: "#02120a",
              padding: "6px 20px",
              fontSize: 84,
              fontWeight: 700,
            }}
          >
            ENGINEER
          </div>
          <div style={{ display: "flex", marginTop: 10, fontSize: 27, color: "#ccc6b3" }}>
            Enterprise SaaS / Cloud Infrastructure / CI/CD
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "3px solid #fff9e5",
            paddingTop: 24,
            fontSize: 22,
            color: "#ccc6b3",
          }}
        >
          <div style={{ display: "flex" }}>5+ years shipping</div>
          <div style={{ display: "flex" }}>sheeceborgi@gmail.com</div>
        </div>
      </div>
    ),
    size,
  );
}
