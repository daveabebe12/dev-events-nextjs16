export interface Event {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
}

export const events: Event[] = [
  {
    title: "React Conf 2026",
    image: "/images/event1.png",
    slug: "react-conf-2026",
    location: "Henderson, Nevada, USA",
    date: "2026-08-19",
    time: "09:00 AM PDT",
  },
  {
    title: "Google I/O 2026",
    image: "/images/event2.png",
    slug: "google-io-2026",
    location: "Mountain View, California, USA",
    date: "2026-05-12",
    time: "10:00 AM PDT",
  },
  {
    title: "GitHub Universe 2026",
    image: "/images/event3.png",
    slug: "github-universe-2026",
    location: "San Francisco, California, USA",
    date: "2026-10-14",
    time: "09:00 AM PDT",
  },
  {
    title: "JSConf EU 2026",
    image: "/images/event4.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "2026-06-26",
    time: "09:30 AM CEST",
  },
  {
    title: "AWS re:Invent 2026",
    image: "/images/event5.png",
    slug: "aws-reinvent-2026",
    location: "Las Vegas, Nevada, USA",
    date: "2026-12-01",
    time: "08:00 AM PST",
  },
  {
    title: "ETHGlobal Hackathon 2026",
    image: "/images/event6.png",
    slug: "ethglobal-hackathon-2026",
    location: "New York City, New York, USA",
    date: "2026-09-18",
    time: "10:00 AM EDT",
  },
];
