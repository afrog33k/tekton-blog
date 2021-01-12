{:title "Diaspora Packaging For Debian"
:layout :post
:tags  ["debian" "packaging"]
:toc true}
Here are the steps I followed while  packaging diaspora for debian.

My ultimate guide for debian-diaspora packaging has been this piratepad document :

[http://piratepad.net/tu0H1eU2vH](http://piratepad.net/tu0H1eU2vH)  

Diaspora is built on Ruby on Rails platform. In Ruby programming language, the software packages are called 'RubyGems' or simply 'Gems'. Gems contain a packaged Ruby application or library. So basically our task is to convert this RubyGem into debian file format.

There are numerous number of gems upon which diaspora is depending. To complete the debian packaging of whole diaspora software we will have to package each and every one of these gems. So our first step towards packaging is select a gem which is a dependency for diaspora and that hasn't been packaged yet. You can easily pick one from the above mentioned pirate pad document.

 Make sure you pick a gem that does not have any other gems as dependencies that aren't packaged yet. If  the gem you picked has such dependencies, then package the latter gem first and then proceed with the former. 

Once you've selected your gem, it is time to file an ITP i.e. Intent To Package. A sample ITP is here:[http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=691256](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=691256). You'll get all the information regarding your gem from rubygems.org or from the corresponding upstream file at github. We have to mail our ITP to the debian bug tracking system specifying the package name and a short description as the subject line. Never use rich text.

Once you've send in your ITP and you got the confirmation, you are good to go with your packaging. It is quite natural that you will end up sending a buggy ITP receiving an error message. But BTS is really easy to work with and I got all such information regarding BTS from [http://www.debian.org/Bugs/server-control](http://www.debian.org/Bugs/server-control).

So here ends the preps regarding the gem, you need to do before getting started with packaging.

Will get to the fun stuff in my next post.

For more links on packaging [go here](http://resident.dyndns.info/content/wordpress/?p=282 "Nadir's blog")!

Cheers.
