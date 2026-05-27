import { useEffect, useRef } from "react";
import Cal from "@calcom/embed-react";
import "../styles/calendar/Calendars.css";

interface CalendarProps {
    calLink: string;
    fullscreen?: boolean;
    layout?: "month_view" | "week_view" | "column_view";
}

const Calendar = ({
                      calLink,
                      fullscreen = false,
                      layout = "week_view",
                  }: CalendarProps) => {
    const isMobile = window.innerWidth < 700;

    const hoveringCal = useRef(false);
    const guardingStartupScroll = useRef(true);
    const initialScrollY = useRef(0);

    useEffect(() => {
        initialScrollY.current = window.scrollY;

        let frame = 0;
        const startedAt = performance.now();

        const holdInitialPosition = () => {
            const elapsed = performance.now() - startedAt;

            if (elapsed < 2500) {
                window.scrollTo(0, initialScrollY.current);
                frame = requestAnimationFrame(holdInitialPosition);
                return;
            }

            guardingStartupScroll.current = false;
        };

        frame = requestAnimationFrame(holdInitialPosition);

        const handleBlur = () => {
            if (isMobile) return;
            if (guardingStartupScroll.current) return;
            if (!hoveringCal.current) return;

            window.setTimeout(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight,
                    behavior: "smooth",
                });

                window.setTimeout(() => {
                    if (document.activeElement?.tagName !== "IFRAME") {
                        window.focus();
                    }
                }, 900);
            }, 350);
        };

        window.addEventListener("blur", handleBlur);

        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener("blur", handleBlur);
        };
    }, [isMobile]);

    return (
        <div
            className={
                fullscreen
                    ? "cal-embed cal-embed-fullscreen"
                    : "cal-embed"
            }
            onMouseEnter={() => {
                if (isMobile) return;
                hoveringCal.current = true;
            }}
            onMouseLeave={() => {
                if (isMobile) return;
                hoveringCal.current = false;
            }}
        >
            <Cal
                calLink={calLink}
                config={{
                    layout,
                    theme: "dark",
                }}
                style={{
                    width: "100%",
                    height: fullscreen
                        ? "100vh"
                        : isMobile
                            ? undefined
                            : "1200px",
                    overflow: isMobile ? "visible" : "auto",
                }}
            />
        </div>
    );
};

export default Calendar;