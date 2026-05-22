import * as hotel from "./services/realestate/hotel";
import * as commercial from "./services/realestate/commercial";
import * as motel from "./services/realestate/motel";
import * as residential from "./services/realestate/residential";

import * as lifestyle from "./services/portrait/lifestyle";
import * as headshot from "./services/portrait/headshot";
import * as professional from "./services/portrait/professional";

import * as events from "./services/events/events";
import * as wedding from "./services/events/wedding";

export const routeTitles = {
    "/booking": "Booking",

    "/rain": "Rain",
    "/alejandro": "Alejandro",
    "/maivy": "Maivy",

    "/commercial": commercial.head.title,
    "/hotel": hotel.head.title,
    "/hotel-full": hotel.head.title,
    "/motel": motel.head.title,
    "/motel-full": motel.head.title,
    "/residential": residential.head.title,

    "/lifestyle": lifestyle.head.title,
    "/headshot": headshot.head.title,
    "/professional": professional.head.title,

    "/events": events.head.title,
    "/wedding": wedding.head.title,
} as const;