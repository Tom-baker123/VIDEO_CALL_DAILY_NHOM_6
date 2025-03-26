import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DailyIframe from "@daily-co/daily-js";
import { auth } from "../context/FirebaseConfig";

export default function Meeting() {
  const { id } = useParams();
  const navigate = useNavigate();
  const callFrameRef = useRef(null);

  useEffect(() => {
    const domain = "https://nhom-6-thu-4-sang.daily.co/";

    if (callFrameRef.current) {
      console.log("Daily still duplicate");
      return;
    }

    // Kiểm tra trạng thái đăng nhập
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login");
      } else {
        callFrameRef.current = DailyIframe.createFrame({
          iframeStyle: {
            position: "fixed",
            top: "0",
            width: "100%",
            height: "100vh",
            border: "0",
            zIndex: 9999,
          },
          showLeaveButton: true,
          showFullscreenButton: true,
        });

        callFrameRef.current.join({
          url: `${domain}${id}`,
          userName: user.displayName || "Guest",
        });

        callFrameRef.current.on("left-meeting", () => {
          navigate("/");
        });
      }
    });

    return () => {
      if (callFrameRef.current) {
        callFrameRef.current.destroy();
        callFrameRef.current = null;
      }
    };
  }, [id, navigate]);

  return <div></div>;
}
