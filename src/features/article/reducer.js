import { createSlice } from '@reduxjs/toolkit';

const articleSlide = createSlice({
    name: 'article',
    initialState: {
        data: [
            {
                "source": {
                    "id": "cnn",
                    "name": "CNN"
                },
                "author": "David Goldman, Gregory Wallace, Pete Muntean",
                "title": "FAA approves a path for Boeing 737 Max 9s to return to operations - CNN",
                "description": "Boeing CEO David Calhoun’s Wednesday was decidedly a mixed bag: The Federal Aviation Administration finally approved a set of inspection criteria for the 171 grounded 737 Max 9 planes that, if followed, could return the aircraft to service. But he also learne…",
                "url": "https://www.cnn.com/2024/01/24/business/boeing-ceo-washington/index.html",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/240124175941-boeing-sign-05142021.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2024-01-25T03:06:00Z",
                "content": "Boeing CEO David Calhouns Wednesday was decidedly a mixed bag: The Federal Aviation Administration finally approved a set of inspection criteria for the 171 grounded 737 Max 9 planes that, if followe… [+6726 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Investopedia"
                },
                "author": "Naomi Buchanan",
                "title": "4 Key Takeaways From Elon Musk's Remarks During Tesla's Earnings Call - Investopedia",
                "description": "Tesla CEO Elon Musk discussed profitability concerns, his wish for more voting control amid the artificial intelligence era, Tesla's humanoid robot, and Cybertruck deliveries after the company's earnings fell short of analysts' estimates.",
                "url": "https://www.investopedia.com/4-key-takeaways-from-elon-musk-s-remarks-during-tesla-s-earnings-call-8549480",
                "urlToImage": "https://www.investopedia.com/thmb/2hSUXuZZaRUZCBEjsVYBgNiwbqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1258741760-1bc7f77d4aa14907a27e7a265a55e314.jpg",
                "publishedAt": "2024-01-25T01:29:16Z",
                "content": `<h3>KEY TAKEAWAYS</h3><ul><li>Musk said that high interest rates contributed to low profit margins for the quarter and will continue to do so if there are no rate cuts.</li><li>The CEO reiterated recent statements that he wants 25% voting control before advancing Tesla's position in the artificial intelligence space.</li><li>Optimis, Tesla's humanoid robot, could ship as soon as 2025, according to Musk.</li><li>The issues surrounding Tesla's Cybertruck deliveries reflect a production, not a demand issue, Musk reported.</li></ul> <p>After Tesla's (TSLA) fourth-quarter earnings fell short of analyst estimates Chief Executive Officer (CEO) Elon Musk joined other company leaders on the electric vehicle (EV) maker's earning call.1 Musk touched on investor concerns including profitability, voting control of the company amid the artificial intelligence (AI) boom, Tesla's humanoid robot, and Cybertruck deliveries.</p><h3>High Interest Rates, Low Margins</h3><p>'If the interest rates come down quickly, I think margins will be good and if they don't come down quickly, they wouldn't be that good,' Musk reported.Tesla indicated that reduced vehicle prices dragged down the company's revenue in the fourth quarter. The EV maker offered significant price drops to buyers as macroeconomic conditions like high interest rates affect consumers' spending.The auto industry at large offered discounts on vehicles, led by a 25% drop in the average sale price or Tesla vehicles in December compared with a year earlier. The Fed signaled at the end of 2023, that rate cuts are expected in the second half of 2024.Musk said that 'it's not that people don't want [to buy Tesla vehicles]' they 'simply cannot afford it' in a high-interest-rate environment.</p><h3>Tesla's Humanoid Robot Could Ship As Soon As 2025</h3><p>Tesla has 'got a good chance of shipping some number of Optimus units next year,' Musk said.Optimis, Tesla's humanoid robot, has been in the works since 2022. Tesla's bot uses some of the AI technology that powers its self-driving cars. The EV maker recently shared a video of the Optimus Gen 2 walking and performing basic tasks.2Musk did note that 'there's a lot of uncertainty' as it 'is a brand new product,' but said that the company 'will be updating [the] public with progress' as the project progresses.The Tesla CEO added that he thinks that the Optimis humanoid robot has the potential to be the 'most valuable product of any kind, ever.'Cybertruck Limited by Production, Not DemandThe Cybertruck delivery issues are 'very much a production-constrained situation, not a demand-constrained situation,' according to Musk.Tesla delivered its first Cybertrucks, which were first announced in 2019, at the end of 2023. The truck led to some investors raising concerns surrounding delivery and profitability challenges.Musk said that the company 'could dramatically raise the price' to address high demand amid low supply but that it 'doesn't feel right.'The CEO indicated that Tesla expects to deliver around 250,000 Cybertrucks annually in North America.Do you have a news tip for Investopedia reporters? Please email us attips@investopedia.com</p>`
            },
            {
                "source": {
                    "id": "the-hill",
                    "name": "The Hill"
                },
                "author": "Sarah Fortinsky",
                "title": "Robitussin products recalled nationwide due to microbial contamination - The Hill",
                "description": "Robitussin manufacturer, Haleon, is voluntarily recalling eight lots of its cough syrup due to microbial contamination, the manufacturer announced Wednesday. There have been no reports of adverse events related to this recall, Haleon said in its statement. Th…",
                "url": "https://thehill.com/policy/healthcare/4428090-robitussin-products-recalled-microbial-contamination/",
                "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/09/650b6f54012515.55413060.jpeg?w=1280",
                "publishedAt": "2024-01-25T02:09:00Z",
                "content": "Skip to content\r\nRobitussin manufacturer, Haleon, is voluntarily recalling eight lots of its cough syrup due to microbial contamination, the manufacturer announced Wednesday.\r\nThere have been no repo… [+1593 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Tesla shares fall after hours, beaten out by BYD in Q4 sales - CNBC Television",
                "description": "Hosted by Brian Sullivan, “Last Call” is a fast-paced, entertaining business show that explores the intersection of money, culture and policy. Tune in Monday...",
                "url": "https://www.youtube.com/watch?v=ZaTaCHVEXz8",
                "urlToImage": "https://i.ytimg.com/vi/ZaTaCHVEXz8/maxresdefault.jpg",
                "publishedAt": "2024-01-25T02:06:41Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Bay Area tech layoffs continue despite overall economy getting AI-related boost - NBC Bay Area",
                "description": "It’s been a brutal January for many tech workers in the Bay Area, even as our overall economy gets a big AI-related boost. Scott Budman reports.Stay Connecte...",
                "url": "https://www.youtube.com/watch?v=4hapJ9RAcXE",
                "urlToImage": "https://i.ytimg.com/vi/4hapJ9RAcXE/maxresdefault.jpg",
                "publishedAt": "2024-01-25T01:57:06Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "Deadline"
                },
                "author": "Jill Goldsmith",
                "title": "Skydance Media CEO David Ellison Makes Offer For Control Of Paramount Global - Deadline",
                "description": "David Ellison’s Skydance is said to have made a preliminary offer to buy Shari Redstone’s stake in National Amusements, the family holding company that controls Paramount Global, according to a Blo…",
                "url": "http://deadline.com/2024/01/skydance-media-ceo-david-ellison-national-amusements-paramount-global-1235804196/",
                "urlToImage": "https://deadline.com/wp-content/uploads/2024/01/Skydance-Paramount-National-Amusements.jpg?w=1024",
                "publishedAt": "2024-01-25T01:54:00Z",
                "content": "David Ellison’s Skydance is said to have made a preliminary offer to buy Shari Redstone’s stake in National Amusements, the family holding company that controls Paramount Global, according to a Bloom… [+1912 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "YouTube"
                },
                "author": null,
                "title": "Bloomberg Markets: The Close 01/24/2024 - Bloomberg Television",
                "description": "Bloomberg Television brings you the latest news and analysis leading up to the final minutes and seconds before and after the closing bell on Wall Street. --...",
                "url": "https://www.youtube.com/watch?v=Usq6kqw2yhU",
                "urlToImage": "https://i.ytimg.com/vi/Usq6kqw2yhU/maxresdefault.jpg",
                "publishedAt": "2024-01-25T01:28:16Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "KOIN.com"
                },
                "author": "Michaela Bourgeois",
                "title": "2 Oregon eateries earn spots on Yelp’s top 100 restaurants 2024 list - KOIN.com",
                "description": "Yelp released its list of the top 100 restaurants of 2024 — including two Oregon ramen and brunch eateries.",
                "url": "https://www.koin.com/news/food/2-oregon-eateries-earn-spots-on-yelps-top-100-restaurants-2024-list/",
                "urlToImage": "https://www.koin.com/wp-content/uploads/sites/10/2023/01/EatingGettyImages-1144647685.jpg?w=1280",
                "publishedAt": "2024-01-25T01:05:06Z",
                "content": "PORTLAND, Ore. (KOIN) Yelp released its list of the Top 100 US Restaurants of 2024 — including two Oregon ramen and brunch eateries.\r\nEarning the 60th spot on the list, Yelp named The Riv among the t… [+1099 chars]"
            },
            {
                "source": {
                    "id": "reuters",
                    "name": "Reuters"
                },
                "author": "Reuters.com",
                "title": "Tesla CEO Musk: Chinese EV firms will 'demolish' rivals without trade barriers - Reuters.com",
                "description": null,
                "url": "https://www.reuters.com/business/autos-transportation/tesla-ceo-musk-chinese-ev-firms-will-demolish-rivals-without-trade-barriers-2024-01-25/",
                "urlToImage": null,
                "publishedAt": "2024-01-25T00:47:19Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "HuffPost"
                },
                "author": "Taiyler S. Mitchell",
                "title": "FDA Issues Warning About Supplement Containing Potentially Deadly Antidepressant - HuffPost",
                "description": "A drug called tianeptine, or \"gas station heroin,\" has been found in over-the-counter “Neptune's Fix” supplements.",
                "url": "https://www.huffpost.com/entry/fda-tianeptine-neptunes-fix_n_65b188d4e4b04d89950fc06e",
                "urlToImage": "https://img.huffingtonpost.com/asset/65b18b262200003200fb09a0.jpeg?cache=2R0p4u8yK9&ops=1200_630",
                "publishedAt": "2024-01-25T00:18:32Z",
                "content": "The Federal Drug Administration has issued a warning against the use of over-the-counter supplements that contain an antidepressant called tianeptine, due to serious risks including seizures, loss of… [+4730 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "CNBC"
                },
                "author": "Julie Coleman",
                "title": "Cramer sees upside for oil service stocks, says Halliburton and SLB can keep climbing - CNBC",
                "description": "CNBC's Jim Cramer on Wednesday reviewed oil service stocks after the sector's major players reported earnings.",
                "url": "https://www.cnbc.com/2024/01/24/cramer-sees-upside-for-oil-service-stocks-names-halliburton-and-slb.html",
                "urlToImage": "https://image.cnbcfm.com/api/v1/image/104140164-GettyImages-509077732.jpg?v=1706129105&w=1920&h=1080",
                "publishedAt": "2024-01-25T00:12:00Z",
                "content": "CNBC's Jim Cramer on Wednesday reviewed oil service stocks after the sector's major players reported earnings, telling investors why he thinks SLB and Halliburton have room to run.\r\nCramer said he's … [+1613 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Federalreserve.gov"
                },
                "author": null,
                "title": "Federal Reserve Board announces the Bank Term Funding Program (BTFP) will cease making new loans as scheduled on March 11 - Federal Reserve",
                "description": "The Federal Reserve Board on Wednesday announced that the Bank Term Funding Program (BTFP) will cease making new loans as scheduled on March 11. The program wi",
                "url": "https://www.federalreserve.gov/newsevents/pressreleases/monetary20240124a.htm",
                "urlToImage": "https://www.federalreserve.gov/images/social-media/social-default-image-opengraph.jpg",
                "publishedAt": "2024-01-25T00:04:38Z",
                "content": "The Federal Reserve Board on Wednesday announced that the Bank Term Funding Program (BTFP) will cease making new loans as scheduled on March 11. The program will continue to make loans until that tim… [+1045 chars]"
            },
            {
                "source": {
                    "id": "wired",
                    "name": "Wired"
                },
                "author": "Emily Mullin",
                "title": "6 Deaf Children Can Now Hear After a Single Injection - WIRED",
                "description": "Several gene therapies aim to restore a protein necessary for transmitting sound signals from the ear to the brain.",
                "url": "https://www.wired.com/story/deaf-children-hear-gene-therapy/",
                "urlToImage": "https://media.wired.com/photos/65b14efa64a323f9243209b7/191:100/w_1280,c_limit/012324-science-genetic-treatment-deaf-children.jpg",
                "publishedAt": "2024-01-24T23:30:00Z",
                "content": "To get the new genetic material into cells, they engineered harmless viruses to carry it. Doctors carefully injected a tiny amount of liquid containing the viruses into a part of the childrens inner … [+3314 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "WGN TV Chicago"
                },
                "author": "HALELUYA HADERO, Associated Press",
                "title": "Ring will no longer allow police to request doorbell camera footage from users - WGN TV Chicago",
                "description": "The update is the latest restriction Ring has made to police activity on the Neighbors app.",
                "url": "https://wgntv.com/news/ap-ring-will-no-longer-allow-police-to-request-doorbell-camera-footage-from-users/",
                "urlToImage": "https://wgntv.com/wp-content/uploads/sites/5/2024/01/65b19c8ce31923.10236904.jpeg?w=1280",
                "publishedAt": "2024-01-24T23:23:10Z",
                "content": "NEW YORK (AP) Amazon-owned Ring will stop allowing police departments to request doorbell camera footage from users, marking an end to a feature that has drawn criticism from privacy advocates. \r\nIn … [+2593 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Electrek"
                },
                "author": "Fred Lambert",
                "title": "Elon Musk: Tesla aims for next-gen EV to come in late 2025 - Electrek",
                "description": "Elon Musk has disclosed that Tesla is currently aiming for its next-generation electric vehicles, which will include a much cheaper...",
                "url": "https://electrek.co/2024/01/24/elon-musk-tesla-aims-next-gen-ev-late-2025/",
                "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2023/09/Screenshot-2023-09-12-at-6.55.17-PM.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
                "publishedAt": "2024-01-24T23:06:00Z",
                "content": "Elon Musk has disclosed that Tesla is currently aiming for its next-generation electric vehicles, which will include a much cheaper electric car, to come in late 2025.\r\nAt Teslas 2023 Investor Day in… [+1540 chars]"
            }
        ],
        isLoading: false,
        isError: false,
        errorMessage: ''
    },
    reducers: {
        fetchingData: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        fetchDataSuccess: (state, action) => {
            action.payload && state.data.push(action.payload)

            state.isLoading = false;
            state.isError = false;
            state.errorMessage = '';
        },
        fetchDataFail: (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = action.payload ?? '';
        }
    }
});

export const { 
    fetchingData,
    fetchDataSuccess,
    fetchDataFail
} = articleSlide.actions;

export default articleSlide.reducer;