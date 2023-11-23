const playPreviewsData = [
    {
        title: "Summer 2023",
        // pageUrl: "https://sgedorio.github.io/summer-2023-travels/",
        pageUrl: "https://tinyurl.com/summer2023travels",
        previewAsset: {
            video: {
                className: "summer-2023",
                vidSrc: require('../img/summer2023prototype.mp4')
            }
        },

        overview: "One of the first React projects I designed and coded, featuring some of my adventures throughout the summer of 2023. It includes several interactive features, click around and enjoy.",
        tools: "React, HTML/CSS, JavaScript"
    },
    {
        title: "8-Ball Zines",
        pageUrl: "./8-ball-zines",
        previewAsset: {
            image: {
                className: "eight-ball",
                imageLayers: [
                    [
                        {
                            imgSrc: require('../img/8ball-preview.png'),
                            alt: "8-ball-preview"
                        }
                    ]
                ]
            }
        },

        overview: "A collection of collages I created for 8-Ball zine fairs throughout 2023, featuring volcanoes from the Philippines and random saunters around Manhattan's Chinatown.",
        tools: "Adobe Suite, Python"
    }
]

export default playPreviewsData;