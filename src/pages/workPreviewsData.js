const workPreviewsData = [
    {
        title: "Marine Snow : Onboarding",
        pageUrl: "./ms-onboarding",
        className: "ms-onboarding-preview",
        previewAsset: {
            mobile: [
                {
                    className: "first",
                    videoScreen: require('../img/splashAnimation.mp4')
                },
                {
                    className: "second combine-shards",
                    videoScreen: require('../img/combineShards.mp4') ,
                    currentTime: 3.2
                }
            ]
        },

        // overview: "First impressions mean everything; the new user onboarding experience is critical for any early-stage product. Inspired by video games, the onboarding experience underwent several iterations to explain parts of the product contextually, minimizing text to avoid overload. A high bar for visuals in the animations and microinteractions was set to create a delightful yet luxurious experience.",
        // overview: "The new user onboarding experience is critical for any early-stage product. The onboarding experience underwent several iterations to explain parts of the product contextually, minimizing text to avoid overload. A high bar for visuals in the microinteractions was set to create a delightful yet luxurious experience.",
        overview: "First impressions are critical for early-stage products. The onboarding experience underwent several iterations to explain parts of the product contextually, minimizing text to avoid overload. A high bar for visuals was set to create a delightful yet luxurious experience.",
        role: "Product Designer",
        skills: "User Research, Mobile Interface Design, Product Growth Strategy, Product Analytics"
    }, 
    {
        title: "Notability : Reviewing Notes Made Easier",
        pageUrl: "./notability",
        className: "notability-preview",
        previewAsset: {
            ipad: [
                {
                    className: "first",
                    staticScreen: require('../img/notability1.png')
                }, 
                {
                    className: "second",
                    videoScreen: require('../img/notability2-6.mp4')
                },
                {
                    className: "third",
                    staticScreen: require('../img/notability3.png')
                }
            ]
        },
        // overview: "First impressions are critical for early-stage products. The onboarding experience underwent several iterations to explain parts of the product contextually, minimizing text to avoid overload. A high bar for visuals was set to create a delightful yet luxurious experience.",
        overview: "Successful students using Notability may spend hours cross-referencing notes with lecture recordings to ensure they’ve covered all learning material. Gamified features and LLM solutions can establish note reviews as a fun routine and cut time spent identifying discrepancies.",
        role: "Product Designer",
        skills: "User Research, Tablet Interface Design"
    },
    {
        title: "Marine Snow 𖣐 ARTCAMP",
        pageUrl: "https://www.madeatartcamp.com/marine-snow",
        className: "ms-artcamp-preview",
        previewAsset: {
            image: {
                className: "artcamp",
                imageLayers: [
                    [
                        {
                            imgSrc: require('../img/artcamp-combined.png'),
                            className: "",
                            alt: "artcamp"
                        }
                    ]
                ]
            }
            // image: {
            //     className: "artcamp",
            //     imageLayers: [
            //         [
            //             {
            //                 imgSrc: require('../img/artcamp-1-compressed.png'),
            //                 className: "first",
            //                 alt: "artcamp1"
            //             },
            //             {
            //                 imgSrc: require('../img/artcamp-2-compressed.png'),
            //                 className: "second",
            //                 alt: "artcamp2"
            //             }
            //         ],
            //         [
            //             {  
            //                 imgSrc: require('../img/artcamp-1-compressed.png'),
            //                 className: "first",
            //                 alt: "artcamp1"
            //             },
            //             {
            //                 imgSrc: require('../img/artcamp-2-compressed.png'),
            //                 className: "second",
            //                 alt: "artcamp2"
            //             }
            //         ]
            //     ]
            // }
        },
        overview: "A cinematic opening sequence users see when they first download the Marine Snow app, featuring the 2 divers in the Marine Snow logo uncovering hidden and obscure gems in the deep sea. This short film was designed to prime users with the deep sea aesthetics surrounding the Marine Snow brand and create a feeling of collective adventure.",
        role: "Creative Director",
        skills: "Concept Development"
    },
    {
        title: "Marine Snow : Socializing the Music Experience",
        inProgress: true,
        className: "ms-social-preview",
        previewAsset: {
            mobile: [
                {
                    className: "first",
                    videoScreen: require('../img/ecosystem.mp4')
                },
                {
                    className: "second combine-shards",
                    videoScreen: require('../img/group-creation.mp4') ,
                    currentTime: 20
                }
            ]
        },
        overview: "Inspired by the intimate world of YouTube comments, Instagram’s defunct Activity feed, Facebook groups, and the sleek display of fleeting data across fintech apps, Marine Snow crafted a unique social experience that blends the joy of listening with engaging discussions, all in a single space.",
        role: "Product Designer",
        skills: "Mobile Interface Design"
    },
    {
        title: "Supply Me",
        pageUrl: './supply-me',
        className: "sm-preview",
        // pageUrl: "https://seangedorio.com/sm.html",
        previewAsset: {
            mobile: [
                {
                    className: "second",
                    videoScreen: require('../img/sm-logo.mp4')
                },
                {
                    className: "first",
                    videoScreen: require('../img/list-item.mp4')
                }
            ]
        },
        overview: "Supply Me is a school supply trading app that alleviates out-of-pocket expenses made by public school teachers for their students' supplies.",
        role: "Product Designer",
        skills: "User Research, Mobile Interface Design"
    },
    {
        title: "WREK Design Collective",
        // pageUrl: "https://seangedorio.com/wdc.html",
        pageUrl: "./wrek-design-collective",
        className: "wdc-preview",
        previewAsset: {
            image: {
                className: "wrek",
                imageLayers: [
                    [
                        {
                            imgSrc: require('../img/tshirtfall2018-transparent.png'),
                            className: "",
                            alt: "wrek"
                        }
                    ]
                ]
            }
        },
        overview: "WREK Design Collective is a space I created within WREK Atlanta 91.1FM to experiment on print and design. From self-taught screenprinting to zine-making to creative coding, meshing raw DIY ethics with modern software to create wacky works was our goal.",
        role: "Design Leader, Publicity Director",
        skills: "Graphic Design, Print Design, Branding"
    }
]

export default workPreviewsData;