(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{778:function(t,e,n){"use strict";n.r(e);var o={name:"StoryBox",computed:{blurb:function(){return this.blurbs[this.step%this.blurbs.length]}},data:function(){return{blurbs:["Ahh the good ole days of Aspen in the 80s. Sex, drugs, and rock and roll. There wasn’t a care in the world within that great town of fresh powder (oh you were thinking of snow! Yeah that too). Man, the partying just never stopped. That was before the great avalanches began...","The seismologists and geologists couldn’t figure out what caused them, but every occurrence was wiping out hundreds of park goers. Soon they got so bad people started skipping the slopes and staying inside. It meant more partying anyway...","A couple of weeks passed and the avalanches calmed down. The park goers mustered up the courage to get back out there and shred some pow. Next thing you know the park was packed again - who could resist wide open slopes. Then came the biggest avalanche yet. And it wiped out half the mountain…","The town was devastated and the park closed for the rest of the season. As time went on, the park would close if anyone even mentioned the word ‘avalanche’. It was better to be safe than sorry…","Eventually the monstrosities fizzled out and the seasons were back in full swing. Left behind were friends and family members erased from the mountains. One day enjoying their winter getaways in the lively town, the next day represented by a single flame within a sea of memorial candles. The park goers with no ties to those lost seemed to move on as if nothing happened, except for the workers…","To this day, past stories of strange snowman sightings are kept alive amongst park workers. Most sightings were said to be scattered around the town late at night. They were so far up the mountain, you could barely make out their peculiar shape…","There were even some stories, probably loosely translated over the years, that claimed the avalanche chaos caused supplies like booze and cigs to go missing from the storages. The thieves would leave no evidence behind except for the trail of snow they had tracked indoors from the dark, solemn night..."],step:0}}},l=n(27),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"bg-white p-4 pt-6 pb-10 min-h-10rem relative"},[n("p",{staticClass:"text-xl"},[t._v("\n      "+t._s(t.blurb)+"\n    ")]),t._v(" "),n("p",{staticClass:"absolute text-sm bottom-0 right-0 text-gray-400 p-2 px-4"},[t._v(t._s(t.step+1)+" / "+t._s(t.blurbs.length))])]),t._v(" "),n("div",{staticClass:"flex flex-row flex-wrap justify-evenly"},[n("s-link",{staticClass:"text-2xl bg-red-500 md:mx-2",attrs:{to:"/mint"}},[t._v("THAT'S ENOUGH OLD MAN")]),t._v(" "),n("s-button",{staticClass:"text-2xl bg-red-500 md:mx-2",nativeOn:{click:function(e){t.step=(t.step+1)%t.blurbs.length}}},[t._v("TELL ME MORE!")])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SLink:n(247).default,SButton:n(246).default})},789:function(t,e,n){t.exports=n.p+"videos/home-hero-background.92ba7c5.mp4"},793:function(t,e,n){"use strict";n.r(e);var o={metaInfo:{title:"Home"},name:"Home"},l=n(27),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"\n    relative\n    md:h-56vw md:min-h-565px md:min-w-1000px\n    p-2\n    py-8\n    md:py-0 md:p-0\n  "},[o("nav",{staticClass:"hidden md:flex md:absolute md:w-1/5 md:mt-32 sm:ml-4 flex-col"},[o("s-button",{staticClass:"bg-indigo-500 mb-10 md:text-2xl lg:text-3xl min-w-7em"},[t._v("Connect Wallet")]),t._v(" "),o("s-button",{staticClass:"bg-indigo-500 md:text-2xl lg:text-3xl min-w-7em",attrs:{to:"https://marketplace.kalao.io/my-account/collectibles"}},[t._v("My Snowmen")]),t._v(" "),o("s-link",{staticClass:"bg-indigo-500 md:text-2xl lg:text-3xl min-w-7em",attrs:{to:"/"}},[t._v("Stake Snowmen")]),t._v(" "),o("s-link",{staticClass:"bg-indigo-500 md:text-2xl lg:text-3xl min-w-7em",attrs:{to:"/"}},[t._v("Buy $LODGE")]),t._v(" "),o("s-link",{staticClass:"bg-indigo-500 md:text-2xl lg:text-3xl min-w-7em",attrs:{to:"/"}},[t._v("Farm $LODGE")])],1),t._v(" "),o("s-link",{staticClass:"\n      block\n      w-full\n      md:inline md:text-2xl\n      lg:text-4xl\n      md:absolute md:w-20rem\n      transform\n      md:-translate-x-1/2\n      -translate-y-1/2\n      md:left-77%\n      sm:top-43vw\n      bg-red-500\n    ",attrs:{to:"/mint"}},[t._v("\n    MINT SNOWMEN\n  ")]),t._v(" "),o("div",{staticClass:"container mx-auto"},[o("div",{staticClass:"md:pt-32"},[o("div",{staticClass:"mx-auto md:w-28rem md:-translate-x-3rem"},[o("story-box")],1)])]),t._v(" "),o("social-icons",{staticClass:"mx-auto justify-center md:absolute md:bottom-1 md:left-1"}),t._v(" "),o("video",{staticClass:"\n      md:min-w-1000px md:min-h-565px\n      hidden\n      md:block\n      sm:w-full\n      absolute\n      top-0\n      -z-1\n    ",attrs:{src:n(789),autoplay:"",loop:"",muted:""},domProps:{muted:!0}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SButton:n(246).default,SLink:n(247).default,StoryBox:n(778).default,SocialIcons:n(401).default})}}]);