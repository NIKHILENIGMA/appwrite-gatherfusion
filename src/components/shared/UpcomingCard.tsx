import type { FC } from "react";

interface UpcomingEvent {
  title: string;
  date: string;
  img: string;
}

const UPCOMING_LIST: UpcomingEvent[] = [
  {
    title: "Tech Conference 2024",
    date: "July 15, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGJOjkPN0-RIHmJeleWMfftXQH4PpiVT3DISPtkPNTKksydUYuHvfn3TUYGpPO-PO_thHeigK2Z9snE99JpSmKjsn-4-tYofT7lXhq7r-T8i-QzRd2tB1G9cc8ppGqZjImuofU5XaftsMWqow_FXQUMT_D1e4g7TxeZWs5ao5TczXLOsmN038HFPLpPTdg0Zom5ago95Rwa7DNw9nxuPheI2yVmyxXLWu9wvaDip1BIShxI5PIzeXacXMZviPmJf32fzdVAHOBxgE",
  },
  {
    title: "Summer Music Festival",
    date: "August 5, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAo6p7HOC56QPD7w0EjYO45188nvn3j1AAFRtsK0r7arIRJJYLwByA9N6NA3EYsaO5f3Ex3pXgtLoJXQpLTEl2DK30xBU7XxLJlq6DL1NWPOgnLekqt8rPJOiyWjtuC2-L5VMWwvTBw_CRTv4kZKD3T7O8tsaI2J8ZlPUWaCuSy5XBUqrUVllEKrEDqUokexKIByi0nc37IVL-8Zf-z2UtnIfX5aGM9ARbyknJIgFPkKN2r-M1_IyxoOBrFHX03f_1dcBAvSs_5LvY",
  },
  {
    title: "Art Exhibition",
    date: "September 20, 2024",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsdnwL1_WNad-nkogCCUknHfMTAYfmNWJ5-Lp7et5Gba13dcRSo1Z6GwWzQUs4EyjcpoAbJj2VTHOgKLT4hLYgPTiOz0MbCwy7TliMB3Y5NrKcsKJY0krw-AMzIdw2o3TCKbWBNkzuvK5IkXlTczrp2wJEH6XRocL2ih2NofeL2ig4fHEeCH93p9Qm-RVgAL2Ys0t5wwjr_XAlIKMYiW7lZ3LL5Ba7zuQKos0ymlGUgncDS2nZBwjtq3lv7BnO3Xg-0Fs1lcCCv-w",
  },
];

const UpcomingCard: FC = () => {
  return (
    <div className="relative">
      <div className="flex space-x-6 overflow-x-auto pb-4 no-scrollbar">
        {UPCOMING_LIST.map((event, i) => (
          <div key={i} className="flex-shrink-0 w-64">
            <div className="group relative flex flex-col overflow-hidden rounded-xl bg-[var(--secondary-color)] shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--primary-color)]/20">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover"
                style={{ backgroundImage: `url(${event.img})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-lg font-semibold text-white">
                  {event.title}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {event.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingCard;
