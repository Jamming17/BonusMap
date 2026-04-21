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
    },
    {
        date: "29th March",
        day: 2,
        visits: [
            {
                title: "Kauptún",
                text: [
                    <>
                        For day two, we decided to visit every Garðabær Bónus plus one of the two Hafnarfjördur ones. This trip involved minimal bus trips (the buses are less
                        frequent on weekends) and <i>a lot</i> of walking; more than we really realised!
                    </>,
                    <>
                        We started by getting the bus to IKEA in Garðabær. Fun fact: IKEA is Iceland's most popular restaurant for locals as it has very affordable food. I visited
                        last time I was here and it was very good for the price. The first Bónus store of today is right next to the IKEA car park and the bus dropped us off virtually right
                        outside it.
                    </>,
                    <>
                        From this Bónus store I bought lunch from the bakery. I bought a pizza ring and two doughnuts, one for me and one for Tómas. The pizza ring was a little too expensive
                        for what it was, I thought, but the doughnuts were great!
                    </>
                ],
                images: [ ["kauptun", "Bónus, Kauptún"], ["kauptun-s", ""], ["kauptun-f", "Pizza ring and doughnuts"], ["kauptun-f2", "Me munching on the pizza ring"], ["kauptun-a1", "Outskirts of Garðabær"] ]
            },
            {
                title: "Helluhraun",
                text: [
                    <>
                        After a veryyyy long detour around the outskirts of Garðabær, we ended up wandering around random streets in Hafnarfjörður. Eventually, we found our way to
                        our next Bónus in north Hafnarfjörður: Helluhraun. Unfortunately, the weather was pretty rough on the way to this one, so I have my hood up!
                    </>,
                    <>
                        At this Bónus, I bought some Rúgbrauð. This is a traditional Icelandic rye bread made with little flour (as it was hard to obtain wheat here) and is usually served with butter.
                        I have tried this bread before on one of my previous visits, and in my opinion it is okay but not something I'd eat regularly. Definitely worth a try though!
                        This time though, the Rúgbrauð is a gift for my friend Alex who asked for some without actually knowing what it is, which I thought was quite funny!
                    </>
                ],
                images: [ ["helluhraun", "Bónus, Helluhraun"], [ "helluhraun-s", "" ], [ "helluhraun-f", "Rúgbrauð - Icelandic rye bread"] ]
            },
            {
                title: "Miðhraun",
                text: [
                    <>
                        For the next Bónus, we had to walk back towards IKEA in Garðabær. The Miðhraun Bónus is mainly designed for vehcile access and doesn't really have
                        pedestrian access in mind, but it is doable, it's just a tricky walk! It took us a very long time to get to this one...
                    </>,
                    <>
                        At this Bónus, I didn't buy a food item. Instead, I bought myself the retro Bónus hoodie, featuring the old Bónus logo from before it was changed in 2021.
                        I had been looking out for this hoodie at some of the other Bónus stores, but had had no luck. But I managed to find it at this one!
                    </>,
                    <>
                        On the way to the next Bónus, we walked north up through Garðabær's lava fields. These are rocky hills made of cooled lava from volcanic activity thousands
                        of years ago. It is dangerous to walk over lava fields like these due to loose rocks, big drops and holes, but this one has a path leading right through it.
                    </>
                ],
                images: [ ["miðhraun", "Bónus, Miðhraun"], ["miðhraun-s", ""], ["miðhraun-f", "Retro Bónus hoodie"], ["miðhraun-a1", "Garðabær lava fields"], ["miðhraun-a2", ""], ["miðhraun-a3", ""] ]
            },
            {
                title: "Garðatorg",
                text: [
                    <>
                        The final Bónus of day two was the Bónus shop in Garðatorg. Garðatorg has a nice plaza with some parking and a few other shops around. But of
                        course Bónus was our priority.
                    </>,
                    <>
                        At this last Bónus, I spotted some Bónus branded ice cream. It was simple vanilla ice cream with sprinkles, but it was very good! We walked home after
                        this Bónus which took another 30 minutes or so, but the weather was cold enough to keep the ice cream in good condition! We also spotted a rainbow on
                        the way back! It faded a bit before I managed to get a good picture, but you can still see it!
                    </>
                ],
                images: [ ["garðatorg", "Bónus Garðatorg"], ["garðatorg-s", ""], ["garðatorg-f", "Bónus ice cream"], ["garðatorg-a1", "Rainbow!"] ]
            }
        ]
    },
    {
        date: "30th March",
        day: 3,
        visits: [
            {
                title: "Kringlan",
                text: [
                    <>
                        Today, we visited a few Bónus stores that had left a bit of a hole in the ones we already visited. We got driven into Reykjavík by Tómas's mum as Tómas
                        and his family needed to go to the dentist. After that, we walked to Reykjavík's main shopping centre, Kringlan, which has a small Bónus on its
                        second floor!
                    </>,
                    <>
                        The shopping centre itself is very cool and quite large. Similarly to Smáralind in Kópavogur, a large portion of the shopping centre is made up of
                        clothing shops which aren't really for me, but there are some other cool shops there too!
                    </>,
                    <>
                        From Bónus in Kringlan, I bought some Súkkulaðikex: chocolate biscuits. I believe they are going to be a chocolate digestive-style biscuit, but I am
                        waiting to open them when I am back in England.
                    </>,
                    <>
                        On the way out of Bónus, we saw a Bónus lorry parked next to the shopping centre! This is the first one of these I have seen, so I had to take a picture!
                    </>
                ],
                images: [ ["kringlan", "Bónus, Kringlan"], ["kringlan-s", ""], ["kringlan-f", "Súkkulaðikex"], ["kringlan-a1", "Kringlan shopping centre"], ["kringlan-a2", "Bónus lorry!"] ]
            },
            {
                title: "Skeifan",
                text: [
                    <>
                        Skeifan is an area in Reykjavík with a lot of busy main roads around it making it quite noisy. There are a ton of shops and places to eat around, including
                        a Bónus store.
                    </>,
                    <>
                        From this Bónus, I bought some Daim bits. Daim bars are my number one favourite chocolate bar, and here in Iceland there are a few more Daim products
                        available other than just the bar. These Daim bar bits are small pieces of Daim coated in chocolate and are really yummy!
                    </>,
                    <>
                        Not far from the Bónus store in Skeifan, there is a small shopping area with a couple of really cool shops. One is a Pokémon shop where Tómas bought this
                        Umbreon plushie for me, my favourite Pokémon. Thank you Tómas ❤️! The other is a shop filled with merchandise from popular books, films, TV, games,
                        and more; very similar to Forbidden Planet or HMV in England.
                    </>
                ],
                images: [ ["skeifan", "Bónus, Skeifan"], ["skeifan-s", ""], ["skeifan-f", "Daim bites"], ["skeifan-bre", "Adorable Umbreon!"] ]
            },
            {
                title: "Nýbýlavegur",
                text: [
                    <>
                        From around Skeifan, we took the bus back to Kópavogur, this time stopping more towards the north of the city. We walked up from the stop, stopping to see
                        some birds on the way.
                    </>,
                    <>
                        I am now running out of things I want to buy! But I still have to make sure I get something from each Bónus. I have always been a fan of the weird Haribos
                        you can get in Iceland, though none of them are actually Icelandic, they are all Danish and distributed across the nordic countries. This one, "Click Mix",
                        is a mix of sour sweets and liquorice.
                    </>,
                    <>
                        After leaving our final Bónus of the day, we walked further up the hill to go to the bus stop. On the hill is a very Icelandic church with crazy modern
                        geometry: Kópavogskirkja. Unfortunately, I forgot to snap a picture of it, but if you are curious, google Kópavogskirkja!
                    </>
                ],
                images: [ ["nybylavegur", "Bónus, Nýbýlavegur"], ["nybylavegur-s", ""], ["nybylavegur-f", "Danish Haribos"] ]
            },
            {
                title: "Breaking open the Bónus",
                text: [
                    <>
                        This evening I decided to break open the chocolate Bónus! Oh my gosh it has a lot of sweets inside! The sweets are mostly gummy (including some weird gummy)
                        fingers. There are also some chocolate-coated raisins and toffees and a few chewy liquorice things.
                    </>
                ],
                images: [ ["chocolate-bonus-broken", "R.I.P. Chocolate Bónus"] ]
            }
        ]
    },
    {
        date: "1st April",
        day: 4,
        visits: [
            {
                title: "Smiðjuvellir, Akranes",
                text: [
                    <>
                        This was my first Bónus outside of the capital region in Iceland. I went on a short trip with Tómas and his mum and sister to Akranes which is a city just
                        north of Reykjavík. We drove past the mountains Esjan and Akrafjall. There is an underwater road tunnel that stretches six kilometers underneath Hvalfjördur
                        (a fjord) that cuts the journey time to Akranes in half.
                    </>,
                    <>
                        Our first stop in Akranes was of course Bónus, and it was really just like any other Bónus to be honest! From it, I bought some Hraun wafers, another great
                        snack from the company Góa. These are for my dad as he really loves them!
                    </>,
                    <>
                        Next, we walked down towards the coast and on the way we passed a bakery. I originally had my eye on some doughnuts (I love doughnuts) but Tómas and I both
                        ended up buying a Vínarbrauð, which as far as I can tell is Icelandic, but the literal translation is "Viennese bread" and according to my research is
                        categorised as a "Danish pastry". Still, I have never seen these particular pastries elsewhere and I can tell you they are sooooo good. This one is topped
                        with sugar and icing, but some have nuts among other toppings too!
                    </>,
                    <>
                        After eating, Tómas and I walked down to the beach at the edge of the city, and had a stroll along the black and gold sands. We then sat for a while in
                        Akranesvöllur (Akranes stadium) - which to me looked slightly abandoned - before heading home.
                    </>
                ],
                images: [ ["akranes", "Bónus, Smiðjuvellir, Akranes"], ["akranes-s", ""], ["akranes-f", "Hraun Wafers"], ["akranes-esjan", "Esjan"], ["akranes-akrafjall", "Akrafjall"], ["akranes-vinarbrauð", "Vínarbrauð"], ["akranes-statue", "Statue in the middle of Akranes"], ["akranes-beach", "Akranes Beach"], ["akranes-beach-s", ""], ["akranes-vollur", "Akranesvöllur"] ]
            },
            {
                title: "Bjarkarholt",
                text: [
                    <>
                        On the way back from Akranes, we made a stop in Mosfellsbær (actually my first time visiting) to go to the Bjarkarholt Bónus. Tómas and I needed something
                        for dinner, so we stopped at Bónus to get something.
                    </>,
                    <>
                        We spent a long time in this Bónus looking for ingredients! We had decided to make chicken nuggets, and we bought some herbs and spices to help flavour them.
                        We did kinda have to stop by Krónan to get the missing ingredients though... Sorry, Bónus!
                    </>
                ],
                images: [ ["bjarkarholt", "Bónus, Bjarkarholt"], ["bjarkarholt-s", ""], ["bjarkarholt-f", "Herbs and spices"], ["bjarkarholt-f2", "Our chicken nuggets!"] ]
            }
        ]
    },
    {
        date: "2nd April",
        day: 5,
        visits: [
            {
                title: "Larsenstræti, Selfoss",
                text: [
                    <>
                        In preparation for an upcoming mini trip (keep reading below!), Tómas and I made our way to his parents' farmhouse in the Flóahreppur area on the south coast. On the way there,
                        we stopped off in Selfoss for dinner, but most importantly for Bónus!
                    </>,
                    <>
                        Around April Fools' Day, Bónus released a limited-edition product which I received word of via email the previous day. They were selling only 2000 cans of
                        Icelandic air. Yes, literally air in a can and nothing else. Icelandic air is actually a novelty product sold in many souvenir shops across the country,
                        but it was never of real interest to me until they put the adorable pink pig on the front of it! The cans sold out extremely quickly, though Tómas and I were
                        lucky enough to be able to acquire some in the Bónus in Selfoss which is one of the most tourist-heavy Bónus stores. I have number 1702 and Tómas has both
                        numbers 1701 and 1567. The back of the can also has some funny text worth reading!
                    </>,
                    <>
                        That evening after dark, I was lucky enough to see the northern lights in the sky above the farmhouse. Despite having visited Iceland three times now, this was my
                        first time seeing the northern lights properly in the sky! It was a bit cloudy out, but I would say the view was pretty great overall.
                    </>
                ],
                images: [ ["selfoss", "Bónus, Larsenstræti, Selfoss"], ["selfoss-s", ""], ["selfoss-f", "Bónus loft (air)"], ["selfoss-f2", ""], ["selfoss-a3", "Snow on the way to Selfoss"], ["selfoss-a1", "View from the farmhouse"], ["selfoss-a2", "The northern lights!"] ]
            }
        ]
    },
    {
        date: "3rd-4th April - Vestmannaeyjar",
        day: 6,
        visits: [
            {
                title: "Bónus, Vestmannaeyjabær",
                text: [
                    <>
                        On the 3rd and 4th of April, Tómas and I took a mini trip to the Westman Islands, or Vestmannaeyjar in Icelandic, on the south coast of the country. The
                        island has one Bónus to the north of the main island Heimaey's town Vestmannaeyjabær. This Bónus is pretty cool as it has puffins with the pig on the
                        display out the front of the shop, as Vestmannaeyjar is known for having a large number of puffins (though sadly, not at this time of year; we were slightly
                        too early).
                    </>,
                    <>
                        We actually visited this Bónus a few times while we were there to grab some food and other supplies for our hotel (as the hotel was pretty cheap and didn't
                        have soap!). The main thing I want to highlight is these Bónus crisps. Bónus actually has three different flavours of crisps: paprika (which are the best and
                        the ones we bought), salt and pepper, and bacon (which I don't personally like, and also that's just wrong!).
                    </>
                ],
                images: [ ["vestmannaeyjabaer", "Bónus, Vestmannaeyjabær"], ["vestmannaeyjabaer-s", ""], ["vestmannaeyjabaer-f", "Bónus crisps"] ]
            },
            {
                title: "Vestmannaeyjar Day 1",
                text: [
                    <>
                        There is only one ferry that goes to and from the Westman Islands, and two different routes that it can take: a quick 30-minute route from a port called
                        Landeyjahöfn (which is literally just a port as close to the Westman Islands as you can get on the mainland) and a three-hour route from a town called
                        Þorlákshöfn which is further west along the south coast. When we booked, only the longer three-hour route from Þorlákshöfn was running so we chose that. We
                        were driven and dropped off at the port in Þorlákshöfn and set sail on our three-hour voyage, where we both learned that we suffer from seasickness! We both
                        assumed we wouldn't, but neither of us had been on such a long voyage with such rough seas (the ferry was rocking a lot). Luckily, neither of us were actually
                        sick (though it was very close for me), but it was a miserable journey!
                    </>,
                    <>
                        After arriving safely at Vestmannaeyjar, we walked straight to Bónus to buy some food, even though neither of us were particularly hungry. We then had some
                        time to kill before we could arrive at our hotel, so we went on a small walk around a short hiking route on the north west of the island. Even though there
                        were no puffins, there were still a lot of birds around that we enjoyed finding. To Tómas's surprise, the island was full of pigeons! We also saw starlings
                        and a redwing, fulmars and kittiwakes in the distance on the cliffs, and common eiders in the sea which looked so super cute!
                    </>
                ],
                images: [ ["vest-ferry", "Boarding the ferry at Þorlákshöfn"], ["vest-ferry2", "Other boats at Þorlákshöfn"], ["vest-ferry3", "Vestmannaeyjar from the ferry"], ["vest-ferry4", ""], ["vest-puffinsign", "Cute puffin signs"], ["vest-bakerybench", "R.I.P. Magnúsarbakarí"], ["vest-d1hike1", "A view of the land from our first hike"], ["vest-d1hike2", "Distant cliffs"], ["vest-d1hike3", "Eiders"] ]
            },
            {
                title: "",
                text: [
                    <>
                        We booked a room in a guesthouse called the Westman Islands Inn. It was alright for the price, but the floor was not cleaned that well before we got there so
                        maybe look for another place if you plan on staying. We did have a great view of Bónus out the window though!
                    </>,
                    <>
                        After some time relaxing, we walked around the town of Vestmannaeyabær a bit. We saw some strange statues in the parks. We decided that we wanted to take a closer
                        look at the island's main volcanoes: Eldfell and Helgafell. Even though Helgafell is bigger, Eldfell is the volcano responsible for the huge eruption on Heimaey in
                        1973 that destroyed many homes and covered the whole town in meters of ash. And it just so happens to have a walking route!
                    </>,
                    <>
                        Our walk up Eldfell was a little dangerous as we walked up a quicker route and not the main path. The sites were amazing though. When we were around the crater area
                        on the inside of the volcano, we made the mistake of accidentally deviating off of the path and just up the side of the volcano as the way the snow had fallen
                        made it look like a path. We then had to slowly backtrack down the edge of the volcano, but I did manage to get some awesome pictures.
                    </>,
                    <>
                        To finish the day off, we had dinner at a pizza restaurant called Pizza 67. We couldn't help but make jokes about six-seven there, but the place was actually
                        really good and I would 100% recommend a visit if you ever come to the Westman Islands.
                    </>
                ],
                images: [ ["vest-hotelview", "Our hotel view of Bónus"], ["vest-puffinart", ""], ["vest-statue", "Funky statue"], ["vest-helgafell", "Helgafell volcano"], ["vest-eldfell", "Eldfell volcano"], ["vest-eldfell2", "A view of Mýrdalsjökull on the mainland"], ["vest-view", "Great view of Vestmannaeyjabær"], ["vest-view-s", ""], ["vest-eldfell3", "Climbing Eldfell..."], ["vest-eldfell4", "Eldfell's crater"], ["vest-eldfell5", "The scary downclimb"], ["vest-67", "Pizza 67"], ["vest-672", "My BBQ Pizza"] ]
            },
            {
                title: "Vestmannaeyjar Day 2",
                text: [
                    <>
                        On the second day, we started with a long hike around the north west area of the Heimaey islands, after visiting the pharmacy to get some seasickness medication!
                        Around the cliffs we could hear the constant caws of fulmars and we
                        could see them at the top of the cliffs. We also saw the ocean crashing around the cliffs, some kind of old house museum (that was closed) and a funky memorial.
                    </>,
                    <>
                        After that and some Bónus lunch, we headed to Eldheimar, a museum on the Eldfell eruption in 1973. Inside it, they have a house that was buried by ash and rubble in
                        its original position (the museum was built around it). There is an audio tour as you walk around the museum to teach you about the eruption and all its history. I would
                        100% recommend a visit.
                    </>,
                    <>
                        The museum also teaches you about Surtsey, Vestmannaeyjar's newest island which formed from an underwater volcanic eruption in 1963. The island is completely off-limits
                        to any people as scientists are studying how plant life begins to grow on a newly formed island. Surtsey is predicted to erode down into just a small island in the next
                        one hundred years or so. Surtsey is pictured on the right of the first image in the slideshow to the side.
                    </>,
                    <>
                        After the museum, we made a quick stop to get some ice cream from Eydís Ísbúð which was packed full of so many toppings you couldn't see the ice cream underneath.
                    </>,
                    <>
                        During our museum visit, we received a message from the ferry people that our ferry that afternoon had been redirected from Þorlákshöfn to Landeyjarhöfn instead. This
                        was good and bad as it meant our journey by boat was going to be only 30 minutes instead of 3 hours (so no seasickness!) but we had to somehow get back home after landing
                        at Landeyjarhöfn which is just a ferry port and nothing more. Luckily, Tómas's brother picked us up in the car and we made it safely home with some pretty mountain and
                        glacier views on the drive back.
                    </>
                ],
                images: [ ["vest-2view3", "Vestmannaeyjar's Islands"], ["vest-fulmar", "A fulmar over the cliffs"], ["vest-hut-museum", ""], ["vest-2view1", ""], ["vest-2view2", ""], ["vest-2view4", ""], ["vest-2statue", "Memorial"], ["vest-2view5", ""], ["vest-2view6", ""], ["vest-2view7", ""], ["vest-2view8", ""], ["vest-museum-house1", "The house in Eldheimar"], ["vest-museum-house2", ""], ["vest-museum-house3", ""], ["vest-museum-boards", ""], ["vest-is", "Ice cream at Eydís"], ["vest-home1", "Mountains on the drive back"], ["vest-home2", ""] ]
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
                    <div className={`text-image`}>

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
                                    <div>
                                        <a href={`/adventures/day${day}/${img[0]}.jpg`} target="_blank" rel="noopener noreferrer" className="image-container">
                                            <img
                                                key={i}
                                                src={`/adventures/day${day}/${img[0]}.jpg`}
                                                onLoad={(e) => {
                                                    const el = e.currentTarget;
                                                    if (el.naturalHeight > el.naturalWidth) {
                                                        el.classList.add("portrait");
                                                    }
                                                }}/>
                                            </a>
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