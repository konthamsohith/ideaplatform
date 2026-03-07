"use client";

import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function VideoCallUI({
    roomID,
    userID,
    userName,
    mode = "GroupCall", // 'OneONoneCall' or 'GroupCall'
}: {
    roomID: string;
    userID: string;
    userName: string;
    mode?: "OneONoneCall" | "GroupCall";
}) {
    const containerRef = useRef<HTMLDivElement>(null);

    const zpRef = useRef<any>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Fetch credentials from env
        const appID = Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID);
        // Note: For production, do NOT expose SERVER_SECRET to the client. This is for testing/demo.
        // We will fetch the token from an API route.
        const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET || "f4756ef508c33ea959b127f24f9787bd";

        if (!appID) {
            console.error("Missing Zego APP ID");
            return;
        }

        const runZego = async () => {
            // Clean up any existing instance before starting a new one
            if (zpRef.current) {
                zpRef.current.destroy();
            }

            // 1. Generate a Kit Token for test
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomID,
                userID,
                userName
            );

            // 2. Create instance object from kit token
            const zp = ZegoUIKitPrebuilt.create(kitToken);
            zpRef.current = zp;

            // 3. Start the call
            zp.joinRoom({
                container: containerRef.current,
                sharedLinks: [
                    {
                        name: 'Copy Call Link',
                        url: window.location.origin + window.location.pathname + '?roomID=' + roomID,
                    },
                ],
                scenario: {
                    mode: mode === "OneONoneCall" ? ZegoUIKitPrebuilt.OneONoneCall : ZegoUIKitPrebuilt.GroupCall,
                },
                showScreenSharingButton: true, // Enable screen sharing
                showPreJoinView: false,
                turnOnMicrophoneWhenJoining: false,
                turnOnCameraWhenJoining: false,
            });
        };

        runZego();

        return () => {
            if (zpRef.current) {
                zpRef.current.destroy();
                zpRef.current = null;
            }
        };

    }, [roomID, userID, userName, mode]);

    return (
        <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
    );
}
