{:title "From Future Import PeARS, Part - 1"
:layout :post
:tags  ["intro" "PeARS" "oss"]
:toc true}

PeARS (or Peer-to-peer Agent for Reciprocated Search, if you would prefer that) is a distributed search engine project that I got involved with very recently. It is a very interesting and ambitious idea that <a href="http://aurelieherbelot.net/">Aurelie Herbelot</a> thought of, to make searching more secure, accurate and very much user reliant. For an official intro from the skipper herself head over to her <a href="http://aurelieherbelot.net/pears/">blog</a>. What I am trying to share via this post is the current status of the project, where we see PeARS down the road, how much we would love others to look into the project, and what not. Hopefully the first of many more come. :-)
<figure>
    <a href="/images/pear-logo.png"><img src="/images/pear-logo.png"></a>
</figure>

###What is PeARS?

Today, we have innumerable people using the Internet, each one of whom has access to an enormous amount of data. We are at a point of time where the zillion Internet users can help each other out to find information we are looking for rather than depending on centralized search engines some big corporate has set up for us. That's exactly the idea behind PeARS. Say n number of people have installed PeARS in their local machine. Over time, PeARS will index the search history of your browser(This happens locally and also you can choose what to index). Each one of these pears, that's what we call each installed system, will have a unique profile(anonymous or other wise based on the user preference) identifiable by another pear and can share their search index which other pears can use.

For example, Han is a skilled pilot who reads a lot of super awesome technical stuff about spaceships. He decides to index most of his browser history using PeARS and share it with other pears anonymously(he is trying to keep a low profile since Jabba the Hutt is looking for him). Luke, who just installed PeARS in his desktop, queries about Millennium Falcon. The distributional semantics algorithms in PeARS get search indices from pears which has same or similar terms. It clearly identifies Han Solo as a spaceship expert, gets his index along with others' and present it to Luke the fastest way possible. Luke starts reading about spaceships. He is not a bad pilot himself, now. :)<br/>
Luke try looking up about coolest lightsabers, but unfortunately none of the jedis were using PeARS. He gets redirected to Duck Duck go for the results. Over time, his search history also gets indexed locally which he decides to share. He became the most resourceful pear on lightsabers. And it goes on...

So like I mentioned earlier, it is very much reliant on the users of the big fat Internet. The links shared by each user helps PeARS rate them based on their resourcefulness on each topic and help others get most accurate results for their queries. No one tracking your search queries and no corporate telling you what to see.

It may sound incredibly ambitious, but the data each single one of us has access to makes this idea very much possible.


###Present Status

We are very much in the initial phase of the project. We have a prototype working which can index your local searches and queries from the couple of pears we have setup in our machines or from your local index.


###What next?

Most of the work is yet to be done. Presently, the system is not that efficient when it comes to performance, although search accuracy is near perfect. We are working on changing the data structures being used and making PeARS work faster. We plan an implementation very similar to BitTorrent to track and share data among the pears. We are yet to come up with the architecture.


###Who are we?

We are a bunch of people, who strongly believe that the future is distributed, working together to make a small step towards the next big change. The 5 of us involved with this project are:

1. <a href="http://aurelieherbelot.net/">Aurelie Herbelot</a>
2. <a href="http://stultus.in">Hrishikesh K.B.</a>
3. Veesa Norman
4. Shobha Tyagi
<br/>and of course me. :)


We usually hangout at the IRC channel #pears in Freenode.

###Do we need help?

What kind of question is that? Of course, we do!
<br/>The programming language we use is Python. We have hosted our code in Github, you can find the link below. We would be very much grateful to have people help us with developing, testing, documenting, publicizing, etc.


More details about the project to be followed in the next post.


###Some links

**1. [code](https://github.com/minimalparts/PeARS)**
<br/>**2. [More about PeARS](http://aurelieherbelot.net/pears/)**
