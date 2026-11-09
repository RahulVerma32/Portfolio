import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div className="surface github-calendar">
      <GitHubCalendar
        username="RahulVerma32"
        blockSize={12}
        blockMargin={4}
        color="#a86245"
        fontSize={13}
      />
    </div>
  );
}

export default Github;
