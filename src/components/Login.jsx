import React from "react";
import styled from "styled-components";

export default function Login() {
  const handleClick = () => {
    const clientId = "85c377fdd76647fe877fa37ef5d254e8";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      'user-read-email',
      'user-read-private',
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-playback-position',
      'user-top-read',
      'user-read-recently-played',
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      ""
    )}&response_type=token&show_daialog=true`;
  };
  return (
    <Container>
      <img
        src="https://cdn.dribbble.com/users/60166/screenshots/5394073/music_logo.jpg"
        alt="logo"
      />
      <button onClick={handleClick}>Connect Musicy</button>
    </Container>
  );
}

//#ececec bg color

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #ececec;
  gap: 1.25rem;
  img {
    height: 30vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: #3e3e3e;
    color: #ececec;
    font-size: 1.25rem;
  }
`;
