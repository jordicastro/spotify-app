"use client";

import { useSpotify } from "@/hooks/useSpotify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const TokenProvider = () => {
  const spotify = useSpotify();
  const router = useRouter();

  const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;
  const CLIENT_SECRET = process.env.NEXT_PUBLIC_CLIENT_SECRET;
  // const CLIENT_ID = "";
  // const CLIENT_SECRET = ""

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

  useEffect(() => {
    const fetchUserToken = async () => {

    }

    fetchUserToken();
  }, []);

  return <></>;
};

export default TokenProvider;
