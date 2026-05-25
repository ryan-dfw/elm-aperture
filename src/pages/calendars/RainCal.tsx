import Cal from "@calcom/embed-react";
import "../../styles/calendar/calendarpage.css";

const RainCal = () => {
    return (
        <main className="cal-page">
            <Cal
                calLink="raindfwphotos/request-availability"
                config={{
                    layout: "week_view",
                    theme: "dark",
                }}
                style={{
                    width: "100vw",
                    height: "calc(100vh - 96px)",
                    overflow: "auto",
                }}
            />
        </main>
    );
};

export default RainCal;