<head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
    />
</head>

<nav>
    <a href="/">Home</a>
    <a href="/profile">Profile</a>
</nav>

<slot />

<style>
    nav {
        background-color: var(--static11);
        padding: 12px 12px 12px 12px;
        border-radius: 5px;
    }
    a{
        padding: 7px 7px 7px 7px;
        border-radius: 5px;
        margin: 5px 5px 5px 5px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-style: normal;
        text-decoration: none;
        background-color: var(--secondary-800);
        color: var(--text-100);
    }
    :global(p, h1, a, div,h2,h3) {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
        color: var(--text-100);
    }
    :global(a) {
        color: var(--text-400);
    }
    :global(body) {
        background-color: var(--background-950);
        color: var(--text-100);
    }

    :root {
        --text-50: #eaf3fb;
        --text-100: #d5e6f6;
        --text-200: #aacdee;
        --text-300: #80b4e5;
        --text-400: #569bdc;
        --text-500: #2b82d4;
        --text-600: #2368a9;
        --text-700: #1a4e7f;
        --text-800: #113455;
        --text-900: #091a2a;
        --text-950: #040d15;

        --background-50: #eaf2fb;
        --background-100: #d4e5f7;
        --background-200: #aaccee;
        --background-300: #7fb2e6;
        --background-400: #5599dd;
        --background-500: #2a7fd5;
        --background-600: #2266aa;
        --background-700: #194c80;
        --background-800: #113355;
        --background-900: #08192b;
        --background-950: #040d15;

        --primary-50: #eaf3fb;
        --primary-100: #d4e8f7;
        --primary-200: #aad1ee;
        --primary-300: #7fb9e6;
        --primary-400: #55a2dd;
        --primary-500: #2a8bd5;
        --primary-600: #226faa;
        --primary-700: #195380;
        --primary-800: #113855;
        --primary-900: #081c2b;
        --primary-950: #040e15;

        --secondary-50: #f2eafb;
        --secondary-100: #e5d5f6;
        --secondary-200: #cbaaee;
        --secondary-300: #b180e5;
        --secondary-400: #9756dc;
        --secondary-500: #7d2bd4;
        --secondary-600: #6423a9;
        --secondary-700: #4b1a7f;
        --secondary-800: #321155;
        --secondary-900: #19092a;
        --secondary-950: #0c0415;

        --accent-50: #f7eafb;
        --accent-100: #eed4f7;
        --accent-200: #ddaaee;
        --accent-300: #cc7fe6;
        --accent-400: #bb55dd;
        --accent-500: #aa2ad5;
        --accent-600: #8822aa;
        --accent-700: #661980;
        --accent-800: #441155;
        --accent-900: #22082b;
        --accent-950: #110415;

        --static: rgba(0, 0, 0, 0.5);
        --static4: rgba(225, 225, 225, 0.2);
        --static3: rgb(22, 22, 22);
        --static2: rgb(240, 240, 240);
        --static5: rgb(24, 172, 122);
        --static6: rgba(255, 255, 255, 0.15);
        --static7: rgba(255, 255, 255, 0.1);
        --static8: rgba(255, 255, 255, 0.05);
        --static9: rgba(255, 255, 255, 0.3);
        --static10: rgb(40, 40, 40);
        --static11: rgba(255, 255, 255, 0.03);
        --static12: rgba(0, 0, 0, 0.8);
        --static13: rgb(40, 40, 40);
        --static14: rgba(255, 255, 255, 0.2);
        --static15: rgba(0, 0, 0, 0.5);
    }
</style>
