"use client";

import { useSpotify } from "@/hooks/useSpotify";
import { useEffect } from "react";

const TokenProvider = () => {
  const spotify = useSpotify();

  const CLIENT_ID = "";
  const CLIENT_SECRET = "";

  if (!CLIENT_ID || !CLIENT_SECRET) {
    throw new Error("CLIENT_ID or CLIENT_SECRET is undefined");
  }

  useEffect(() => {
    const fetchToken = async () => {
      const token: string = await spotify.fetchAccessToken(
        CLIENT_ID,
        CLIENT_SECRET,
      );
      console.log("token", token);
    };
    fetchToken();
  }, []);

  return <></>;
};

export default TokenProvider;
