
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{-- favicons --}}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    <title>Twit-Burst</title>
</head>
<body class="bg-black text-white font-hanken relative">
    <div class="absolute z-0 top-0 left-0">
        <img src="images/Vector.png" alt="">
    </div>
    

{{-- side links --}}
    <ul class="fixed gap-y-24 z-20 flex gap-x-16 uppercase text flex-col-reverse left-0 h-screen justify-center font-bold ">
        <li class="-rotate-90">
            <a href="/" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Home</a>
        </li>
        <li class="-rotate-90">
            <a href="#features" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Features</a>
        </li>
        <li class="-rotate-90">
            <a href="#pricing" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Pricing</a>
        </li>
        <li class="-rotate-90">
            <a href="" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Help</a>
        </li>
        <li class="-rotate-90">
            <a href="" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Blog</a>
        </li>
    </ul>

    {{-- <ul class="fixed gap-y-24 z-20 flex gap-x-16 capitalize text flex-col-reverse right-0 h-screen justify-center font-bold ">
        <li class="-rotate-90">
            <a href="/" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Home</a>
        </li>
        <li class="-rotate-90">
            <a href="#features" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Features</a>
        </li>
        <li class="-rotate-90">
            <a href="#pricing" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Pricing</a>
        </li>
        <li class="-rotate-90">
            <a href="" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Help</a>
        </li>
        <li class="-rotate-90">
            <a href="" class="bg-gradient-to-r from-purple-600 to-red-500 inline-block text-transparent bg-clip-text font-montserrat transition-all hover:text-gray-400">Blog</a>
        </li>
    </ul> --}}
{{-- end of side links --}}


    {{-- Navigation section --}}
    <nav class="flex justify-between items-center px-24 py-6 z-50 relative">

        {{-- logo --}}
        <a href="/">
            <img src="images/logo.png" alt="" class="w-48">
        </a>

        {{-- nav-items --}}
        <ul class="flex gap-x-16  text-lg font-medium uppercase">
            <li>
                <a href="#features" class="text-slate-400 hover:text-white transition-all">Features</a>
            </li>
            <li>
                <a href="#pricing" class="text-slate-400 hover:text-white transition-all">Pricing</a>
            </li>
            <li>
                <a href="" class="text-slate-400 hover:text-white transition-all">Help</a>
            </li>
            <li>
                <a href="" class="text-slate-400 hover:text-white transition-all">Blog</a>
            </li>
        </ul>

        <div class="flex gap-x-10 items-center text-lg">
            <a href="" class="text-slate-400 hover:text-white transition-all uppercase font-medium">Sign In</a>
            <button class="bg-gradient-to-r from-orange-500 via-purple-500 to-purple-900 text-black px-4 py-1 rounded-lg text-lg font-bold">Request a Demo</button>
        </div>
    </nav>

    {{-- Hero Section --}}
    <section class="pt-20 relative">
        
        <div class="">
            <p class="text-7xl w-[1200px] text-center mx-auto font-bold">
                <span class="bg-gradient-to-r font-montserrat from-white via-purple-500 to-purple-900 inline-block text-transparent bg-clip-text ">Breathe Easy</span>
                <span>as our system handles the  busy work</span>
            </p>
            <p class="text-[#808080] text-xl text-center mt-4 font-medium">Unlock your business potential! 🎉 Experience measurable success 📈 from your hard work today! 💪</p>
            <div class="flex items-center justify-center gap-x-10 mt-24">
                <button class="bg-gradient-to-r from-purple-600 to-red-500 text-black px-4 py-2 text-xl rounded-lg font-bold">Request a Demo</button>
                <button class="border-2 border-gray-600 text-white px-4 py-2 text-xl font-medium rounded-lg">Learn More</button>
            </div>
        </div>

        <div class="flex mt-[8rem] justify-center">
            <img src="images/hero-image.png" alt="">
        </div>
    </section>


    {{-- Features Section --}}
    <section class="mt-24" id="features">
        <div>
            <h4 class="text-center text-4xl font-semibold font-montserrat">
                Instant message delivery increases customer interaction and <br>
                response rates.
            </h4>
            <p class="text-[#808080] text-lg text-center mt-4 font-medium">Feel the joy of truly connecting with your customers, knowing they’re loyal and invested in your brand.</p>
        </div>

        <div class="w-[1090px] mx-auto mt-24 space-y-36">
            <div class="flex items-center">
                <div class="flex-1 flex justify-center items-center">
                    <img src="images/streamlined-comm.png" alt="">
                </div>
                <div class="flex-1">
                    <h4 class="text-2xl">Streamlined Communication</h4>
                    <div class="text-[#808080] text-lg space-y-4 font-medium my-4">
                        <p>Ensures timely and efficient outreach to clients and prospects, keeping them informed and engaged</p>
                        <p>Saves time, allowing users to focus on core business activities</p>
                    </div>

                    <ul class="flex flex-col gap-y-3 text-[#808080] text-lg font-medium">
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Saves time</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Frees up resources</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Explore new opportunities</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Improve Services</span>
                        </li>
                    </ul>
                </div>
            </div>


            <div class="flex items-center flex-row-reverse">
                <div class="flex-1 flex justify-center items-center">
                    <img src="images/feeling-solid.png" alt="">
                </div>
                <div class="flex-1">
                    <h4 class="text-2xl">Feeling Sold: Inclusivity and Pride</h4>
                    <div class="text-[#808080] text-lg space-y-4 font-medium my-4">
                        <p>Feel proud knowing your message reaches everyone, breaking barriers and expanding your impact.</p>
                        <p>Opens doors to untapped audiences, driving business expansion.</p>
                    </div>

                    <ul class="flex flex-col gap-y-3 text-[#808080] text-lg font-medium">
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>No potential customer is left out</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Broadening market reach</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Expanding your impact</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Increases lifetime customer value and reduces churn</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


    {{-- copywritten section, still part of features --}}
    <section class="bg-[#1B2334] mt-24 py-12">


        <div>
            <h4 class="text-center text-4xl font-semibold font-montserrat">
                Cost-Effective Marketing (Stretches Budgets)
            </h4>
            <p class="text-[#808080] text-lg text-center mt-4 font-medium">Imagine the satisfaction of achieving big results without breaking the bank—our platform 
                lets you do more with less.</p>
        </div>



        <div class="w-[1090px] mx-auto mt-16 space-y-36">
            <div class="flex items-center flex-row-reverse gap-x-5">
                <div class="flex-1 flex justify-center items-center w-full bg-[#D1E8FF] rounded-xl">
                    <img src="images/cost-effective-marketing.png" class='object-fit' alt="">
                </div>
                <div class="flex-1">
                    <h4 class="text-2xl">Budget-friendly</h4>
                    <div class="text-[#808080] text-lg space-y-4 font-medium my-4">
                        <p>Enables your businesses to stretch budgets further while achieving impactful results</p>
                        <p>Bulk SMS is a budget-friendly way to reach large audiences, maximizing ROI</p>
                    </div>
    
                    <ul class="flex flex-col gap-y-3 text-[#808080] text-lg font-medium">
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>No potential customer is  out</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Broadening market reach</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Expanding your impact</span>
                        </li>
                        <li class="flex items-center gap-x-2">
                            <div class="bg-gradient-to-r from-[#F80505] to-[#FF7B36] w-5 h-5 rounded-full"></div>
                            <span>Increases lifetime customer value and reduces churn</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
    </section>


    {{-- powerful and helpful features section --}}
    <section class="mt-24 relative">
        <div class="absolute z-0 top-0 right-0 mr-[17rem]">
            <img src="images/pattern.png" alt="">
        </div>
        <div class="w-[500px] ml-[17rem]">
            <h4 class="text-2xl font-semibold font-montserrat">
                Access Powerful and helpful
                features
            </h4>
            <p class="text-[#808080] text-lg mt-2 font-medium">
                Feel the weight lift off your shoulders as our system 
                keeps your communication running smoothly
                while you focus on what matters most.
            </p>
            <button class="bg-gradient-to-r from-purple-600 to-red-500 text-black px-4 py-2 text-xl rounded-lg font-semibold mt-8">Request a Demo</button>
        </div>

        <div class="w-[1090px] mx-auto mt-16 relative z-10"">
            <img src="images/powerful and helpful features.png" class="object-cover w-full" alt="">
        </div>
    </section>


    {{-- pricing section --}}
    <section id="pricing" class="mt-24">
        <div class="w-[1090px] mx-auto mt-24">
            <h4 class="text-4xl font-semibold font-montserrat text-center">
                Our Payment plan is easy to understand and budget-friendly
            </h4>
            <p class="text-[#808080] text-lg text-center mt-4 font-medium">Our pricing is designed to fit your budget and grow with your business.</p>
        </div>

        <div class="flex w-[1090px] mx-auto mt-16 gap-x-5">
            <div class="bg-[#171717] text-center px-4 py-8 rounded-lg flex-1">
                <div class="space-y-4">
                    <h4 class="text-4xl font-bold">Free</h4>
                    <p class="text-sm">Best for anyone to get Started</p>
                    <p class="text-sm ">
                        <span class="flex items-start gap-2 justify-center">
                            ugx
                            <span>
                                <span class="text-4xl">0</span>
                                /mo
                            </span>

                        </span>
                        
                    </p>
                </div>
                <p class="text-left bg-gradient-to-r from-purple-600 to-red-500 text-xl text-transparent bg-clip-text font-medium mt-4 uppercase">Includes</p>
                <ul class="text-left flex flex-col gap-y-4 mt-4">
                    <li>- 20 connects</li>
                    <li>- 25 Character count</li>
                    <li>- Send upto 20 customers</li>
                </ul>

                <button class="bg-gradient-to-r mt-4 from-purple-600 to-red-500 inline-block text-black font-bold px-4 py-1 rounded-lg">Get Started</button>
            </div>

            <div class="bg-[#171717] text-center px-4 py-8 rounded-lg flex-1">
                <div class="space-y-4">
                    <h4 class="text-4xl font-bold">Basic</h4>
                    <p class="text-sm">Best for anyone to get Started</p>
                    <p class="text-sm ">
                        <span class="flex items-start gap-2 justify-center">
                            ugx
                            <span>
                                <span class="text-4xl">12,000</span>
                                /mo
                            </span>

                        </span>
                        
                    </p>
                </div>
                <p class="text-left bg-gradient-to-r from-purple-600 to-red-500 text-xl text-transparent bg-clip-text font-medium mt-4 uppercase">Includes</p>
                <ul class="text-left flex flex-col gap-y-4 mt-4">
                    <li>- 1000 connects</li>
                    <li>- 25 Character count</li>
                    <li>- Send upto 1000 customers</li>
                </ul>

                <button class="bg-gradient-to-r mt-4 from-purple-600 to-red-500 inline-block  text-black font-bold px-4 py-1 rounded-lg">Get Started</button>
            </div>

            <div class="bg-[#171717] text-center px-4 py-8 rounded-lg flex-1">
                <div class="space-y-4">
                    <h4 class="text-4xl font-bold">Premium</h4>
                    <p class="text-sm">Best for anyone to get Started</p>
                    <p class="text-sm ">
                        <span class="flex items-start gap-2 justify-center">
                            ugx
                            <span>
                                <span class="text-4xl">24,000</span>
                                /mo
                            </span>

                        </span>
                        
                    </p>
                </div>
                <p class="text-left bg-gradient-to-r from-purple-600 to-red-500 text-xl text-transparent bg-clip-text font-medium mt-4 uppercase">Includes</p>
                <ul class="text-left flex flex-col gap-y-4 mt-4">
                    <li>- 2000 connects</li>
                    <li>- 35 Character count</li>
                    <li>- Send upto 2000 customers</li>
                </ul>

                <button class="bg-gradient-to-r mt-4 from-purple-600 to-red-500 inline-block text-black font-bold px-4 py-1 rounded-lg">Get Started</button>
            </div>

            <div class="bg-[#171717] text-center px-4 py-8 rounded-lg flex-1">
                <div class="space-y-4">
                    <h4 class="text-4xl font-bold">Entreprize</h4>
                    <p class="text-sm">Best for anyone to get Started</p>
                    <p class="text-sm ">
                        <span class="flex items-start gap-2 justify-center">
                            ugx
                            <span>
                                <span class="text-4xl">48,000</span>
                                /mo
                            </span>

                        </span>
                        
                    </p>
                </div>
                <p class="text-left bg-gradient-to-r from-purple-600 to-red-500 text-xl text-transparent bg-clip-text font-medium mt-4 uppercase">Includes</p>
                <ul class="text-left flex flex-col gap-y-4 mt-4">
                    <li>- 4000 connects</li>
                    <li>- 50 Character count</li>
                    <li>- Send upto 4000 customers</li>
                </ul>

                <button class="bg-gradient-to-r mt-4 from-purple-600 to-red-500 inline-block text-black font-bold px-4 py-1 rounded-lg">Get Started</button>
            </div>
        </div>
    </section>


    {{-- Frequently asked questions --}}
    <section class="mt-24 mx-[17rem]">
        <div class="">
            <h4 class="text-3xl font-semibold font-montserrat">
                Frequently Asked Questions
            </h4>
            <p class="text-[#808080] text-lg font-medium">If you can’t find what you’re looking for, email our support team and if you’re 
                lucky someone will get back to you.</p>
        </div>


        <div class="mt-8 grid grid-cols-3 gap-y-10 gap-x-5">
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Connects are your gateway to seamless SMS communication on our platform. </p>
            </div>
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Connects are your gateway to seamless SMS communication on our platform. Think of them as virtual tokens— 1 Connect powers 1 SMS message. </p>
            </div>
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Connects are your gateway to seamless SMS communication on our platform. Think of them as virtual tokens— 1 Connect powers 1 SMS message. </p>
            </div>
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Simply purchase the Connects you need, send messages, and stay in control of your communication costs with ease and flexibility.</p>
            </div>
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Simply purchase the Connects you need, send messages, and stay in control of your communication costs with ease and flexibility.</p>
            </div>
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Simply purchase the Connects you need, send messages, and stay in control of your communication costs with ease and flexibility.</p>
            </div>
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Simply purchase the Connects you need, send messages, and stay in control of your communication costs with ease and flexibility.</p>
            </div>
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Simply purchase the Connects you need, send messages, and stay in control of your communication costs with ease and flexibility.</p>
            </div>
            <div>
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Simply purchase the Connects you need, send messages, and stay in control of your communication costs with ease and flexibility.</p>
            </div>
            <div class="">
                <h5 class="text-lg font-medium">What are connects?</h5>
                <p class="text-gray-600 text-sm font-medium">Simply purchase the Connects you need, send messages, and stay in control of your communication costs with ease and flexibility.</p>
            </div>
        </div>
    </section>

    {{-- call to action --}}
    <section class="mt-24">
        <div class="mx-[17rem] flex justify-between">
            <h1 class="text-4xl flex-1 font-medium">Don't miss a chance to get a demo from out team</h1>

           <div class="flex-1 flex justify-end">
            <button class="bg-gradient-to-r from-purple-600 to-red-500 text-black px-4 py-2 text-xl rounded-lg font-semibold mt-8">Request a Demo</button>
           </div>
        </div>
    </section>



    {{-- footer --}}
    <footer class="mt-24 px-[17rem] bg-[#1B2334] py-2 flex items-center justify-between">
        <div class="flex gap-x-5 items-end">
            <img src="images/logo.png" class="w-36" alt="">
            <p class="text-sm text-gray-300 capitalize font-medium tracking-wider">2025 All rights reserved:</p>
        </div>

        <div>
            <ul class="text-sm text-gray-300 flex items-center gap-x-10 font-medium">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="">Privacy Policy</a>
                </li>
                <li>
                    <a href="">Terms</a>
                </li>
            </ul>
        </div>


    </footer>
</body>
</html>