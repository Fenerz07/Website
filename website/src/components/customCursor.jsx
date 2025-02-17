'use client';

import { useEffect, useState } from "react";
import styles from "../styles/customCursor.module.css";

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return <div className={styles.cursor} style={{ left: `${position.x}px`, top: `${position.y}px` }} />;
}
