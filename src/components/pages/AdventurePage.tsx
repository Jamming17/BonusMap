import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";

import "./styles/textpage.css";

type AdventureModuleProps = {
    date: string,
    day: number,
    visits: Array<StoreVisit>
}

type StoreVisit = {
    title: string,
    text: Array<React.ReactNode>,
    images: Array<[string, string]>
}

const phase1: Array<AdventureModuleProps> = [
    {
        date: "28th March",
        day: 1,
        visits: [
            {
                title: "Smáratorg",
                text: [
                    <>
                        Our first Bónus store visit was Bónus, Smáratorg in Kópavogur. This was naturally the first Bónus to start with for us as it is within
                        easy walking distance from Tómas's house. Although we didn't head there today, this Bónus has Smáralind right next to it, Iceland's largest
                        shopping centre, and filming location of the music video of Krono's remix of Dancin by Aaron Smith.
                    </>,
                    <>
                        At this Bónus we got to discover the wonders of Bónus's Easter collection, more on this later! My first purchase on the Bónus adventure was
                        these Þristur bars which are a triple-combo of chocolate, fudge and liquorice and are super yummy. I bought two packs: one for me and one for
                        my work colleagues when I return home to England.
                    </>
                ],
                images: [ ["smaratorg", "Bónus, Smáratorg"], ["smaratorg-s", ""], ["smaratorg-f", "Þristur Chocolates"] ]
            },
            {
                title: "Fiskislóð",
                text: [
                    <>
                        After visiting our first Bónus in Kópavogur, we took the bus from the nearby bus stop all the way to the north end of Reykjavík with the intent
                        to visit four more stores before returning home. In the end, we only managed three more due to the icy ground slowing us down and a warning of
                        a snow storm later that afternoon.
                    </>,
                    <>
                        Our second store was Bónus, Fiskislóð. From this shop I bought myself some Kleinur for lunch. Kleinur are awesome Icelandic twisted doughnuts.
                        They're a little sweet and very filling and great to have for lunch. I would definitely recommend buying some for yourself if you visit!
                    </>
                ],
                images: [ ["fiskisloð", "Bónus, Fiskislóð"], ["fiskisloð-s", ""], ["fiskisloð-f", "Bónus Kleinur"] ]
            },
            {
                title: "Kjörgarður / Laugavegur",
                text: [
                    <>
                        On our way to the next Bónus, I spotted a cathedrale. This isn't Hallgrímskirkja, Reyljavík's most famous church, but I thought it was interesting
                        because out of all the crazy churches I've seen across Iceland, this is the most normal-looking one! It reminds me much more of the churches
                        we have in England.
                    </>,
                    <>
                        We also stopped at Tjörnin, or "the pond" which was absolutely full of waterfowl birds. We saw many different species of ducks, geese and swans,
                        and so many of them!
                    </>,
                    <>
                        Bónus number three was Bónus in Kjörgarður. This is a small one in Reykjavík that's quite hard to spot until you're right outside it. From
                        this one, I bought a bottle of Appelsín which, despite how its name sounds in English, is an orange-flavoured soda similar to Fanta, but
                        better in my opinion.
                    </>
                ],
                images: [ ["kjorgarður", "Bónus, Kjörgarður"], ["kjorgarður-s", ""], ["kjorgarður-f", "Appelsín"], ["kjorgarður-a1", "Landakotskirkja, Reykjavík"], ["kjorgarður-a2", "Tjörnin"] ]
            },
            {
                title: "Skipholt",
                text: [
                    <>
                        The final Bónus of the day was Bónus, Skipholt. This one is not too far from the previous one and one that Tómas has visited many times.
                    </>,
                    <>
                        From this Bónus I bought some Buffs! Góa is a brand that has many awesome snacks in Iceland, and Buffs are one of these. They actually have
                        three different types but I only bought two: one for me and one for work. They are similar to tea cakes that you can find in the UK, but the
                        marshmallow inside is really chewy. 
                    </>
                ],
                images: [ ["skipholt", "Bónus, Skipholt"], ["skipholt-s", ""], ["skipholt-f", "Buffs"] ]
            },
            {
                title: "Bónus Easter Chocolate",
                text: [
                    <>
                        Iceland has a lot of awesome chocolate at Easter. They have almost a set standard on Easter egg sizes ranging from size 1 (small) to 11 (the biggest).
                        Bónus has its own Easter eggs, and Tómas bought me a size 4 which comes with a small Easter figure on top! Also, their Easter eggs are always filled
                        with other sweets and chocolate which is awesome.
                    </>,
                    <>
                        Whilst visiting the stores I had seen a large chocolate Bónus pig weighing almost a kilogram. I was tempted to buy it but it was a little expensive!
                        But to my delight, when I got home from the first Bónus trip, Tómas's mum had bought me one as an Easter gift! I am very grateful for this amazing
                        gift. I currently have left the Bónus whole, but when I crack it open I will post the contents here too!
                    </>
                ],
                images: [ ["paskaegg", "Two Bónus Easter Eggs"], ["chocolate-bonus", "The chocolate Bónus pig!"], ["chocolate-bonus-2", ""] ]
            }
        ]
    }
]


function AdventureModule({ date, day, visits }: AdventureModuleProps) {

    return (
        <>
            <div className="sub-title">{date}</div>
            {visits.map((v, i) => (
                <div key={i}>
                    <div className="sub-sub-title">{v.title}</div>
                    <div className={`text-image`}> {/*${v.left ? "reverse" : ""}`}>*/}

                        <div className="text-content">
                            {v.text.map((t, i) => (
                                <div key={i} className="text">
                                    {t}
                                </div>
                            ))}
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            navigation
                            pagination={{ clickable: true }}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={1}
                            className="swiper"
                        >
                            {v.images.map((img, i) => (
                                <SwiperSlide>
                                    <div className="image-container">
                                        <img
                                            key={i}
                                            src={`/adventures/day${day}/${img[0]}.jpg`}
                                            onLoad={(e) => {
                                                const el = e.currentTarget;
                                                if (el.naturalHeight > el.naturalWidth) {
                                                    el.classList.add("portrait");
                                                }
                                            }}/>
                                    </div>
                                    {img[1] !== "" && <div className="caption">{img[1]}</div>}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            ))}
        </>
    );
}

function AdventurePage() {

    return(
        <>
            <div className="textpage-container">
                <div className="title" style={{marginTop: "0"}}>Adventures</div>
                <div className="text">
                    On this page you can read all about my travels with Tómas to every Bónus store across Iceland (and eventually the Faroe Islands)!
                    The page is split into "phases" which represent my individual trips out to find Bónus stores. Each phase will have a little bit
                    of context and then lists each trip we did out to go and find Bónus stores!
                </div>

                <div className="title">Phase 1</div>
                <div className="text">
                    Although this was my third trip to Iceland overall, this was the start of the Bónus adventures! I was in the country for 12 nights around Easter 2026. Here is how we got on:
                </div>
                {phase1.map((adv, i) => (
                    <AdventureModule
                        key={i}
                        day={adv.day}
                        date={adv.date}
                        visits={adv.visits}
                    />
                ))}
            </div>
        </>
    );
}

export default AdventurePage;