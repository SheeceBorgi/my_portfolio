export function OpeningScreen() {
  return (
    <div
      className="opening-screen"
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div className="opening-screen__card">
        <div className="opening-screen__topline">
          <span>Portfolio / Dev</span>
          <span>01 / 01</span>
        </div>

        <div className="opening-screen__brand">
          <span className="opening-screen__mark">SB</span>
          <div className="opening-screen__name">
            <span>Sheece</span>
            <span>Borgi</span>
          </div>
        </div>

        <p className="opening-screen__role">
          <span className="opening-screen__prompt">&gt;</span>
          Software Engineer
          <span className="opening-screen__cursor" />
        </p>

        <div className="opening-screen__progress">
          <span className="opening-screen__progress-fill" />
        </div>
      </div>
    </div>
  );
}
