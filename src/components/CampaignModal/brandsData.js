const brandsData = [
    {
        id: 1,
        brand: "Nike",
        payout: {
            type: "Fixed Pay",
            amount: "₹16400",
        },
        slots: 10,
        hired: 6,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        description: "Join Nike to promote their latest collection of cutting-edge running shoes. Whether you’re training for a marathon or just getting started, these shoes provide the perfect blend of comfort, style, and performance. Get paid a fixed amount for sharing the excitement with the world!"
    },
    {
        id: 2,
        brand: "Adidas",
        payout: {
            type: "Barter",
            amount: "1 Pair of Sneakers",
        },
        slots: 8,
        hired: 4,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        description: "Collaborate with Adidas to promote their newest line of eco-friendly sneakers. Made with sustainable materials, these sneakers combine style, comfort, and a commitment to the planet. As a reward, get a free pair to step up your footwear game!"
    },
    {
        id: 3,
        brand: "Apple",
        payout: {
            type: "Refund",
            amount: "₹41000",
        },
        slots: 5,
        hired: 2,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        description: "Help Apple spread the word about their latest innovation: the iPhone 15. With groundbreaking features like enhanced camera capabilities, longer battery life, and cutting-edge performance, your promotion will earn you a refund once you complete the campaign!"
    },
    {
        id: 4,
        brand: "Coca-Cola",
        payout: {
            type: "Fixed Pay",
            amount: "₹8200",
        },
        slots: 12,
        hired: 8,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Coca-Cola_logo.svg",
        description: "Join Coca-Cola’s latest campaign to promote their newest limited-edition soda flavor! It’s a refreshing twist on the classic, and you’ll be helping spread joy while earning a fixed pay for your efforts."
    },
    {
        id: 5,
        brand: "Google",
        payout: {
            type: "Barter",
            amount: "Google Merchandise",
        },
        slots: 10,
        hired: 5,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        description: "Collaborate with Google to launch their latest Pixel phone! Showcase its extraordinary camera features and seamless integration with Google services, all while receiving exclusive Google merchandise as your reward."
    },
    {
        id: 6,
        brand: "Samsung",
        payout: {
            type: "Refund",
            amount: "₹20500",
        },
        slots: 7,
        hired: 4,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
        description: "Promote Samsung’s new Galaxy S24 series, featuring enhanced photography tools and cutting-edge AI features. This campaign will earn you a refund after sharing the phone’s impressive features with your followers!"
    },
    {
        id: 7,
        brand: "Amazon",
        payout: {
            type: "Fixed Pay",
            amount: "₹32800",
        },
        slots: 10,
        hired: 9,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        description: "Spread the word about Amazon's latest shopping event and special discounts! Your followers can enjoy unbeatable deals while you earn a fixed payout for every share and referral."
    },
    {
        id: 8,
        brand: "Microsoft",
        payout: {
            type: "Barter",
            amount: "Microsoft Software Licenses",
        },
        slots: 6,
        hired: 3,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        description: "Promote Microsoft’s latest Windows 11 updates and special deals on Surface devices! By showcasing these innovative products, you’ll earn software licenses as a reward for your campaign success."
    },
    {
        id: 9,
        brand: "Tesla",
        payout: {
            type: "Refund",
            amount: "₹49200",
        },
        slots: 5,
        hired: 1,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Tesla_logo.svg",
        description: "Join Tesla’s exciting campaign to promote the new Tesla Model S Plaid. With its unmatched speed, design, and eco-friendly features, you’ll be sharing the future of electric driving while earning a refund on your purchase."
    },
    {
        id: 10,
        brand: "Pepsi",
        payout: {
            type: "Fixed Pay",
            amount: "₹9840",
        },
        slots: 10,
        hired: 7,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Pepsi_logo.svg",
        description: "Help Pepsi introduce their new line of exotic fruit-flavored sodas. Share the buzz around this refreshing new drink and get paid for your efforts while enjoying the sweet rewards!"
    },
    {
        id: 11,
        brand: "Starbucks",
        payout: {
            type: "Barter",
            amount: "Starbucks Gift Cards",
        },
        slots: 8,
        hired: 6,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Starbucks_Corporation_Logo_2011.svg",
        description: "Promote Starbucks' new holiday-themed drinks and share the festive spirit with your followers! You’ll earn Starbucks gift cards as a reward while helping spread the joy of the season."
    },
    {
        id: 12,
        brand: "Louis Vuitton",
        payout: {
            type: "Fixed Pay",
            amount: "₹65600",
        },
        slots: 3,
        hired: 2,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Louis_Vuitton_logo_and_wordmark.svg",
        description: "Show off Louis Vuitton’s latest luxury handbag collection in your campaign. With its refined design and timeless appeal, this exclusive collection deserves the spotlight—and you’ll earn a fixed pay for your effort."
    },
    {
        id: 13,
        brand: "Gucci",
        payout: {
            type: "Refund",
            amount: "₹57400",
        },
        slots: 4,
        hired: 3,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Gucci_logo.svg",
        description: "Promote Gucci’s latest spring collection of high-end fashion. From sophisticated dresses to elegant accessories, help Gucci make a statement while earning a refund on your purchase!"
    },
    {
        id: 14,
        brand: "Sony",
        payout: {
            type: "Fixed Pay",
            amount: "₹22960",
        },
        slots: 10,
        hired: 7,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Sony_Logo.svg",
        description: "Join Sony’s campaign to promote their latest PlayStation 5 bundles with exclusive game titles. Share your gaming setup and showcase the excitement of next-gen gaming while earning a fixed payout."
    },
    {
        id: 15,
        brand: "Intel",
        payout: {
            type: "Barter",
            amount: "Intel Product Samples",
        },
        slots: 6,
        hired: 5,
        campaignImage: "https://via.placeholder.com/600x400",
        brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
        description: "Promote Intel’s latest processors designed for gamers, content creators, and tech enthusiasts. Get your hands on Intel’s cutting-edge technology while receiving free product samples for your efforts!"
    },
];

export default brandsData;
