"use client";

import { useSpotify } from "@/hooks/useSpotify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const TokenProvider = () => {
  const spotify = useSpotify();
  const router = useRouter();

  const CLIENT_ID = "99650d96c556427f86e309ff37ec9926";
  const CLIENT_SECRET = "478845abdde340f08c4906cafda05770";

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
