import Cal from "@calcom/embed-react";
import "../../styles/calendar/calendarpage.css";

const RainCal = () => {
    return (
        <main className="cal-page">
            <div className="cal-wrapper">
                <Cal
                    calLink="raindfwphotos/request-availability"
                    config={{
                        layout: "week_view",
                        theme: "dark",
                    }}
                    style={{
                        width: "100%",
                        height: "calc(100vh - 96px)",
                        overflow: "auto",
                    }}
                />
            </div>
        </main>
    );
};

export default RainCal;