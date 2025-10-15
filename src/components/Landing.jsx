import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Tic-Tac Shuffle!</h1>
      <p className="mb-6">
        The game is like Tic-Tac-Toe, but only the last 6 moves stay on the board.
        Older moves disappear, so keep an eye on the board and plan ahead!
      </p>
      <div className="flex gap-4">
        <Link
          to="/play"
          className="px-6 py-2 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600"
        >
          Play Now
        </Link>
        <a
          href="https://google.com"
          className="px-6 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600"
        >
          Leave
        </a>
      </div>
    </div>
  );
}

export default Landing;
